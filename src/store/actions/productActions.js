const getProducts = () => async (dispatch) => {
  dispatch({
    type: "GET_PRODUCTS_START",
    payload: null,
  });
  try {
    let url = `http://localhost:5000/food`;
    let data = await fetch(url);
    let result = await data.json();

    dispatch({
      type: "GET_PRODUCTS_SUCCESS",
      payload: result,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "GET_PRODUCTS_FAILURE",
      payload: error,
    });
  }
};

export default {
  getProducts,
};
