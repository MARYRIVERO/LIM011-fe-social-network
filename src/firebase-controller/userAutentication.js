export const createUser = (email, password) => {
  // eslint-disable-next-line no-console
  console.log(email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // eslint-disable-next-line no-console
    console.log(error.message);
    // eslint-disable-next-line no-alert
    alert(errorCode);
    // eslint-disable-next-line no-alert
    alert(errorMessage);
  });
};

export const signInUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => { console.log('Me loguie'); }).catch((error) => {
    const errorCode = error.code;
    // eslint-disable-next-line no-console
    console.log(errorCode);
    const errorMessage = error.message;
    // eslint-disable-next-line no-alert
    alert(errorMessage);
  });
};

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
    // ...
}).catch((error) => {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
    });
};
