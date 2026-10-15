"""Fetch the generated photographs listed in tools/photo-urls.txt, resize them for the web
and write them into assets/photo/<name>.jpg. Runs inside GitHub Actions."""
import os, sys, io, urllib.request
from PIL import Image, ImageOps
ROOT = os.path.join(os.path.dirname(__file__), '..')
LIST = os.path.join(ROOT, 'tools', 'photo-urls.txt')
OUT = os.path.join(ROOT, 'assets', 'photo')
WIDE = {'hero-press': 2200, 'macro-foil': 2200, 'network-port': 2400, 'sust-kraft': 2000, 'cap-manufacturing': 2000, 'cap-freight': 2000}
done = 0
for line in open(LIST):
    line = line.strip()
    if not line or line.startswith('#'): continue
    name, url = line.split(None, 1)
    data = urllib.request.urlopen(url, timeout=120).read()
    im = ImageOps.exif_transpose(Image.open(io.BytesIO(data))).convert('RGB')
    maxw = WIDE.get(name, 1600)
    if im.width > maxw: im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
    im.save(os.path.join(OUT, name + '.jpg'), quality=80, optimize=True, progressive=True)
    done += 1
    print(name, im.size, os.path.getsize(os.path.join(OUT, name + '.jpg')) // 1024, 'KB')
print('fetched', done)
# The stand-in note in the footer is no longer true once the photographs are in place
idx = os.path.join(ROOT, 'index.html')
html = open(idx, encoding='utf-8').read()
html = html.replace('<span>Photography in preparation; images shown are production stand-ins until the photographic set is approved.</span>', '<span>Connecting Markets. Managing Supply.</span>')
open(idx, 'w', encoding='utf-8').write(html)
