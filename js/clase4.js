// Primer Ejemplo

// function saludar() {
//     let nombre = prompt ('Ingrese su Nombre')
//     console.log('Hola ' + nombre)
//     despedir()
// }

// function despedir() {
//     console.log('Adiós Coders')
// }

// saludar()


// Ejemplo 2

// function pedirNombre() {
//     let nombreIngresado = prompt('Ingrese su nombre')
//     let apellidoIngresado = prompt('Ingrese Apellido')
//     alert('El nombre ingresado es ' + nombreIngresado)
// }

// for (let i=0; i<2; i++) {
//     pedirNombre()
//     console.log('La luz del ritmo')
// }


// Ejemplo 3

// function conParametros(parametro1, parametro2) {
//     console.log(parametro1 + ' ' + parametro2)
// }
// conParametros('Lionel', 'Mesi')
// conParametros('Tiago', 'PZK')

// function relaciones(param1,param2, nombre) {
//     if (param1 == "toxico") {
//         alert('sali de ahi '+ nombre) 
//     }

//     if (param2 == "mentiroso") {
//         alert('salí de ahi campeón ' + nombre)
//     }
// }

// let estado = 'mentiroso'
// let algo = prompt('Ingrese algo')
// let nombre = prompt('Ingrese su nombre')

// relaciones(algo,estado,nombre)


// EJEMPLO 4

// let resultado = 0 

// function sumar(valor1, valor2) {
//     resultado = (valor1 + valor2)
// }

// function mostrarMensaje(mensaje) {
//     alert('El resultado es: ' + mensaje)
// }

// let var1 = parseFloat(prompt('Ingrese el número #1'))
// let var2 = parseFloat(prompt('Ingrese el número #2'))
// sumar(var1,var2)
// mostrarMensaje(resultado)


// EJEMPLO 5

// function sumar(valor1,valor2) {
//     return(valor1 + valor2)
// }

// function multiplicadorDos(num1,num2) {
//     let resultado = sumar(num1,num2)
//     return resultado * 2
// }


// EJEMPLO CALCULADORA
function calcularCuota(precio, tarjeta) {
    const iva = 19
    const cuota = 30
    let descuento = '' 
    let precioFinal = 0
    let valorCuota = 0


    switch(tarjeta) {
        case "Santander"
            descuento = 15
            break
        case 'Chile'
            descuento = 10
            break
        default
            descuento = 0
            break
    }

    

return( precioFinal = precio + ((precio * iva) / 100) - ((precio * descuento) / 100) )
valorCuota = precio / cuota

return valorCuota

}

calcularCuota(300000,"Santander")