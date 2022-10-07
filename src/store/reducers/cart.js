const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalCount: 0,
};
// добавить поле количество для добавленных элементов добавляя 1 в поле количество
const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_CART': {
      const currentFoodItems = !state.cartItems[action.payload.id]
        ? [action.payload]
        : [...state.cartItems[action.payload.id].cartItems, action.payload];

      const newItems = {
        ...state.cartItems,
        [action.payload.id]: {
          cartItems: currentFoodItems,
          totalPrice: getTotalPrice(currentFoodItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'cartItems.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        cartItems: newItems,
        totalCount,
        totalPrice,
      };
    }

    case 'REMOVE_CART_ITEM': {
      const newItems = {
        ...state.cartItems,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].cartItems.length;
      delete newItems[action.payload];
      return {
        ...state,
        cartItems: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case 'PLUS_CART_ITEM': {
      const newObjItems = !state.cartItems[action.payload.id]
        ? [action.payload]
        : [...state.cartItems[action.payload.id].cartItems, state.cartItems[action.payload.id].cartItems[0]];

      const newItems = {
        ...state.cartItems,
        [action.payload]: {
          cartItems: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'cartItems.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        cartItems: newItems,
        totalCount,
        totalPrice,
      };
    }

    case 'MINUS_CART_ITEM': {
      const oldItems = state.cartItems[action.payload.id].cartItems;
      const sliceObj = oldItems.slice(1);

      if (oldItems.length > 1) {
        const newItemsFull = {
          ...state.cartItems,
          [action.payload.id]: {
            cartItems: sliceObj,
            totalPrice: getTotalPrice(sliceObj),
          },
        };
        const totalCount = getTotalSum(newItemsFull, 'cartItems.length');
        const totalPrice = getTotalSum(newItemsFull, 'totalPrice');
        return {
          ...state,
          cartItems: newItemsFull,
          totalCount,
          totalPrice,
        };
      } else {
        const newItems = {
          ...state.cartItems,
        };
        const currentTotalPrice = newItems[action.payload.id].totalPrice;
        const currentTotalCount = newItems[action.payload.id].cartItems.length;
        delete newItems[action.payload.id];
        return {
          ...state,
          cartItems: newItems,
          totalPrice: state.totalPrice - currentTotalPrice,
          totalCount: state.totalCount - currentTotalCount,
        };
      }
    }

    case 'CLEAR_CART':
      return { totalPrice: 0, totalCount: 0, cartItems: {} };

    default:
      return state;
  }
};

export default cart;
