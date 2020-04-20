import 'babel-polyfill';
import React from "react";
import { hydrate, render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';

import App from "App";
import * as serviceWorker from "serviceWorker";
import configureStore from './store';

ReactGA.initialize('UA-163444940-1');
export const history = createBrowserHistory();
history.listen(({ pathname }) => {
  ReactGA.set({ page: pathname });
  ReactGA.pageview(pathname);
});

export const store = configureStore(history);

const rootElement: HTMLElement | null = document.getElementById("root");

if(rootElement && rootElement.hasChildNodes()) {
  hydrate(<Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>, rootElement);
} else {
  render(<Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>, rootElement);
}
serviceWorker.unregister();
