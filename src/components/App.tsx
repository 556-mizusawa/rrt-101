import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC<{}> = () => {
  return (
    <div className="container-fluid">
      <h4 className="mt-3">イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle" className="mt-3">
            タイトル
          </label>
          <input className="form-control" id="formEventTitle" />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody" className="mt-3">
            ボディー
          </label>
          <textarea className="form-control" id="formEventBody" />
        </div>
        <button className="btn btn-primary">イベントを作成する</button>
        <button className="btn btn-danger ml-1">全てのイベントを削除</button>
      </form>

      <h4 className="mt-5">イベント一覧</h4>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default App;
