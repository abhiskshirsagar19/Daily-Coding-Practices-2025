export const shoppingCartReducer = (state, action) => {
  switch (action.key) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};
