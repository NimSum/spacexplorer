import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Route path='/' component={ App } />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
