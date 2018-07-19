import notificationReducer from './notifications';
import { addNotification } from '../actions/notifications';

it('tests if label is set properly for ADD_NOTIFICATION action', () => {
    let initialState = [{label: 'first notification'}, {label: 'second notification'}, {label: 'third notification'}];
    let action = addNotification('fourth notification');
    let finalState = notificationReducer(initialState, action);
    expect(finalState[3].label).toEqual(action.notification);
});

it('tests the default case', () => {
    let initialState = [{label: 'first notification'}, {label: 'second notification'}, {label: 'third notification'}];
    let action = {type: 'NO_ACTION', notification: 'fourth notification'};
    let finalState = notificationReducer(initialState, action);
    expect(finalState).toEqual(initialState);
    expect(finalState[3]).not.toBeDefined();
});
