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

// export const ADD_OPERATION_LOG = 'ADD_OPERATION_LOG';
// export const DELETE_ALL_OPERATION_LOGS = 'DELETE_ALL_OPERATION_LOGS';

export interface OPERATION_LOGS {
  type: 'ADD_OPERATION_LOG' | 'DELETE_ALL_OPERATION_LOGS';
  description: string;
  operatedAt: string;
}
