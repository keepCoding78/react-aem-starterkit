import { ADD_NOTIFICATION, CLEAR_ALL_NOTIFICATION } from '../constants';

export function addNotification(notification) {
  return {
    type: ADD_NOTIFICATION,
    notification
  };
};

export function clearAllNotification(notification) {
  return {
    type: CLEAR_ALL_NOTIFICATION,
    notification
  };
}
