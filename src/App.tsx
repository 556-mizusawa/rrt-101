import React from 'react';

interface AppProps {
  message?: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return (
    <>
      <h4>{message}</h4>
    </>
  );
};

App.defaultProps = {
  message: 'Hello, defaultProps!',
};

export default App;
