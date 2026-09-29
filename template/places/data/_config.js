/*
 * 여행 설정 — 이 여행만의 카테고리·지역·색·안내문
 * 옵션 전체 설명은 assets/trip-cards.js 상단 주석 참고.
 */
Trip.config({
  id: "{{ID}}",                       // 찜/다녀옴 저장 키 (여행마다 다르게)
  title: "{{TITLE}}",
  eyebrow: "ATTUNED TRAVELLERS",
  intro: "가볼 만한 곳과 먹어볼 것을 카드로 모았어요. 카드를 누르면 상세 정보가 열리고, 찜·다녀옴 표시는 이 브라우저에 저장됩니다.",
  mapSuffix: "{{CITY}}",              // 지도 검색어 뒤에 붙는 도시명
  accent: "#d9480f",

  // 카테고리를 '여행지 / 음식' 같은 큰 탭으로 묶고 싶을 때 (필요 없으면 삭제)
  groups: {
    spot: { label: "여행지", emoji: "📍" },
    food: { label: "음식", emoji: "🍽" },
  },

  categories: {
    sight: { group: "spot", label: "관광지", emoji: "📍", color: "#e4572e" },
    food:  { group: "food", label: "음식",   emoji: "🍜", color: "#f3a712" },
    cafe:  { group: "food", label: "카페",   emoji: "☕", color: "#c1666b" },
  },

  // 지역: key 로 쓰면 여기 label 이 보이고, 없으면 area 문자열이 그대로 보여요
  areas: {},

  // 시즌 메모 필드를 쓰려면 (카드 배지 + 필터 버튼이 생김)
  // seasonal: { field: "october", label: "10월 포인트", emoji: "🍁" },

  notes: [
    // { emoji: "🚃", title: "교통", text: "..." },
  ],
});
