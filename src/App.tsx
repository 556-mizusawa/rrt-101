import React from 'react';
import Counter from './Counter';

interface AppProps {
  message?: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return (
    <>
      <Counter />
    </>
  );
};

App.defaultProps = {
  message: 'Hello, defaultProps!',
};

export default App;
