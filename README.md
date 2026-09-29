# travel-kit

Attuned Travellers 여행 카드 가이드의 **공용 엔진 + 새 여행 템플릿**.
모든 여행 폴더(`japan-osaka`, `japan-kyoto`, …)는 이 엔진을 복사해서 씁니다.

```
travel-kit/
├── assets/
│   ├── trip-cards.js    # 엔진 (원본) — 옵션·아이템 스키마는 파일 상단 주석
│   └── trip-cards.css   # 공용 디자인 (밝은 테마)
├── template/            # 새 여행 뼈대 (index.html + places/data/*)
├── new-trip.sh          # 새 여행 폴더 만들기
└── sync.sh              # 엔진 수정 후 모든 여행 폴더에 배포
```

## 새 여행 시작

```bash
./new-trip.sh japan-fukuoka fukuoka "후쿠오카 여행 카드" "福岡"
```

→ `../japan-fukuoka/` 에 `index.html`, `assets/`, `places/data/` 가 생깁니다.
그다음 `places/data/_config.js` 에서 카테고리·지역·색(accent)·안내문을 고치고,
데이터 파일에 `Trip.add([...])` 로 항목을 넣으면 끝.

## 여행마다 다른 것 / 같은 것

| 여행마다 다름 (각 여행 폴더) | 모두 같음 (travel-kit 원본) |
| --- | --- |
| `places/data/_config.js` — 제목, 카테고리, 지역, 포인트 색, 안내 카드, 시즌 필드 | `assets/trip-cards.js` — 렌더링·필터·찜·모달 |
| `places/data/*.js` — 장소·음식 데이터 | `assets/trip-cards.css` — 디자인 |
| `index.html` — 데이터 script 목록만 | |

## 엔진 수정

1. `travel-kit/assets/` 에서 고칩니다 (여행 폴더의 사본은 직접 고치지 않기).
2. 파일 상단 `version` 을 올리고 `./sync.sh` 실행 → 모든 여행 폴더에 복사.
3. 기존 데이터가 깨지지 않도록 **옵션·필드는 추가만** 하고 이름을 바꾸지 않기.

## 주요 기능 (config 로 켜고 끔)

- `groups` — 카테고리를 "여행지 / 음식" 같은 큰 탭으로 묶기
- `seasonal: { field, label, emoji }` — 시즌 메모 배지와 필터 (예: 오사카 10월 포인트)
- `notes` — 헤더 아래 안내 카드 (교통, 매너 등)
- 아이템 `where` — 음식 카드의 추천 가게 목록 (상세 화면에 지도 링크)
- `price` — 숫자(0=무료, 1~4=¥ 단계) 또는 자유 문자열
- 찜·다녀옴은 `<id>:fav`, `<id>:visited` 로 브라우저에 저장
