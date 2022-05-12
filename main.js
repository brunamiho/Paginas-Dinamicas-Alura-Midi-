function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
  
    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido.');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    // o classList retorna uma lista de classes que a variavel tecla possui

    //template string:
    const idAudio = `#som_${instrumento}`;

    // tivemos que utilizasr essa função anonima pois se não o navegador ia entender que o usuário ainda nao interagiu
    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){
        if (evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');
       }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
    
}
