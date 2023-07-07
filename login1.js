const Btlogin = document.querySelector('#Btlogin');

Btlogin.addEventListener('click', login);

function login() {
    const txLogin = document.querySelector('#txLogin');
    const ValLogin = txLogin.value;

    const txSenha = document.querySelector('#txSenha')
    const valSenha = txSenha.value;
    validaLogin(ValLogin);


 function validaLogin(umValorLogin, UmValorSenha) {

    if (umValorLogin=='eu' && UmValorSenha=='abcde') {
        return true;
    } else {
        return false;
    }
}

const ehValido = validaLogin(ValLogin, valSenha);

if(ehValido) {
    const mensagens = document.querySelector('mensagens');
    const msgValido = document.querySelector('mensagens');
    msgValido.innerHTML='<strong>login valido</strong>';
} else {
    const msgInvalido = document.querySelector('mensagens');
    msgInvalido.innerHTML='<strong>login invalido</strong>';
    }
}
