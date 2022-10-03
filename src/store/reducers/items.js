const initialState = {
  isLoading: false,
  items: [],
  filterBy: 'all',
};

export const items = (state = initialState, action) => {
  switch (action.type) {
    // загрузка с сервера
    case 'SET_ITEMS':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    // загрузить картинки в каталог с сервера
    case 'SET_LOADED':
      return {
        ...state,
        items: action.payload,
        isLoading: true,
      };
          // фильтр по продуктам
    case 'SET_FILTER':
      return {
        ...state,
        filterBy: action.payload,
      };
    default:
      return state;
  }
};
