import { createUser, newUser } from '../firebase-controller/userAuthentication.js';

export const registerFunction = (email, pass, msjError) => {
  const mensajeError = msjError;
  createUser(email, pass)
    .then((result) => {
<<<<<<< HEAD
      // console.log('se registró', result);
      newUser(result.user.uid, result.user.email, result.user.displatName, result.user.photoURL)
=======
      console.log('se registró', result);
      newUser(result.user.uid, result.user.email, result.user.displayName, result.user.photoURL)
>>>>>>> 2cef411fba28b17f1f8d49327acee863ff029acf
        .then(() => {
          // console.log('se registro documento');
          window.location.hash = '#/';
        })
        .catch(() => {
          // console.log('Se detecto un error');
        });
      // console.log('Me registre');
      // alert('Te has registrado con exito. Puedes logearte');
    })
    .catch((error) => {
      const errorCode = error.code;
      // eslint-disable-next-line no-unused-vars
      const errorMessage = error.code;
      // console.log('Detectando un error: ', error, errorMessage);

      switch (errorCode) {
        case 'auth/email-already-in-use':
          mensajeError.innerHTML = '*La dirección de correo ya existe';
          break;
        case 'auth/weak-password':
          mensajeError.innerHTML = '* La constraseña debe tener al menos 6 caracteres.';
          break;
        case 'auth/invalid-email':
          mensajeError.innerHTML = '* El formato del correo ingresado no es váido';
          break;
        default:
          mensajeError.innerHTML = 'Se ha producido un error';
      }
    });
};
