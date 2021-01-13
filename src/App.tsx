import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
  message?: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return (
    <div className="container-fluid">
      <CounterWithReducer />
    </div>
  );
};

App.defaultProps = {
  message: 'Hello, defaultProps!',
};

export default App;
