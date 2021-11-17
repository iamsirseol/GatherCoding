import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';//store사용할 수 있게 해주sms 라이브러리
import store from './redux/store/store';
import { CookiesProvider } from 'react-cookie';

//콘솔창에서 현재 전역store를 확인할 수 있음
console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
    <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider>
    </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
