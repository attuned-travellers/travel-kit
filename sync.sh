#!/usr/bin/env bash
# travel-kit/assets 의 엔진을 모든 여행 폴더(../*/assets/trip-cards.js 가 있는 곳)로 복사
set -euo pipefail
KIT="$(cd "$(dirname "$0")" && pwd)"
for dir in "$KIT"/../*/; do
  dir="$(cd "$dir" && pwd)"
  [ "$dir" = "$KIT" ] && continue
  if [ -f "$dir/assets/trip-cards.js" ]; then
    cp "$KIT"/assets/trip-cards.* "$dir/assets/"
    echo "synced: $(basename "$dir")"
  fi
done
