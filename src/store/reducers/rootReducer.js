import { combineReducers } from 'redux';
import {items} from './items';
import cart from './cart';

const rootReducer = combineReducers({
  items,
  cart,
});

export default rootReducer