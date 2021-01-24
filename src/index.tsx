import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <header className="container-fluid">
      <h4 className="AppTitle">
        React Hooks + Redux + TypeScript　イベント作成アプリケーション
      </h4>
    </header>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
