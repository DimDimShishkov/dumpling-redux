export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const setItems = (items) => ({
  type: 'SET_ITEMS',
  payload: items,
});

export const getItems = () => ({
  type: 'GET_ITEMS'
});

// добавить акшион get_items который будет загружать данные 