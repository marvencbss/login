const tagLogin = document.querySelector('login');
const tagConteudo = document.querySelector('conteudo');

const btLogin = document.addEventListener('click', login)
btLogin.addEventListener('click', login);
btLogin.innerText='login';

let usuario = sessionStorage.getItem('usuario');

if(!usuario) {
    tagLogin.innerHTML = `login <input id='txLogin' type='text'>`
    tagLogin.appendChild(btLogin);
} else {
    tagUsuario.innerHTML = `<h1>oi, ${usuario}</h1>`;
}

function login() {
    const txLogin = document.querySelector('#txLogin');
    localStorage.setItem
}

tagUsuario.innerText = usuario;
