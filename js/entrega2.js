/* ! Cosas por hacer: Branch con los comentarios */

// Variables
let nombre
let genM
let carroDeCompra = []


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


const printStock = () => {
    let stock1 = ""
    for (let i = 0; i < dataGuitarras.length; i++) {
        stock1 += `${i+1} - ${dataGuitarras[i].marca} ${dataGuitarras[i].nombre}- $${dataGuitarras[i].precio} \n`;
    }
    return stock1
}

let elegir = prompt("Acá esta el stock actual, elige un numero de la lista \n" + printStock())

const verificadorDeProducto = () => {
    while (isNaN(elegir)) {
      alert("Por favor ingresa un numero");
      elegir = prompt(printStock());
    }
    while (elegir == "") {
      alert(
        "Lo Sentimos. No se permiten campos vacios. Por favor ingrese un numero"
      );
      elegir = prompt(printStock());
    }
};
verificadorDeProducto();


carroDeCompra.push(dataGuitarras[elegir-1].marca + " " + dataGuitarras[elegir-1].nombre + " " + dataGuitarras[elegir-1].precio);

console.log(carroDeCompra);
alert(carroDeCompra)
// alert(`En el carro actualmente hay ` + carroDeCompra);

// for (let i = 0; i < carroDeCompra.length; i++) {
//     const plataTotal = carroDeCompra.precio.reduce();
    
// }


let iteracion 
while (iteracion != "si" || iteracion != "no") {
    let iteracion = prompt("Quieres agregar otra compra al carro \n si \n no").toLowerCase()
    switch (iteracion) {
        case "si":
            let elegir = prompt("Acá esta el stock actual, elige un numero de la lista \n" + printStock())    
            verificadorDeProducto()
            // alert(elegir)
            carroDeCompra.push(dataGuitarras[elegir-1].marca + " " + dataGuitarras[elegir-1].nombre + " " + dataGuitarras[elegir-1].precio);
            console.log(carroDeCompra);       
            break;
        case "no":
            console.log("salida de iteracion");
            alert(`Okey, continuemos`)
            alert("En el carro actualemente hay \n" + plataTotal)
            break;
        default:
            alert(`No te he entendido, me puedes repetir`)
            console.log(`Ingreso un valor incorrecto`);
            break;
    }
}

alert(`Okey, continuemos`)


// for (let i = 0; i < carroDeCompra.length; i++) {
//     const plataTotal = carroDeCompra.precio.reduce();
//     return plataTotal
// }



// for (let i = 0; i < carroDeCompra.length; i++) {
//     const plataTotal = carroDeCompra.precio.reduce();
// }
// console.log(plataTotal);
