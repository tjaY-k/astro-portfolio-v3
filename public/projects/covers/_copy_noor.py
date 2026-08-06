#!/usr/bin/env python3
"""Copy Noor Riyadh cover JPEG from session cache or download from source."""
import os
import shutil
import urllib.request

DST = "/Users/konstantinlaptev/Documents/GitHub/astro-portfolio-v3/public/projects/covers/noor-riyadh-2025.jpg"
SRC_CANDIDATES = [
    "/Users/konstantinlaptev/.grok/sessions/%2FUsers%2Fkonstantinlaptev%2F.grok%2Fworktrees%2Fgithub-astro-portfolio-v3%2Fsite/019fd7a6-3ff7-7213-9519-7b8899718744/images/1.jpg",
    "/Users/konstantinlaptev/.grok/sessions/%2FUsers%2Fkonstantinlaptev%2F.grok%2Fworktrees%2Fgithub-astro-portfolio-v3%2Fsite/019fd7a4-3719-7fe1-88a1-3741addf87de/images/1.jpg",
]
URL = "https://www.mediaproav.com/wp-content/uploads/2025/12/DSC02058-scaled.jpg"

os.makedirs(os.path.dirname(DST), exist_ok=True)
copied = False
for src in SRC_CANDIDATES:
    if os.path.isfile(src) and os.path.getsize(src) > 100000:
        shutil.copyfile(src, DST)
        copied = True
        print(f"copied from {src}")
        break

if not copied:
    urllib.request.urlretrieve(URL, DST)
    print("downloaded from URL")

size = os.path.getsize(DST)
with open(DST, "rb") as f:
    magic = f.read(2)
print(f"size={size} magic={magic.hex()} ok={size == 462239 and magic == b'\\xff\\xd8'}")
