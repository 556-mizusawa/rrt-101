import React from 'react';
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
  message?: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return (
    <>
      <CounterWithReducer />
    </>
  );
};

App.defaultProps = {
  message: 'Hello, defaultProps!',
};

export default App;
