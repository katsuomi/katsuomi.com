import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from "App";
import * as serviceWorker from "serviceWorker";
import configureStore from './store';

export const history = createBrowserHistory();
export const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement
);

serviceWorker.unregister();
