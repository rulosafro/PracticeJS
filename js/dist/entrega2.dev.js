"use strict";

/* ! Cosas por hacer: Branch con los comentarios */
// Variables
var nombre;
var genM;
var carroDeCompra = [];
/*
function nombrePersona () {
    let nombre = prompt(`¿Cual es su nombre?`)
    alert(nombre + ` un gusto verte por aquí. Veamos que estas buscando en GuitarWorld`)
}

const genMusic = () => {
    let genM = prompt(`¿Cual es tu genero musical favorito? \n Rock \n Jazz \n Rap \n Blues`)
    return(genM)
}

// Desarrollo
alert(`Bienvenido a GuitarWorld, acá podras comprar todo lo necesario para tu viaje musical`)
nombrePersona()
while (genM != "rock" && genM != "jazz" && genM != "rap" && genM != "blues") {
    genM = prompt("Elige uno dentro de las opciones \n Rock \n Jazz \n Rap \n Blues").toLowerCase()
    switch (genM) {
        case "rock":
            alert(`Alto fanatico de ${genM} veamos que hay en stock que te pueda servir`)
            break;
        case "jazz":
            alert(`Alto fanatico de ${genM} veamos que hay en stock que te pueda servir`)
            break;
        case "rap":
            alert(`Alto fanatico de ${genM} veamos que hay en stock que te pueda servir`)
            break;
        case "blues":
            alert(`Alto fanatico de ${genM} veamos que hay en stock que te pueda servir`)
            break;
        default:
            alert(`Parece que no conozco todavia este genero.`)
            console.log(`Ingreso un valor incorrecto`);
            break;
    }
}

*/

var printStock = function printStock() {
  var stock1 = "";

  for (var i = 0; i < dataGuitarras.length; i++) {
    stock1 += "".concat(i + 1, " - ").concat(dataGuitarras[i].marca, " ").concat(dataGuitarras[i].nombre, "- $").concat(dataGuitarras[i].precio, " \n");
  }

  return stock1;
};

var elegir = prompt("Acá esta el stock actual, elige un numero de la lista \n" + printStock());

var verificadorDeProducto = function verificadorDeProducto() {
  while (isNaN(elegir)) {
    alert("Contenedor Vacio");
    elegir = prompt(printStock());
  }

  while (elegir == "") {
    alert("Contenedor Vacio");
    elegir = prompt(printStock());
  }
};

verificadorDeProducto();
carroDeCompra.push(dataGuitarras[elegir - 1].marca + " " + dataGuitarras[elegir - 1].nombre + " " + dataGuitarras[elegir - 1].precio);
console.log(carroDeCompra);
var iteracion;

while (iteracion != "si" || iteracion != "no") {
  var _iteracion = prompt("Quieres agregar otra compra al carro \n si \n no").toLowerCase();

  switch (_iteracion) {
    case "si":
      var _elegir = prompt("Acá esta el stock actual, elige un numero de la lista \n" + printStock());

      verificadorDeProducto(); // alert(elegir)

      carroDeCompra.push(dataGuitarras[_elegir - 1].marca + " " + dataGuitarras[_elegir - 1].nombre + " " + dataGuitarras[_elegir - 1].precio);
      console.log(carroDeCompra);
      break;

    case "no":
      console.log("salida de iteracion");
      alert("Okey, continuemos");
      alert(carroDeCompra2); // alert("En el carro actualemente hay \n" + carroDeCompra2)

      break;

    default:
      alert("No te he entendido, me puedes repetir");
      console.log("Ingreso un valor incorrecto");
      break;
  }
}

var carroDeCompra2 = carroDeCompra.precio.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
}, initialValue); // console.log(carroDeCompra);

alert(carroDeCompra.precio.reduce());
alert("En el carro actualmente hay " + carroDeCompra);

for (var i = 0; i < carroDeCompra.length; i++) {
  var plataTotal = carroDeCompra.precio.reduce();
}