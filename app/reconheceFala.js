const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecongnition || 
webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start()

recognition.addEventListener('result', onSpeak)


recognition.addEventListener('end', () => recognition.start())

// funções //

function onSpeak(e){
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute);
    vericaChute(chute);
    
}   

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
        <div>Você disse </div>
        <span class="box">${chute}</span>
    `
}


