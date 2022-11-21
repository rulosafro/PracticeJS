// * Mensaje de bienvenida
alert("Bienvenido/a a Salutify, usted esta entrando al simulador de salud donde se calcularan multiples parametros de salud")

// * Construcción de persona
let nombre = prompt("¿Cual es su nombre?")
let peso = parseFloat(prompt("¿Cuanto kilos pesa actualmente?"))
let sexo = prompt("¿Cual es tu genero, hombre o mujer?").toLocaleLowerCase()
let anio = prompt("¿Año de nacimiento?")
let altura = parseFloat(prompt("Cual es tu altura en centimetros y sin comas? Ej: 175"))
const persona1 = {nombre,peso,sexo,anio, altura}
let IMC 
let FC
const date = new Date();
let year = date.getFullYear();
console.log("primera impresion " + persona1);

// * Condicionales para verificar los casos de cada let
while (sexo != "hombre" && sexo != "mujer") {
    sexo = prompt("Ingreso un valor erroneo, vuela a contestar. ¿Cual es tu genero, hombre o mujer?");
    switch (sexo) {
        case "hombre":
            persona1.sexo = "hombre"
            xDeSexo = 29
            console.log(xDeSexo)
            break;
        case "mujer":
            persona1.sexo = "mujer"
            xDeSexo = 15
            console.log(xDeSexo)
            break;
        default:
            console.log("Ingreso un valor incorrecto");
            break;
    }
}

//arreglar este que solo vuelve a preguntar 1 vez
if (altura < 50) {
    alert("Es probable que hayas ingresado un numero con coma, vuelve a intentarlo")
    persona1.altura = parseFloat(prompt("Vuelve a ingresar tu altura. ¿Cual es tu altura en centimetros y sin comas? Ej: 175"))
}else if ((altura >= 50) && (altura < 159)) {
    alert("tomamos tu altura de " + altura + " cm")
} else if ((altura >= 159) && (altura <= 180)) {
    alert(nombre + " estas en la media de altura")
} else {
    alert(nombre + " sos una maquina")
}
console.log(persona1);

//  * Mensajes de UX
alert(nombre + " estamos empezando a calcular tus estadisticas...")
alert("Ya estamos casi...")
console.log(persona1);

// * Formula flecha para los calculo
function calculoIMC(varPeso, varAltura) {
    IMC = varPeso / ((varAltura/100)*(varAltura/100)) 
}
function calculoFC(varAnio) {
    FC = 220 - (year-varAnio)
}


calculoIMC(peso, altura)
console.log(IMC)
calculoFC(anio)
console.log(FC);
// const calculoGrasa => () {}


// ! RESULTADO
alert("Tu IMC es de " + IMC)
alert("Tu frecuencia cardiaca máxina es de " + FC + " a la hora de correr tu corazón no deberia pasar las " + FC + " palpitaciones por segundo. #stayhealthy")

// ! INTENTO POR CONTINUAR + ADELANTE

// * Objeto o Class para la persona
class Persona {
    constructor(nombre,peso,sexo,anio){
        this.nombre = nombre
        this.peso = peso
        this.sexo = sexo
        this.anio = anio
    }
    mostrar() {
        console.log(this.Persona);
    }
}
const persona1 = new Persona(prompt("Cual es su nombre"),prompt("Cuanto pesa actualmente"),prompt("Se identifica como hombre o mujer"), prompt("Año de nacimiento?"))
persona1.mostrar
console.log(persona1);



