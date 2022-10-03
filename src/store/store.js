/* import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer'

export const store = configureStore({
  reducer: rootReducer,
})
 */
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'; // следит за всем изменениями в хранилище
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;