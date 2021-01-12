import React from 'react';

interface AppProps {
  message: string;
}

const App = ({ message }: AppProps) => {
  return <>{message}</>;
};

export default App;
