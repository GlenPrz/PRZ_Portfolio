const Data = (id, title, desc) => {
  return {
    id,
    title,
    desc,
  };
};

export const datas = [
  Data(1, "Card 1", "This is the first card."),
  Data(2, "Card 2", "This is the second card."),
  Data(3, "Card 3", "This is the third card."),
];

//Make this a json file
//
// [
//   {
//     "id": 1,
//     "title": "Card 1",
//     "desc": "This is the first card."
//   },
//   {
//     "id": 2,
//     "title": "Card 2",
//     "desc": "This is the second card."
//   },
//   {
//     "id": 3,
//     "title": "Card 3",
//     "desc": "This is the third card."
//   }
// ]
