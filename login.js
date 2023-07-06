const Btlogin = document.querySelector('#Btlogin');

Btlogin.addEventListener('click', login);

function login() {
    const txLogin = document.querySelector('#txLogin');
    const ValLogin = txLogin.value;

    const txSenha = document.querySelector('#txSenha')
    const valSenha = txSenha.value;
    validaLogin(ValLogin);


const ehValido = validaLogin(ValLogin, valSenha);

if(ehValido) {
    alert('Válido');
} else {
    alert('Inválido');
}
}

function validaLogin(umValorLogin, UmValorSenha) {

    if (umValorLogin=='eu' && UmValorSenha=='abcde') {
        return true;
    } else {
        return false;
    }
}
