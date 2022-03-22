const inputs = document.querySelectorAll('input, textarea')

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})

function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) {
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
        
    } else {
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

const validadores = {
    nome:input => verificaNome(input),
    email:input => verificaEmail(input),
    assunto:input => verificaAssunto(input),
    mensagem:input => verificaMensagem(input),
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo de nome não pode estar vazio.',
        customError: 'O campo não pode conter mais de 50 caracteres.',
    },
    email: {
        valueMissing: 'O campo de e-mail não pode estar vazio.',
        customError: 'O e-mail preenchido é inválido',
    },
    assunto: {
        valueMissing: 'O campo assunto não pode estar vazio.',
        customError: 'O assunto não pode conter mais de 50 caracteres'
    },
    mensagem: {
        valueMissing: 'O campo mensagem não pode estar vazio',
        customError: 'A mensagem não pode conter mais de 300 caracteres'
    }
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
    
    return mensagem
}

function verificaNome(input) {
    let mensagem = ''
    if (input.value.length >= 50){
        mensagem = 'Este campo não permite mais de 50 caracteres.'
    }
    if (!input.value.length){
        mensagem = 'Este campo não pode estar vazio'
    }

    input.setCustomValidity(mensagem)
}

function verificaEmail(input) {
    let mensagem = ''
    let mailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')

    if (!mailRegex.test(input.value)){
        mensagem = 'O formato do e-mail é inválido'
    }
    if (!input.value.length){
        mensagem = 'Este campo não pode estar vazio'
    }

    input.setCustomValidity(mensagem)
}

function verificaAssunto(input) {
    let mensagem = ''
    if (input.value.length >= 50){
        mensagem = 'Este campo não permite mais de 50 caracteres'
    }

    if (!input.value.length) {
        mensagem = 'Este campo não pode estar vazio.'
    }

    input.setCustomValidity(mensagem)
}

function verificaMensagem(input) {
    let mensagem = ''
    
    console.log(input.value)
    console.log(input.value.length)

    if (input.value.length >= 300){
        mensagem = 'Este campo não permite mais de 300 caracteres'
    }

    if (!input.value.length) {
        mensagem = 'Este campo não pode estar vazio'
    }

    input.setCustomValidity(mensagem)
}