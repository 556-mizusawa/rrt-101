import React, { useEffect, useReducer, useRef } from 'react';

type StateType = { count: number };
const initialState: StateType = { count: 0 };

type ActionType = { type: 'decrement' | 'increment' | 'reset' };

const reducer = (state: StateType, action: ActionType): StateType | never => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
};

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current++;
  });
  const ref = useRef<HTMLInputElement>(null!);
  const forcusInput = () => {
    ref.current.focus();
  };

  return (
    <>
      <h4 className="mt-5 mb-3">Count: {state.count}</h4>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch({ type: 'increment' })}
      >
        +
      </button>
      <button
        type="button"
        className="btn btn-danger ml-1"
        onClick={() => dispatch({ type: 'decrement' })}
      >
        -
      </button>
      <button
        type="button"
        className="btn btn-warning ml-1"
        onClick={() => dispatch({ type: 'reset' })}
      >
        Reset
      </button>
      <div className="mt-5 mb-3">
        This component was re-rendered {renderTimes.current} Times!
      </div>
      <input className="form-control" ref={ref} type="text" />
      <button type="button" className="btn btn-success" onClick={forcusInput}>
        Click Me!
      </button>
    </>
  );
};

export default CounterWithReducer;
