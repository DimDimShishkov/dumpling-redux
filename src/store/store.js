import { configureStore, createAction, createListenerMiddleware } from '@reduxjs/toolkit';
import { api } from '../utils/api';
import { setCartItems } from './actions/cart';
import { setItems } from './actions/items';
import rootReducer from './reducers/rootReducer';

let setItemsFromServer = createAction('SET_ITEMS');
let setCartItemsFromServer = createAction('SET_CART_ITEMS');

const listenerMiddleware = createListenerMiddleware();

// загрузка каталога меню с сервера
listenerMiddleware.startListening({
  actionCreator: setItemsFromServer,
  effect: async (action, listenerApi) => {
    const itemsFromServer = await api.downloadMenuFromServer();
    listenerApi.dispatch(setItems(itemsFromServer));
    listenerApi.unsubscribe();
  },
});

// загрузка каталога корзины с сервера
listenerMiddleware.startListening({
  actionCreator: setCartItemsFromServer,
  effect: async (action, listenerApi) => {
    const itemsFromServer = await api.downloadCartFromServer();
    listenerApi.dispatch(setCartItems(itemsFromServer));
    listenerApi.unsubscribe();
  },
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export default store;
