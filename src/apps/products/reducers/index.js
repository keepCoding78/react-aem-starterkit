import { combineReducers } from 'redux';
import notifications from './notifications';

export default function() {
  return combineReducers({
    notifications,
  });
}
