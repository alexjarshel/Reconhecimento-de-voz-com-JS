// funções //

function vericaChute(chute){
 const numero = +chute;
 
 if(verificaSeENumero(numero)){
    elementoChute.innerHTML += '<div>Valor invalido!</div>';
 }

 if(numeroMaiorOuMenor(numero)){
    elementoChute.innerHTML += '<div>Valor fora do escopo de numeros!</div>';
 }

 if(numero === numeroSecreto){
    document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogarNovamente" class="btn-jogar">Jogar Novamente</button>
    `
 }
 else if(numero > numeroSecreto){
    elementoChute.innerHTML += '<div>O numero é menor!</div>';
    console.log('maior');
 }
 else{
    elementoChute.innerHTML += '<div>O numero é maior!</div>';
    console.log('menor');
 }
}

function verificaSeENumero(numero){
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor (numero){
     return numero>maiorValor || numero<menorValor;   
}

// eventos  //

document.body.addEventListener('click', (e) =>{
   if(e.target.id == 'jogarNovamente'){
      window.location.reload();
   }
})