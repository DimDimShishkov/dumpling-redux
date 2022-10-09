const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalCount: 0,
};
// добавить поле количество для добавленных элементов добавляя 1 в поле количество
const getTotalPrice = (arr) => {
  return arr.reduce((sum, obj) => obj.price * obj.total + sum, 0);
};

const getTotalCounts = (arr) => {
  return arr.reduce((sum, obj) => obj.total + sum, 0);
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    // загрузка с сервера
    case 'SET_CART_ITEMS':
      return {
        ...state,
        cartItems: action.payload,
      };

    // добавить в корзину
    case 'ADD_ITEM_CART': {
      const newCartItems = state.cartItems.map((el) =>
        el.id === action.payload.id ? { ...el, total: el.total + 1 } : { ...el },
      );

      return {
        ...state,
        cartItems: newCartItems,
        totalCount: getTotalCounts(newCartItems),
        totalPrice: getTotalPrice(newCartItems),
      };
    }
    // удалить позицию из корзины
    case 'REMOVE_ITEM_CART': {
      const newCartItems = state.cartItems.map((el) =>
        el.id === action.payload.id ? { ...el, total: 0 } : { ...el },
      );
      return {
        ...state,
        cartItems: newCartItems,
        totalCount: getTotalCounts(newCartItems),
        totalPrice: getTotalPrice(newCartItems),
      };
    }
    // убрать один элемент из корзины
    case 'MINUS_ITEM_CART': {
      const newCartItems = state.cartItems.map((el) =>
        el.id === action.payload.id ? { ...el, total: el.total - 1 } : { ...el },
      );

      return {
        ...state,
        cartItems: newCartItems,
        totalCount: getTotalCounts(newCartItems),
        totalPrice: getTotalPrice(newCartItems),
      };
    }

    case 'CLEAR_CART':
      return { totalPrice: 0, totalCount: 0, cartItems: [] };

    default:
      return state;
  }
};

export default cart;
