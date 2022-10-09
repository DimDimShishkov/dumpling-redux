const initialState = {
  isLoading: true,
  items: [],
  filterBy: 'all',
};

export const items = (state = initialState, action) => {
  switch (action.type) {
    // загрузка с сервера
    case 'SET_ITEMS':
      return {
        ...state,
        items: action.payload,
        isLoading: false,
      };

    // загрузить с сервера test
    case 'SET_LOADED':
      return {
        ...state,
        isLoading: false,
        items: action.payload,
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
