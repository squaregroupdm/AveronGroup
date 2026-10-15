"""Fetch the generated photographs listed in tools/photo-urls.txt, resize them for the web
and write assets/photo/<name>.jpg, assets/photo/m/<name>.jpg (960px) and WebP copies of both.
Runs inside GitHub Actions, which can reach the image host."""
import os, io, sys, urllib.request
class Tee:
    def __init__(self, path): self.f = open(path, 'w')
    def write(self, t): sys.__stdout__.write(t); self.f.write(t); self.f.flush()
    def flush(self): sys.__stdout__.flush()
sys.stdout = Tee(os.path.join(os.path.dirname(__file__), 'fetch-log.txt'))
from PIL import Image, ImageOps
ROOT = os.path.join(os.path.dirname(__file__), '..')
LIST = os.path.join(ROOT, 'tools', 'photo-urls.txt')
OUT = os.path.join(ROOT, 'assets', 'photo')
WIDE = {'hero-press': 2200, 'macro-foil': 2200, 'network-port': 2400, 'sust-kraft': 2000, 'cap-manufacturing': 2000, 'cap-freight': 2000}
os.makedirs(os.path.join(OUT, 'm'), exist_ok=True)
done = 0
for line in open(LIST):
    line = line.strip()
    if not line or line.startswith('#'): continue
    name, url = line.split(None, 1)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AveronSiteFetcher/1.0', 'Accept': 'image/*,*/*;q=0.8'})
        data = urllib.request.urlopen(req, timeout=300).read()
    except Exception as e:
        print('FAILED', name, repr(e)); continue
    if data[:1] == b'<':
        print('FAILED', name, 'got HTML, not an image'); continue
    if url.split('?')[0].lower().endswith(('.mp4', '.webm')):
        os.makedirs(os.path.join(ROOT, 'assets', 'video'), exist_ok=True)
        ext = '.webm' if url.split('?')[0].lower().endswith('.webm') else '.mp4'
        open(os.path.join(ROOT, 'assets', 'video', name + ext), 'wb').write(data)
        done += 1; print(name, 'video', len(data) // 1024, 'KB'); continue
    try:
        im = ImageOps.exif_transpose(Image.open(io.BytesIO(data))).convert('RGB')
    except Exception as e:
        print('FAILED', name, 'unreadable image', repr(e)); continue
    if name.startswith('cand-'):
        # Candidate pictures for review: a 900px copy in tools/candidates, nothing in the site
        cd = os.path.join(ROOT, 'tools', 'candidates'); os.makedirs(cd, exist_ok=True)
        c = im.resize((900, round(im.height * 900 / im.width)), Image.LANCZOS) if im.width > 900 else im
        c.save(os.path.join(cd, name + '.jpg'), quality=80); done += 1; print(name, im.size); continue
    maxw = WIDE.get(name, 1600)
    if im.width > maxw: im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
    im.save(os.path.join(OUT, name + '.jpg'), quality=80, optimize=True, progressive=True)
    im.save(os.path.join(OUT, name + '.webp'), 'WEBP', quality=74, method=6)
    m = im.resize((960, round(im.height * 960 / im.width)), Image.LANCZOS) if im.width > 960 else im
    m.save(os.path.join(OUT, 'm', name + '.jpg'), quality=78, optimize=True, progressive=True)
    m.save(os.path.join(OUT, 'm', name + '.webp'), 'WEBP', quality=74, method=6)
    done += 1
    print(name, im.size)
print('fetched', done)
