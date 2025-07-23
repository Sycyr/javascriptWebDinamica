function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('[data-tecla]');

for (let i=0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const audio = `#som_${instrumento}`; // template string para concatenar a string com a variável instrumento
    tecla.addEventListener('click', function () {
        tocaSom(audio);
    });

    tecla.addEventListener('keydown', function (evento) {
        if(evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    });    

    tecla.addEventListener('keyup', function () {
        tecla.classList.remove('ativa');
    });

}
