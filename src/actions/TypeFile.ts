export type MyEventType = {
  id: number;
  title: string;
  body: string;
};

export type MyActionType = {
  type: 'CREATE_EVENT' | 'DELETE_EVENT' | 'DELETE_ALL_EVENTS';
  id?: number;
  title?: string;
  body?: string;
};
