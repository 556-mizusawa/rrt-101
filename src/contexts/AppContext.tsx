import React, { Dispatch } from 'react';
import { CombinedState } from 'redux';
import { MyActionType, MyEventType, OPERATION_LOGS } from '../actions';

type ContextProps = {
  state: CombinedState<{
    events: MyEventType[];
    operationLogs: string | any[];
  }>;
  dispatch: Dispatch<MyActionType | OPERATION_LOGS>;
};

const AppContext = React.createContext({} as ContextProps);

export default AppContext;
