import Auth from './auth';

describe('Test Auth utility', () => {
  test('getAuth should return an OkTA object', () => {

    let auth = Auth;

    expect(auth != null).toBe(true);
  });

});
