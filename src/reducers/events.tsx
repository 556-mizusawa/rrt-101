import { MyActionType } from '../actions';

// type ReturnType = StateType | [{}];

const events = (state: any, action: MyActionType) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    case 'DELETE_EVENT':
      return state.filter((event: MyActionType) => event.id !== action.id);
    case 'DELETE_ALL_EVENTS':
      return [];
    default:
      return state;
  }
};

export default events;
