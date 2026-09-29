// 음식 — where 에 추천 가게를 넣으면 상세 화면에 링크 목록으로 보여요.
Trip.add([
  {
    id: "sample-food",
    category: "food",
    name: "예시 음식",
    nameLocal: "料理名",
    area: "중심가",
    summary: "어떤 음식인지 한두 문장.",
    where: [
      { name: "가게 이름 (店名)", area: "지역", note: "한 줄 메모", map: "지도 검색어(선택)" },
    ],
    price: 2,
    priority: "good",
    tags: ["점심"],
    added: "{{DATE}}",
  },
]);
