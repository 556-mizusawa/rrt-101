import React, { Dispatch } from 'react';
import { CombinedState } from 'redux';
import { MyActionType, MyEventType } from '../actions/TypeFile';

type ContextProps = {
  state: CombinedState<{ events: MyEventType[] }>;
  dispatch: Dispatch<MyActionType>;
};

const AppContext = React.createContext({} as ContextProps);

export default AppContext;
