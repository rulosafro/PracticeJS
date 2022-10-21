"use strict";

console.log('Hola Chicos');
var baseDeNombres = 'texto logrado';
console.log(baseDeNombres);
var a = 10;
var b = 5;
var resultado = a - b;
console.log(resultado); // Ejercicio del nombre
// let nombreUsuario = prompt('Ingrese su nombre')
// let apellidoUsuario = prompt('Ingrese su apellido')\
// console.log('Hola ' + nombreUsuario + " " + apellidoUsuario)
// alert('Hola ' + nombreUsuario + ' ' + apellidoUsuario)
// Ejemplo 0

for (var i = 0; i <= 10; i = i + 10) {
  var element = 10[i];
  console.log(i);
} // Ejemplo 1
// let numeroIngresado = Number(prompt('Ingrese un numero del 1 al 9'))
// for (let i = 1; i <= 10; i++) {
//     let resultado = numeroIngresado * i
//     console.log(numeroIngresado + ' X ' + i + ' = ' + resultado)
// }
// // Ejemplo 2
// for (let i = 0; i < 10; i++) {
// 	if(i == 5) {
// 		break;
// 	}
// 	alert(i)
// }
//  Ejemplo 3 


var nombreUsuario = prompt('Ingrese su nombre');

while (nombreUsuario != 'Gonzalo') {
  alert('El usuario ingresó ' + nombreUsuario);
  nombreUsuario = prompt("Ingrese otro nombre");
}