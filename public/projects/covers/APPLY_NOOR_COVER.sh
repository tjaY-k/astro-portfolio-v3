#!/bin/bash
set -euo pipefail
SRC1="/Users/konstantinlaptev/.grok/sessions/%2FUsers%2Fkonstantinlaptev%2F.grok%2Fworktrees%2Fgithub-astro-portfolio-v3%2Fsite/019fd7a6-3ff7-7213-9519-7b8899718744/images/4.jpg"
SRC2="/Users/konstantinlaptev/.grok/sessions/%2FUsers%2Fkonstantinlaptev%2F.grok%2Fworktrees%2Fgithub-astro-portfolio-v3%2Fsite/019fd7a6-3ff7-7213-9519-7b8899718744/images/1.jpg"
DST="/Users/konstantinlaptev/Documents/GitHub/astro-portfolio-v3/public/projects/covers/noor-riyadh-2025.jpg"
URL="https://www.mediaproav.com/wp-content/uploads/2025/12/DSC02058-scaled.jpg"
for s in "$SRC1" "$SRC2"; do
  if [[ -f "$s" ]]; then cp -f "$s" "$DST"; break; fi
done
if [[ ! -f "$DST" ]] || [[ $(wc -c < "$DST") -lt 100000 ]]; then
  curl -fsSL -A "Mozilla/5.0" -o "$DST" "$URL" || \
  python3 -c "import urllib.request; urllib.request.urlretrieve('$URL','$DST')"
fi
SIZE=$(wc -c < "$DST" | tr -d ' ')
MAGIC=$(xxd -l 2 -p "$DST")
echo "size=$SIZE magic=$MAGIC"
[[ "$SIZE" == "462239" ]] && [[ "$MAGIC" == "ffd8" ]] && echo SUCCESS || echo FAIL
