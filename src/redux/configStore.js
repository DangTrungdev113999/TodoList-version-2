import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './../reducers';
import roootSaga from './../sagas/index';

const sagaMiddleware = createSagaMiddleware();

const composeEnhencers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;

const configStore = () => {
  const middleware = [thunk, sagaMiddleware];
  const enhancers = [applyMiddleware(...middleware)];
  const store = createStore(rootReducer, composeEnhencers(...enhancers));
  sagaMiddleware.run(roootSaga);
  return store;
};

export default configStore;
