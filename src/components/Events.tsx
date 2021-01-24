import React, { useContext } from 'react';
import { MyEventType } from '../actions';
import Event from './Event';
import AppContext from '../contexts/AppContext';

const Events: React.FC<{}> = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <div className="main-content">
        <h4 className="heading">イベント一覧</h4>
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>to/do</th>
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
      </div>
    </>
  );
};

export default Events;
