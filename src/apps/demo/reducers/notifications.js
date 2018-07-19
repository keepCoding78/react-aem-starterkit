import { ADD_NOTIFICATION, CLEAR_ALL_NOTIFICATION } from '../constants';

function notifications(state = {}, action) {
  // console.log(state, action);

  switch (action.type) {
    case ADD_NOTIFICATION:
      return [
        ...state,
        {
          label: action.notification
        }
      ];
    case CLEAR_ALL_NOTIFICATION:
      return [];
    default:
      return state;
  }
}

export default notifications;
