import {
  signOut,
} from '../firebase-controller/userAuthentication.js';
import { addTextPost } from '../controller-app/getInfo-controller.js';

import { userObserver } from '../firebase-controller/userObserver.js';

export default (user) => {
  // console.log(user);
<<<<<<< HEAD
  const homeView =  `
                    <header>
                    <nav class="topnav" id="myTopnav">
                      <a href="#/home" class="active">~Bon-a-Petit~</a>
                      <div class="dropdown" id="button-nav">
                        <button class="dropbtn"> 
                        MENU 
                        </button>
                        <div class="dropdown-content" id="button-nav-content">
                          <a id="user-profile" href="#/profile">Mi perfil</a>
                          <a id="sign-out" href="#/">Cerrar sesión</a>
                        </div>
                      </div>
                    </nav>
                  </header>
                  <section class="box-home">
                    <div class="box-profile">
                        <div class="banner-profile">
                          <img class="banner-img" src="./img/backgroundimgfood.jpg" alt="User Banner Image">
                        </div>
                        <div id ="profile"class="info-profile">
                          <img id = "photo" class= "user-icon" src="${user.Foto}" alt="User Profile Picture">
                            <div class="user-name">
                              <h1 id = "userName">${user.Name}</h1>
                              <h1 id = "email">${user.Email}</h1>
                            </div>
                        </div>
                    </div>
                    
                    <div class="feed">
                        <div class="box-create-publication">
                          <textarea name="publication" class="publication" placeholder="Escribe tu mensaje aquí" cols="30" rows="5"></textarea>
                          <button class="btn-add-image pull-left" type="submit"></button>
                          <button class="btn pull-right" type="submit">Enviar</button>
                        </div>
                      <div class="box-publication-feed">
                          <div class="box-publication-feed-header">
                            Marilyn Rivero:
                          </div>
                          <div class="box-publication-feed-text">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                          </div>
                          <div class="box-likes">
                            <div class="text-likes">
                              <img class="heart-likes" src="./img/heart.png" alt="Likes heart picture">
                              a 4 personas les gusta esto.
                            </div>
                          </div>
                          <div class="box-publication-feed-comment">
                            <div class="box-publication-feed-comment-header">
                              Vilmarys dice:
                            </div>
                            <div class="box-publication-feed-comment-text ">
                              The wise man therefore always holds in these matters to this principle of selection.
                            </div>
                          </div>
                        <div class="box-publication-feed-comment">
                          <div class="box-publication-feed-comment-header">
                            Lilian dice:
                          </div>
                          <div class="box-publication-feed-comment-text ">
                          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
                          </div>
                        </div>
                        </div>
                        <div class="box-create-comment">
                          <textarea name="comment" class="publication" placeholder="Escribe tu comentario aquí" cols="30" rows="3"></textarea>
                          <button class="btn pull-right" type="submit">Comentar</button>
                        </div>
                      </div>
                    
                  </section>
                             
=======
  const homeView = `<header>
<nav class="topnav" id="myTopnav">
  <a href="#/home" class="active">~Bon-a-Petit~</a>
  <div class="dropdown" id="button-nav">
    <button class="dropbtn"> 
    MENU 
    </button>
    <div class="dropdown-content" id="button-nav-content">
      <a id="user-profile" href="#/profile">Mi perfil</a>
      <a id="sign-out" href="#/">Cerrar sesión</a>
    </div>
  </div>
</nav>
</header>
<section class="box-home">
<div class="box-profile">
    <div class="banner-profile">
      <img class="banner-img" src="./img/backgroundimgfood.jpg" alt="User Banner Image">
    </div>
    <div class="info-profile">
      <img class= "user-icon" src="${user.Foto}" alt="User Profile Picture">
      <div class="user-name">
        <h1 id = "userName">${user.Name}</h1>
        <h1 id = "email">${user.Email}</h1>
      </div>
    </div>
</div>

<div class="feed">
    <div class="box-create-publication">
      <label for="publication-text"> ${user.Name} dice: </label>
      <input type="text" id="publication-text" name="publication" class="publication" placeholder="Escribe tu mensaje aquí" cols="30" rows="5"></input>
      <button class="btn-add-image pull-left" type="submit"></button>
      <label for="private">PRIVADO<input type="checkbox" name="private" id="private" value="true"></label>
      <button id="send-text-post" class="btn pull-right" type="submit">Enviar</button>
    </div>
  <div class="box-publication-feed">
      <div class="box-publication-feed-header">
        Marilyn Rivero:
      </div>
      <div class="box-publication-feed-text">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
        atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
      </div>
      <div class="box-likes">
        <div class="text-likes">
          <img class="heart-likes" src="./img/heart.png" alt="Likes heart picture">
          a 4 personas les gusta esto.
        </div>
      </div>
      <div class="box-publication-feed-comment">
        <div class="box-publication-feed-comment-header">
          Vilmarys dice:
        </div>
        <div class="box-publication-feed-comment-text ">
          The wise man therefore always holds in these matters to this principle of selection.
        </div>
      </div>
    <div class="box-publication-feed-comment">
      <div class="box-publication-feed-comment-header">
        Lilian dice:
      </div>
      <div class="box-publication-feed-comment-text ">
      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
      </div>
    </div>
    </div>
    <div class="box-create-comment">
      <textarea name="comment" class="publication" placeholder="Escribe tu comentario aquí" cols="30" rows="3"></textarea>
      <button class="btn pull-right" type="submit">Comentar</button>
    </div>
  </div>

</section>
>>>>>>> 7218b8704f4b7d9c3792072d6427143e1d9b80a2
                    `;
  const divElement = document.createElement('div');
  divElement.className = 'container home';
  divElement.innerHTML = homeView;
  const btnNav = divElement.querySelector('#button-nav');
  const btnCerrarSesion = divElement.querySelector('#sign-out');
  const btnProfile = divElement.querySelector('#user-profile');
<<<<<<< HEAD
  userObserver();
=======
  const textPost = divElement.querySelector('#publication-text');
  const sendtextPost = divElement.querySelector('#send-text-post');
  /* const privatePost = divElement.querySelector('#private'); */

  sendtextPost.addEventListener('click', (e)=>{
    e.preventDefault();
    /* let privacyOnPost =;
    if (privatePost.value ==='') */
    console.log(textPost.value);
  console.log(addTextPost(textPost.value, false));
  });
>>>>>>> 7218b8704f4b7d9c3792072d6427143e1d9b80a2

  btnProfile.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#/profile';
  });
  
  btnCerrarSesion.addEventListener('click', (e) => {
    e.preventDefault();
    signOut();
    window.location.hash = '#/';
  });
  btnNav.addEventListener('click', (e) => {
    e.preventDefault();
    const x = document.getElementById('button-nav-content');
    if (x.className === 'dropdown-content') {
      x.className += ' show';
    } else {
      x.className = 'dropdown-content';
    }
  });
  return divElement;
};
