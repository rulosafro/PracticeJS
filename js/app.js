console.log('Hola Chicos');

let baseDeNombres = 'texto logrado'

console.log(baseDeNombres)

let a = 10
let b = 5
let resultado = a-b

console.log(resultado)

// Ejercicio del nombre

// let nombreUsuario = prompt('Ingrese su nombre')
// let apellidoUsuario = prompt('Ingrese su apellido')\
// console.log('Hola ' + nombreUsuario + " " + apellidoUsuario)

// alert('Hola ' + nombreUsuario + ' ' + apellidoUsuario)


// Ejemplo 0

for (let i = 0; i <= 10; i = i + 10) {
    const element = 10[i];
    console.log (i)
    
}


// Ejemplo 1

// let numeroIngresado = Number(prompt('Ingrese un numero del 1 al 9'))
// for (let i = 1; i <= 10; i++) {
//     let resultado = numeroIngresado * i
//     console.log(numeroIngresado + ' X ' + i + ' = ' + resultado)
// }


// // Ejemplo for

// for (let i = 0; i < 10; i++) {
// 	if(i == 5) {
// 		break;
// 	}
// 	alert(i)
// }

 
//  Ejemplo white

let nombreUsuario = prompt('Ingrese su nombre')
while (nombreUsuario != 'Gonzalo') {
    alert('El usuario ingresó '+ nombreUsuario)
    nombreUsuario = prompt( "Ingrese otro nombre")
}


// Ejemplo do while

do {
    
} while (condition);


//Ejemplo Switch

let seleccionUsuario = prompt('Seleccione un monitor de los siguientes: Samsung, LG Aorus').toLocaleLowerCase

switch (key) {
    case value:
        
        break;

    default:
        break;
}