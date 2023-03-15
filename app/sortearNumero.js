const menorValor = 1;
const maiorValor = 3000;

const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio(){
    const numero = parseInt(Math.random()*maiorValor+1);
    console.log(numero)
    return numero

}

const elementoMenorValor = document.getElementById('menorValor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maiorValor');
elementoMaiorValor.innerHTML = maiorValor;


