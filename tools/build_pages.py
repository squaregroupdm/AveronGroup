"""Assemble the pages from tools/pages/*.html and tools/partials. Run: python3 tools/build_pages.py"""
import os, re
ROOT = os.path.join(os.path.dirname(__file__), '..')
P = os.path.join(ROOT, 'tools', 'partials'); S = os.path.join(ROOT, 'tools', 'pages')
head = open(os.path.join(P, 'head.html')).read(); nav = open(os.path.join(P, 'nav.html')).read(); foot = open(os.path.join(P, 'footer.html')).read()
from PIL import Image
def pic(m):
    parts = m.group(1).split('|'); name = parts[0]; sizes = parts[1]; alt = parts[2]; eager = len(parts) > 3 and parts[3] == 'eager'
    w, h = Image.open(os.path.join(ROOT, 'assets', 'photo', name + '.jpg')).size
    load = 'fetchpriority="high"' if eager else 'loading="lazy" decoding="async"'
    return ('<picture><source type="image/webp" srcset="assets/photo/m/%s.webp 960w, assets/photo/%s.webp %dw" sizes="%s">'
            '<img src="assets/photo/m/%s.jpg" srcset="assets/photo/m/%s.jpg 960w, assets/photo/%s.jpg %dw" sizes="%s" width="%d" height="%d" alt="%s" %s></picture>') % (name, name, w, sizes, name, name, name, w, sizes, w, h, alt.replace('"', '&quot;'), load)
for f in sorted(os.listdir(S)):
    src = open(os.path.join(S, f)).read()
    meta = dict(re.findall(r'<!--\s*(\w+):\s*(.*?)\s*-->', src.split('<!-- body -->')[0]))
    land = open(os.path.join(P, 'land-path.txt')).read().strip()
    src = src.replace('{{LAND}}', '<path d="%s" fill="rgba(251,234,213,0.09)" fill-rule="evenodd"/>' % land)
    body = re.sub(r'\{\{pic:(.*?)\}\}', pic, src.split('<!-- body -->')[1])
    h = head.replace('{{TITLE}}', meta['title']).replace('{{DESC}}', meta['desc']).replace('{{CANON}}', '' if f == 'index.html' else f)
    n = nav
    for k in ['SOLUTIONS', 'HOW', 'ABOUT']:
        n = n.replace('{{CUR_%s}}' % k, 'aria-current="page"' if meta.get('cur') == k.lower() else '')
    n = n.replace(' >', '>')
    out = '<!doctype html>\n<html lang="en">\n<head>\n' + h + meta.get('extra', '') + '\n</head>\n<body class="' + meta.get('body', '') + '">\n' + n + body + foot + '\n</body>\n</html>\n'
    open(os.path.join(ROOT, f), 'w').write(out)
    print('built', f)
