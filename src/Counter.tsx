import React, { useEffect, useRef, useState } from 'react';

const Counter: React.FC<{}> = () => {
  const initialValue: number = 0;
  const [value, setValue] = useState<number>(initialValue);

  const incriment = () => {
    setValue((prevState) => prevState + 1);
  };

  const decriment = () => {
    setValue((prevState) => prevState - 1);
  };

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current++;
  });

  return (
    <>
      <h4>value: {value}</h4>
      <button onClick={incriment}>+1</button>
      <button onClick={decriment}>-1</button>
      <div>This component was re-rendered {renderTimes.current} Times!</div>
    </>
  );
};

export default Counter;
