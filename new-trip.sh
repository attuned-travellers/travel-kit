#!/usr/bin/env bash
# 새 여행 폴더 만들기
#   사용법: ./new-trip.sh <폴더명> <id> "<제목>" "<지도용 도시명>"
#   예시:   ./new-trip.sh japan-fukuoka fukuoka "후쿠오카 여행 카드" "福岡"
set -euo pipefail
KIT="$(cd "$(dirname "$0")" && pwd)"
[ $# -lt 4 ] && { sed -n 2,4p "$0"; exit 1; }
DEST="$KIT/../$1"; ID="$2"; TITLE="$3"; CITY="$4"; DATE="$(date +%F)"
[ -e "$DEST/index.html" ] && { echo "이미 존재: $DEST/index.html"; exit 1; }
mkdir -p "$DEST/assets" "$DEST/places/data"
cp "$KIT"/assets/trip-cards.* "$DEST/assets/"
for f in index.html places/data/_config.js places/data/spots.js places/data/food.js; do
  sed -e "s|{{ID}}|$ID|g" -e "s|{{TITLE}}|$TITLE|g" -e "s|{{CITY}}|$CITY|g" -e "s|{{DATE}}|$DATE|g" \
    "$KIT/template/$f" > "$DEST/$f"
done
echo "생성 완료: $DEST  → index.html 을 브라우저로 여세요."
