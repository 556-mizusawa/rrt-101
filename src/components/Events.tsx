import React, { useContext } from 'react';
import { MyEventType } from '../actions';
import Event from './Event';
import AppContext from '../contexts/AppContext';

const Events: React.FC<{}> = () => {
  const { state } = useContext(AppContext);
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
          {state.events.map((event: MyEventType, index: number) => (
            <Event key={index} event={event} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Events;
