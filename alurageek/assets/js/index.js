var botaoLogin = document.querySelector('#cabecalho__botao');
botaoLogin.addEventListener('click', function () {
    event.preventDefault();
    window.location.href = 'login.html'
})

var logoAlura = document.querySelector('#cabecalho__imagem');
logoAlura.addEventListener('click', function() {
    event.preventDefault();
    window.location.href = 'index.html'
})