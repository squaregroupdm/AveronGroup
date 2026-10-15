"""Stand-in pictures for every photo slot until the generated photographs are placed in
site/assets/photo/. Each is a navy-graded board texture carrying the shot's subject in small
ivory type, so the layout can be judged and nothing ships unlabelled."""
import os, json, sys
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter
ROOT = os.path.join(os.path.dirname(__file__), '..')
OUT = os.path.join(ROOT, "assets", "photo")
os.makedirs(OUT, exist_ok=True)
rng = np.random.default_rng(3)
shots = json.load(open(os.path.join(ROOT, 'photo-map.json')))
subjects = {s['file']: s['file'].replace('-', ' ') for s in shots}
def noise(w, h, scale, amp):
    small = rng.normal(0, 1, (max(2, h // scale), max(2, w // scale)))
    img = Image.fromarray(((small - small.min()) / (small.max() - small.min()) * 255).astype('uint8')).resize((w, h), Image.BICUBIC)
    return (np.asarray(img).astype('float32') / 255 - 0.5) * 2 * amp
font = None
for p in ['/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf']:
    if os.path.exists(p): font = ImageFont.truetype(p, 28)
for s in shots:
    w_, h_ = [int(x) for x in s['ar'].split(':')]
    W = 1600; H = int(W * h_ / w_)
    base = np.array([24, 38, 74], dtype='float32') if (s['index'] % 3) else np.array([42, 56, 92], dtype='float32')
    arr = np.zeros((H, W, 3), dtype='float32') + base
    arr += (noise(W, H, 3, 9) + noise(W, H, 24, 14) + noise(W, H, 120, 18))[..., None]
    y, x = np.mgrid[0:H, 0:W]
    arr += ((x / W) * 0.6 + (y / H) * 0.4 - 0.5)[..., None] * 26
    img = Image.fromarray(np.clip(arr, 0, 255).astype('uint8'))
    d = ImageDraw.Draw(img)
    d.rectangle([36, H - 96, 36 + 14, H - 82], fill=(251, 234, 213))
    d.text((62, H - 104), 'Photograph in preparation: ' + subjects[s['file']], fill=(251, 234, 213), font=font)
    img.save(os.path.join(OUT, s['file'] + '.jpg'), quality=78, optimize=True)
print('stand-ins:', len(shots))
