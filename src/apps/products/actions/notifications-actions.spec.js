import { ADD_NOTIFICATION } from '../constants';
import { addNotification } from './notifications';

it('tests generted action payload matches schema', () => {
    let message: 'Some urgent notification';
    let generatedAction = addNotification(message);
    expect(generatedAction.message).toEqual(message);
});

it('tests generted action type is constant', () => {
    let message: 'Some urgent notification';
    let generatedAction = addNotification(message);
    expect(generatedAction.type).toBe(ADD_NOTIFICATION);
});
