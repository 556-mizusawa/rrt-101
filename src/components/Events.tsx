import React, { Dispatch, useContext } from 'react';
import { MyActionType, MyEventType } from '../actions/TypeFile';
import Event from './Event';
import AppContext from '../contexts/AppContext';

const Events: React.FC<{ state: []; dispatch: Dispatch<MyActionType> }> = ({
  state,
  dispatch,
}) => {
  const value = useContext(AppContext);
  return (
    <>
      <h4 className="mt-5">イベント一覧</h4>
      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event: MyEventType, index: number) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Events;
