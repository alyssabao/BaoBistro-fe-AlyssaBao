const initialState = {
  products: [],
  error: "",
  loading: true,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_START":
      return Object.assign({}, state, { loading: true });
    case "GET_PRODUCTS_SUCCESS":
      let products = state.products;
      products = [...products, ...action.payload];
      return Object.assign({}, state, {
        products: products,
        loading: false,
      });
    case "GET_PRODUCTS_FAILURE":
      return Object.assign({}, state, {
        error: action.payload,
        loading: false,
      });
    default:
      return state;
  }
};

export default productReducer;
