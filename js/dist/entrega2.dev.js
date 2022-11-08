"use strict";

/* ! Cosas por hacer: Branch con los comentarios */
// Variables
var nombre;
var genM;
var carroDeCompra = [];

function nombrePersona() {
  var nombre = prompt("\xBFCual es su nombre?");
  alert(nombre + " un gusto verte por aqu\xED. Veamos que estas buscando en GuitarWorld");
}

var genMusic = function genMusic() {
  var genM = prompt("\xBFCual es tu genero musical favorito? \n Rock \n Jazz \n Rap \n Blues");
  return genM;
}; // Desarrollo


alert("Bienvenido a GuitarWorld, ac\xE1 podras comprar todo lo necesario para tu viaje musical");
nombrePersona();

while (genM != "rock" && genM != "jazz" && genM != "rap" && genM != "blues") {
  genM = prompt("Elige uno dentro de las opciones \n Rock \n Jazz \n Rap \n Blues").toLowerCase();

  switch (genM) {
    case "rock":
      alert("Alto fanatico de ".concat(genM, " veamos que hay en stock que te pueda servir"));
      break;

    case "jazz":
      alert("Alto fanatico de ".concat(genM, " veamos que hay en stock que te pueda servir"));
      break;

    case "rap":
      alert("Alto fanatico de ".concat(genM, " veamos que hay en stock que te pueda servir"));
      break;

    case "blues":
      alert("Alto fanatico de ".concat(genM, " veamos que hay en stock que te pueda servir"));
      break;

    default:
      alert("Parece que no conozco todavia este genero.");
      console.log("Ingreso un valor incorrecto");
      break;
  }
}

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
    alert("Por favor ingresa un numero");
    elegir = prompt(printStock());
  }

  while (elegir == "") {
    alert("Lo Sentimos. No se permiten campos vacios. Por favor ingrese un numero");
    elegir = prompt(printStock());
  }
};

verificadorDeProducto();
carroDeCompra.push(dataGuitarras[elegir - 1].marca + " " + dataGuitarras[elegir - 1].nombre + " " + dataGuitarras[elegir - 1].precio);
console.log(carroDeCompra);
alert(carroDeCompra); // alert(`En el carro actualmente hay ` + carroDeCompra);
// for (let i = 0; i < carroDeCompra.length; i++) {
//     const plataTotal = carroDeCompra.precio.reduce();
// }

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
      alert("En el carro actualemente hay \n" + plataTotal);
      break;

    default:
      alert("No te he entendido, me puedes repetir");
      console.log("Ingreso un valor incorrecto");
      break;
  }
}

alert("Okey, continuemos"); // for (let i = 0; i < carroDeCompra.length; i++) {
//     const plataTotal = carroDeCompra.precio.reduce();
//     return plataTotal
// }
// for (let i = 0; i < carroDeCompra.length; i++) {
//     const plataTotal = carroDeCompra.precio.reduce();
// }
// console.log(plataTotal);