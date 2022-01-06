let contador = 0;
let paga = 0;
let precio = 7421;
let totalPagar = 0;

const valor = document.querySelector('#valor');
const valor_otro = document.querySelector('#valor-otro');
const bolsa = document.querySelector('#bolsa');
const bolsa2 = document.querySelector('#bolsa');
const boton1 = document.querySelectorAll('.boton')
const boton2 = document.querySelectorAll('.boton2')

const sub = document.querySelector('#subTotal');
const sub2 = document.querySelector('#subTotal2');

boton1.forEach(boton => {
    boton.addEventListener('click', function(e) {

    const estilos = e.currentTarget.classList;

    if(estilos.contains('disminuir')) {
      contador--;
      paga = paga - precio;
      console.log('restando')
    }else if(estilos.contains('aumentar')) {
        contador++;
        paga = paga + precio
    }
    valor.textContent = contador;
    bolsa.textContent = contador;
    sub.textContent = paga;
    sub2.textContent = paga;
    /* contador = contador + precio; */
    console.log(paga);

  })
})



boton2.forEach(boton => {
    boton.addEventListener('click', function(e) {

    const estilos = e.currentTarget.classList;

    if(estilos.contains('disminuir_otro')) {
        contador--;
        paga = paga - precio;
        console.log('restando')
    }else if(estilos.contains('aumentar_otro')) {
        contador++;
        paga = paga + precio
        console.log('sumando')
    }
    valor_otro.textContent = contador;
    bolsa2.textContent = contador;
    sub.textContent = paga;
    sub2.textContent = paga;

  })
})
