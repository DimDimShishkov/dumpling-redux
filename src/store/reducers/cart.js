const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

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
      const currentFoodItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentFoodItems,
          totalPrice: getTotalPrice(currentFoodItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case 'REMOVE_CART_ITEM': {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case 'PLUS_CART_ITEM': {
      const newObjItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, state.items[action.payload.id].items[0]];

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case 'MINUS_CART_ITEM': {
      const oldItems = state.items[action.payload.id].items;
      const sliceObj = oldItems.slice(1);

      if (oldItems.length > 1) {
        const newItemsFull = {
          ...state.items,
          [action.payload.id]: {
            items: sliceObj,
            totalPrice: getTotalPrice(sliceObj),
          },
        };
        const totalCount = getTotalSum(newItemsFull, 'items.length');
        const totalPrice = getTotalSum(newItemsFull, 'totalPrice');
        return {
          ...state,
          items: newItemsFull,
          totalCount,
          totalPrice,
        };
      } else {
        const newItems = {
          ...state.items,
        };
        const currentTotalPrice = newItems[action.payload.id].totalPrice;
        const currentTotalCount = newItems[action.payload.id].items.length;
        delete newItems[action.payload.id];
        return {
          ...state,
          items: newItems,
          totalPrice: state.totalPrice - currentTotalPrice,
          totalCount: state.totalCount - currentTotalCount,
        };
      }
    }

    case 'CLEAR_CART':
      return { totalPrice: 0, totalCount: 0, items: {} };

    default:
      return state;
  }
};

export default cart;
