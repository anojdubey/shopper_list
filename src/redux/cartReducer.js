const initialState = [
  {
    id: 1,
    name: "Toys Center",
    category: "Toys",
    location: "Pune",
    opening: "10-5-2022",
    closing: "14-6-2022",
    status: "open",
  },
  {
    id: 2,
    name: "Nice Bakery",
    category: "Baker",
    location: "mumbai",
    opening: "10-5-2022",
    closing: "14-6-2022",
    status: "closed",
  },
  {
    id: 3,
    name: "Novo Medical",
    category: "chemist",
    location: "Ahmednagar",
    opening: "10-5-2022",
    closing: "14-6-2022",
    status: "open",
  },
  {
    id: 4,
    name: "Kirana Maal",
    category: "General Store",
    location: "Mumbai",
    opening: "10-5-2022",
    closing: "14-6-2022",
    status: "open",
  },
];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_SHOP":
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
}
