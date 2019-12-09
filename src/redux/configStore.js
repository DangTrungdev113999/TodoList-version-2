import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './../reducers';

const composeEnhencers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;

const configStore = () => {
  const middleware = [thunk];
  const enhancers = [applyMiddleware(...middleware)];
  const store = createStore(rootReducer, composeEnhencers(...enhancers));

  return store;
};

export default configStore;
