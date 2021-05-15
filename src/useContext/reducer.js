export const initialState = {
  basket: [],
  totalAmount: 0,
  user: null,
};

export const reducer = (state, action) => {
  let updatedItems;
  switch (action.type) {
    case "ADD":
      const existItemIndex = state.basket.findIndex(
        (item) => item.id === action.item.id
      );
      if (existItemIndex !== -1) {
        const existItem = state.basket[existItemIndex];
        existItem.amount += action.item.amount;
        updatedItems = [...state.basket];
      } else {
        updatedItems = [...state.basket, action.item];
      }
      return {
        basket: updatedItems,
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };
    case "REMOVE":
      const updatedAmount =
        state.totalAmount - action.item.price * action.item.amount;

      const itemIndexFound = state.basket.findIndex(
        (item) => item.id === action.item.id
      );
      const itemFound = state.basket[itemIndexFound];
      if (itemFound.amount === action.item.amount) {
        const filtedItems = state.basket.filter(
          (item) => item.id !== action.item.id
        );
        updatedItems = [...filtedItems];
      } else {
        itemFound.amount -= action.item.amount;
        updatedItems = [...state.basket];
      }
      return {
        basket: updatedItems,
        totalAmount: updatedAmount,
      };
    case "ADD_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ORDER":
      return {
        ...state,
        basket: [],
        totalAmount: 0,
      };
    default:
      return state;
  }
};

// case "REMOVE":
//       const itemIdFound = state.basket.filter(
//         (item) => item.id === action.item.id
//       );
//       itemIdFound.amount -= action.item.amount;
//       updatedItems = [...state.basket];
//       return {
//         basket: updatedItems,
//         totalAmount: state.totalAmount - action.item.price * action.item.amount,
//       };
