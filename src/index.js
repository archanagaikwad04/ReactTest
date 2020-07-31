import React from 'react';
import { render } from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import rootSaga from './sagas';
import App from './App';
import UserList from './components/UserList';
import GET_NEWS from './reducers';


//const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   reducer
   //applyMiddleware(sagaMiddleware, UserList),
);
//sagaMiddleware.run(rootSaga);
render(
   <Provider store={store}>
     <App />
   </Provider>,
document.getElementById('root'),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);