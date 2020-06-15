import * as fromAuth from './auth.actions';

describe('loadAuths', () => {
  xit('should return an action', () => {
    expect(fromAuth.signIn({ user: '', password: '' }).type).toBe('[Auth] Load Auths');
  });
});
