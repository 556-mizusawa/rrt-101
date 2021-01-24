import React, { useContext } from 'react';
import OperationLog from './OperationLog';
import { MyOperationLog } from '../actions';
import AppContext from '../contexts/AppContext';

const OperationLogs = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <h4 className="mt-5">操作ログ一覧</h4>
      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map(
            (operationLog: MyOperationLog, index: number) => {
              return <OperationLog key={index} operationLog={operationLog} />;
            }
          )}
        </tbody>
      </table>
    </>
  );
};

export default OperationLogs;
