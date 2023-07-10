const tagLogin = document.querySelector('login');
const tagConteudo = document.querySelector('conteudo');

const btLogin = document.createElement('button');
btLogin.addEventListener('click', login);
btLogin.innerText = 'login';

let usuario = sessionStorage.getItem('usuario');

if(!usuario) {
    tagLogin.innerHTML = `
    Login <input id='txlogin' type='text'> 
    `
    tagLogin.appendChild(btLogin);
} else {
    conteudo();
}

function login() {
    const txlogin = document.querySelector('#txlogin');
    sessionStorage.setItem('usuario', txlogin.value);
    conteudo();
}

function conteudo() {
    tagLogin.innerHTML='';
    usuario = sessionStorage.getItem('usuario');
    tagConteudo.innerHTML = `<h1>Oi, ${usuario}</h1>`;
}
