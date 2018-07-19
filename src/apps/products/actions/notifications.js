import { ADD_NOTIFICATION } from '../constants';

export function addNotification(notification) {
  return {
    type: ADD_NOTIFICATION,
    notification
  };
}
