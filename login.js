const Btlogin = document.querySelector('#Btlogin');

Btlogin.addEventListener('click', login);

function login() {
    const valorLogin = document.querySelector('#txLogin');
    const ValLogin = txLogin.value;
    validaLogin(ValLogin);
}

function validaLogin(umValorLogin) {

    if(umValorLogin=='eu') {
        return true;
    } else {
        return false;
    }
}
