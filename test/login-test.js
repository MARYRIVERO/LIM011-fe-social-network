import { createUser } from '../src/firebase-controller/userAuthentication.js';

describe('createUser', () => {
  // eslint-disable-next-line arrow-body-style
  it('debería logear un usuario', () => {
    return createUser('prueba-de-red@gmail.com, abc123').then((result) => {
      expect(result.user.email).toBe('prueba-de-red');
    });
  });
});
