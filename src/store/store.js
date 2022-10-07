/* import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer'

export const store = configureStore({
  reducer: rootReducer,
})
 */
import { configureStore, createListenerMiddleware, createAction } from '@reduxjs/toolkit';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'; // следит за всем изменениями в хранилище
import rootReducer from './reducers/rootReducer';
import { api } from '../utils/api';
import {setItems} from './actions/items'

let setItemsFromServer = createAction("SET_ITEMS");

const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
  actionCreator: setItemsFromServer,
  effect: async (action, listenerApi) => {
    console.log("сработал слушатель в сторе")
    console.log(action)
    const itemsFromServer = await api.downloadMenuFromServer();
    listenerApi.dispatch(setItems(itemsFromServer));
    listenerApi.unsubscribe();
  }
})
// снятие всех слушателей
//listenerMiddleware.clearListeners();

listenerMiddleware.startListening({
  type: "DECREMENT", // notation 1
  effect: async (action, listenerApi) => console.log("Listener 1: DECREMENT")
});

/* 
    // Run whatever additional side-effect-y logic you want here
    console.log('Todo added: ', action.payload.text)

    // Can cancel other running instances
    listenerApi.cancelActiveListeners()

    // Run async logic
    const data = await fetchData()

    // Pause until action dispatched or state changed
    if (await listenerApi.condition(matchSomeAction)) {
      // Use the listener API methods to dispatch, get state,
      // unsubscribe the listener, start child tasks, and more
      listenerApi.dispatch(todoAdded('Buy pet food'))

      // Spawn "child tasks" that can do more work and return results
      const task = listenerApi.fork(async (forkApi) => {
        // Can pause execution
        await forkApi.delay(5)
        // Complete the child by returning a value
        return 42
      })

      const result = await task.result
      // Unwrap the child result in the listener
      if (result.status === 'ok') {
        // Logs the `42` result value that was returned
        console.log('Child succeeded: ', result.value)
      }
    }
  },
}) */




/* 
listenerMiddleware.startListening({
  actionCreator: todoAdded,
  effect: async (action, listenerApi) => {
    // Run whatever additional side-effect-y logic you want here
    console.log('Todo added: ', action.payload.text)

    // Can cancel other running instances
    listenerApi.cancelActiveListeners()

    // Run async logic
    const data = await fetchData()

    // Pause until action dispatched or state changed
    if (await listenerApi.condition(matchSomeAction)) {
      // Use the listener API methods to dispatch, get state,
      // unsubscribe the listener, start child tasks, and more
      listenerApi.dispatch(todoAdded('Buy pet food'))

      // Spawn "child tasks" that can do more work and return results
      const task = listenerApi.fork(async (forkApi) => {
        // Can pause execution
        await forkApi.delay(5)
        // Complete the child by returning a value
        return 42
      })

      const result = await task.result
      // Unwrap the child result in the listener
      if (result.status === 'ok') {
        // Logs the `42` result value that was returned
        console.log('Child succeeded: ', result.value)
      }
    }
  },
}) */

// на случай дебаггинга
// const store = createStore(rootReducer, applyMiddleware(logger));

// на прод
const store = configureStore({ 
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),

})

export default store;