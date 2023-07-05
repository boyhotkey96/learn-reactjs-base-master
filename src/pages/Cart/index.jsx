import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartItemSelector, cartTotalSelector } from './selector';
import CartItem from './components/CartItem';

Cart.propTypes = {
  
};

function Cart(props) {
  const cartItems = useSelector(cartItemSelector)
  const cartTotal = useSelector(cartTotalSelector)

  return (
    <>
      <CartItem cartItems={cartItems} />
    </>
  );
}

export default Cart;