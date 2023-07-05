import { createSelector } from '@reduxjs/toolkit';

export const cartItemSelector = (state) => state.cart.cartItems;

// Count number of products in cart
export const cartItemCountSelector = createSelector(cartItemSelector, (cartItems) =>
  cartItems.reduce((count, item) => count + item.quantity, 0)
);

// Caculate total of cart
export const cartTotalSelector = createSelector(cartItemSelector, (cartItems) =>
  cartItems.reduce((total, item) => total + item.product.salePrice * item.quantity, 0)
);
