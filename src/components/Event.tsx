import React from 'react';
import { MyActionType, MyEventType } from '../actions/TypeFile';

const Event = ({
  dispatch,
  event,
}: {
  dispatch: React.Dispatch<MyActionType>;
  event: MyEventType;
}) => {
  const id = event.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `ID:${id}のイベントを本当に削除しても良いですか？`
    );
    if (result) {
      dispatch({ type: 'DELETE_EVENT', id });
    }
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickDeleteButton}
        >
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
