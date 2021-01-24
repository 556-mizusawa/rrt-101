export interface MyEventType {
  id: number;
  title: string;
  body: string;
}

export interface MyActionType {
  type: 'CREATE_EVENT' | 'DELETE_EVENT' | 'DELETE_ALL_EVENTS';
  id?: number;
  title?: string;
  body?: string;
}

export interface MyOperationLog {
  description: string;
  operatedAt: string;
}

export interface OPERATION_LOGS {
  type: 'ADD_OPERATION_LOG' | 'DELETE_ALL_OPERATION_LOGS';
  description?: string;
  operatedAt?: string;
}

export const App_State = 'appWithRedux';
