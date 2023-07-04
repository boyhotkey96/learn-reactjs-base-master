import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItems: [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    hideMiniCart(state) {
      state.hideMiniCart = false;
    },
    addToCart(state, action) {
      const newItem = action.payload;

      const index = state.cartItems.findIndex((x) => {
        return x.id === newItem.id;
      });
      console.log(index);

      if (index >= 0) {
        // increase quanlity
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        // add to cart
        state.cartItems.push(newItem);
      }
    },
    setQuanlity(state, action) {
      const { id, quantity } = action.payload;

      // check if product is available in cart
      const index = state.cartItems.findIndex((x) => x.id === id);

      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },
    removeFromCart(state, action) {
      const idNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove);
    },
  },
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, addToCart, setQuanlity, removeFromCart } = actions; // name export
export default reducer; // default export
