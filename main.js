function tocaSomPom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
    
}

document.querySelectorAll('.tecla');
const listaDeTeclas=document.querySelectorAll('.tecla');
let contador = 0;
while(contador < listaDeTeclas.lenght){
    listaDeTeclas[0].onclick = tocaSomPom;
    contador = contador + 1;
}