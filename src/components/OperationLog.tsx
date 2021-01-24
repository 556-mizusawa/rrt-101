import React from 'react';
import { MyOperationLog } from '../actions';

const OperationLog: React.FC<{ operationLog: MyOperationLog }> = ({
  operationLog,
}) => {
  return (
    <>
      <tr>
        <td>{operationLog.description}</td>
        <td>{operationLog.operatedAt}</td>
      </tr>
    </>
  );
};

export default OperationLog;
