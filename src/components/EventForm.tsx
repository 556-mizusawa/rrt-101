import React, { useState, MouseEvent, Dispatch } from 'react';
import { MyActionType } from '../actions/TypeFile';

const EventForm: React.FC<{ state: []; dispatch: Dispatch<MyActionType> }> = ({
  state,
  dispatch,
}) => {
  const [title, setTitle] = useState('');
  const [body, setbody] = useState('');
  // console.log(state, 'in Event.js');

  const addEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body,
    });

    setTitle('');
    setbody('');
  };

  const deleteAllEvents = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = window.confirm(
      '全てのイベントを本当に削除しても良いですか？'
    );

    if (result) {
      dispatch({ type: 'DELETE_ALL_EVENTS' });
    }
  };

  const unCreatable = title === '' || body === '';

  return (
    <>
      <h4 className="mt-3">イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle" className="mt-3">
            タイトル
          </label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody" className="mt-3">
            ボディー
          </label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setbody(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger ml-1"
          onClick={deleteAllEvents}
          disabled={state.length === 0}
        >
          全てのイベントを削除
        </button>
      </form>
    </>
  );
};

export default EventForm;
