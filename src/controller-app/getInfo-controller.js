// infor para pintar en el home
export const getInfo = (profile) => {
  const p = profile;
  console.log(profile);
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // se incia seción
<<<<<<< HEAD
      // console.log('Existe un usuario activo que inicio sesión');
=======
      const id = firebase.auth().currentUser.uid;
      console.log(id);
      // obtención de datos de un documento
      firebase.firestore().collection('users').where('ID', '==', id).get()
        .then((querySnapshot) => {
          p.innerHTML = '';
          querySnapshot.forEach((doc) => {
            console.log('Datos del documento: ', doc.data());
            p.innerHTML
            += `
            <img id = "photo" class= "user-icon" src="${doc.data().Foto}" alt="User Profile Picture">
            <div class="user-name">
              <h1 id = "userName">${doc.data().Name}</h1>
              <h1 id = "email">${doc.data().Email}</h1>
            </div> 
            `;
          });
        })
        .catch((error) => {
          console.log('Error al obtener el documento', error);
        });
>>>>>>> 2cef411fba28b17f1f8d49327acee863ff029acf
    } else {
      // console.log('Ningun usuario ha iniciado sesion');
    }
  });
};
