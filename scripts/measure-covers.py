#!/usr/bin/env python3
"""Regenerate src/data/cover-dims.json from the files in public/covers.

Run after adding a cover. Leanpub covers are not a uniform aspect ratio, so
these dimensions are measured rather than assumed — guessing them stretches
the images (and costs layout stability).
"""
import json, os, struct

def jpeg_size(path):
    data = open(path, 'rb').read()
    i = 2
    while i < len(data):
        if data[i] != 0xFF:
            i += 1
            continue
        m = data[i + 1]
        if m in (0xC0, 0xC1, 0xC2, 0xC3, 0xC5, 0xC6, 0xC7, 0xC9, 0xCA, 0xCB, 0xCD, 0xCE, 0xCF):
            h, w = struct.unpack('>HH', data[i + 5:i + 9])
            return w, h
        if m in (0xD8, 0xD9) or 0xD0 <= m <= 0xD7:
            i += 2
            continue
        i += 2 + struct.unpack('>H', data[i + 2:i + 4])[0]
    raise ValueError(f'no SOF marker in {path}')

root = os.path.join(os.path.dirname(__file__), '..')
covers = os.path.join(root, 'public', 'covers')
dims = {}
for f in sorted(os.listdir(covers)):
    if f.endswith('.jpg'):
        w, h = jpeg_size(os.path.join(covers, f))
        dims[f[:-4]] = {'w': w, 'h': h}

out = os.path.join(root, 'src', 'data', 'cover-dims.json')
json.dump(dims, open(out, 'w'), indent=2, sort_keys=True)
print(f'{len(dims)} covers measured -> {out}')
