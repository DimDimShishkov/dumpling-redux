export const addToCart = (item) => ({
  type: 'ADD_ITEM_CART',
  payload: item,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const removeCartItem = (item) => ({
  type: 'REMOVE_ITEM_CART',
  payload: item,
});

export const plusCartItem = (item) => ({
  type: 'PLUS_CART_ITEM',
  payload: item,
});

export const minusCartItem = (item) => ({
  type: 'MINUS_ITEM_CART',
  payload: item,
});

export const setCartItems = (item) => ({
  type: 'SET_CART_ITEMS',
  payload: item,
});