type StateType = [];
type ActionType = {
  type: 'CREATE_EVENT' | 'DELETE_EVENT' | 'DELETE_ALL_EVENT';
  title: string;
  body: string;
};
// type ReturnType = StateType | [{}];

const events = (state: StateType, action: ActionType): any => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1] + 1;
      return [...state, { id, ...event }];
    case 'DELETE_EVENT':
      return state;
    case 'DELETE_ALL_EVENT':
      return [];
    default:
      return state;
  }
};

export default events;
