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
