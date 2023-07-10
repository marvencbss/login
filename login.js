const btLogin = document.querySelector('#btLogin');

btLogin.addEventListener('click', login);


function leValor(umId) {
    const tx = document.querySelector(umId);
    const val = tx.value;
    return val;
}

function login() {
    const valLogin = leValor('#txLogin');
    const valSenha = leValor('#txSenha');

    const ehValido = validaLogin(valLogin, valSenha);
    
    if(ehValido) {
        mostraMensagem('login válido');
    } else {
        mostraMensagem('login inválido');
    }
}   

function validaLogin(umValorLogin, umValorSenha) {
    
    if(umValorLogin=='prof' && umValorSenha=='abcde') {
        return true;
    } else {
        return false;
    }

}

function mostraMensagem(mensagem) {
    const msgs = document.querySelector('mensagens');
    const msgInvalido = document.createElement('p');
    msgInvalido.innerHTML=`<strong>${mensagem}</strong>`;
    msgs.innerHTML='';
    msgs.appendChild(msgInvalido);

}

