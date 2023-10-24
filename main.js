function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
    
}

document.querySelectorAll('.tecla');
const listaDeTeclas=document.querySelectorAll('.tecla');
let contador = 0;
while(contador < listaDeTeclas.lenght){
    listaDeTeclas[contador].onclick = tocaSom;
    contador = contador + 1;
}