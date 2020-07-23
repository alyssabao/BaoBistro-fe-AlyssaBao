const initialState = {
  cart: [],
  quantities: [],
};

const cartReducer = (state = initialState, action) => {
  let cart = [...state.cart];
  let quantities = [...state.quantities];
  let flag = false;

  switch (action.type) {
    case "ADD_TO_CART":
      // Check wherther the product is already in the cart
      for (let index = 0; index < cart.length; index++) {
        if (cart[index]._id === action.payload._id) {
          // Increase the quantities
          quantities[index]++;
          flag = true;
        }
      }
      // Else
      if (!flag) {
        // Add the new product to the cart and 1 to the quantities
        cart = [...cart, action.payload];
        quantities = [...quantities, 1];
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("quantities", JSON.stringify(quantities));
      // console.log(action)
      return Object.assign({}, state, {
        cart: cart,
        quantities: quantities,
      });
    case "DELETE_PRODUCT_FROM_CART":
      // Check wherther the product is in the cart
      for (let index = 0; index < cart.length; index++) {
        if (cart[index]._id === action.payload) {
          //   Remove the product
          cart.splice(index, 1);
          quantities.splice(index, 1);

          flag = true;
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("quantities", JSON.stringify(quantities));
      // console.log(action)
      return Object.assign({}, state, {
        cart: cart,
        quantities: quantities,
      });

    case "UPDATE_QUANTITIES":
        quantities[action.payload.index] = action.payload.value
        localStorage.setItem("quantities", JSON.stringify(quantities));
        return Object.assign({}, state, {
            quantities: quantities,
          });

    case "SET_CART_VALUES":
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default cartReducer;
