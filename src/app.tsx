import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

import Header from './containers/header';
import Sidebar from './containers/sidebar';
import Top from './containers/top';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Header />
      <Sidebar />
      <Top />
    </div>
  </Provider>,
  document.querySelector('.app')
);
