import { createStore, applyMiddleware, compose, StoreCreator, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware as createRouterMiddleware, } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import { rootReducer } from './features/root/root-reducer';
import ApiMiddleware from './middlewares/ApiMiddleware';

import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

const composeEnhancers = (
  process.env.NODE_ENV !== 'production' &&
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

console.log('process.env.');
console.log(process.env.DOMAIN_PATH);

export const browserHistory = createBrowserHistory({
  basename: process.env.DOMAIN_PATH
});


export const routerMiddleware = createRouterMiddleware(browserHistory);


function configureStore(initialState) {
  // configure middlewares
  const middlewares = [
    thunkMiddleware,    
   	ApiMiddleware,
   // IndividualApi,
    //epicMiddleware,
    routerMiddleware,    
    //logger,
  ];

  if(process.env.NODE_ENV !== 'production'){
    middlewares.push(logger);
  }
  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );
  // create store
  return createStore(    
    rootReducer,
    initialState,
    enhancer
  );
}

// pass an optional param to rehydrate state on app start
export const store = configureStore();

// export store singleton instance
export default store;
