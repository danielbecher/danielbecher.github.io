// Script que faz a validação de CPF

console.log('Javascript carregado!');
function validaCPF(cpf) {
    document.getElementById('error').style.display = 'none';
    document.getElementById('success').style.display = 'none';
    if (cpf.length != 11) {
        return false;
    } else {
        //Validação do 1º dígito
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        var soma = 0
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 -i) * i;
        }
        var resultado = soma % 11 < 2 ? 0 : 11-(soma%11);
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        //Validação do 2º dígito
        soma = 0
        numeros = cpf.substring(0,10);
        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        if (resultado != digitos.charAt(1)) {
            return false;
        }

        // Caso não valide os dígitos, informa que o CPF é inválido.        
        return true;
    }
}

//Função que captura o CPF digitado no input e faz as verificações.
function validacao() {
    console.log('Iniciando validação de CPF!');
    var cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf);
    var resultadoValidacao = validaCPF(cpf);
    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}