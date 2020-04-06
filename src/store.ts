import { applyMiddleware, compose, createStore } from "redux";
import { History } from 'history';
import rootReducer from './reducers';
import createSagaMiddleware from "redux-saga";
import rootSaga from "sagas";

export default function configureStore(history: History) {
  const sagaMiddleWare = createSagaMiddleware();
  const composeEnhancers =
    process.env.NODE_ENV === "development" &&
      typeof window === "object" &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleWare));

  //Store creation
  const store = createStore(
    rootReducer(history),
    enhancer
  );
  sagaMiddleWare.run(rootSaga);
  return store;
}
