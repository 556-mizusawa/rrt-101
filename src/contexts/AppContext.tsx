import React, { Dispatch } from 'react';
import { MyActionType } from '../actions/TypeFile';

type ContextProps = {
  state: [];
  dispatch: Dispatch<MyActionType>;
};

const AppContext = React.createContext({} as ContextProps);

export default AppContext;
