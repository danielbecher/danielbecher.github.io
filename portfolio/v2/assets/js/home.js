function pegavalores() {
    const textoidade = document.getElementById('idade').innerHTML;
    const textotempo = document.getElementById("tempo").innerText;
    console.log(textoidade);
    console.log(textotempo);
    document.getElementById('idade').innerHTML = calculaIdade();
    document.getElementById('tempo').innerText = calculaTempo();
}

function calculaIdade () {
    let data = new Date();
    let ano = data.getFullYear();
    let mes = data.getMonth()
    if (mes > 9) {
        return parseInt(ano) - 1983;
    } else {
        return parseInt(ano) - 1984;
    }
    
}

function calculaTempo () {
    let data = new Date();
    let ano = data.getFullYear();
    let mes = data.getMonth()
    if (mes < 4) {
        return parseInt(ano) - 2003;
    } else {
        return parseInt(ano) - 2002;
    }
    
}

this.pegavalores();