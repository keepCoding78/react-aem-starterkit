import { ADD_NOTIFICATION } from '../constants';

function notifications(state = {}, action) {
  // console.log(state, action);

  switch (action.type) {
    case ADD_NOTIFICATION:
      return ([
        ...state,
        {
          label: action.notification
        }
      ]);
    default:
      return state;
  }
}

export default notifications;
