const addToCart = (product) => (dispatch) => {
  console.log(product);
  dispatch({
    type: "ADD_TO_CART",
    payload: product,
  });
};

export default {
  addToCart,
};
