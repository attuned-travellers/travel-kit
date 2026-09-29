// 여행지 — 템플릿을 복사해 항목을 추가하세요.
Trip.add([
  {
    id: "sample-spot",                // 영문 kebab-case, 중복 금지
    category: "sight",                // _config.js categories 의 key
    name: "예시 장소",
    nameLocal: "現地名",
    area: "중심가",
    summary: "한두 문장 소개.",
    highlights: ["볼거리 1", "볼거리 2"],
    tips: "현지 팁 (문자열 또는 배열)",
    price: 0,                         // 0=무료, 1~4=¥ 단계, 또는 "¥500" 같은 문자열
    duration: "1시간",
    hours: "09:00–17:00",
    priority: "must",                 // must | good | maybe
    tags: ["사진명소"],
    added: "{{DATE}}",
  },
]);
