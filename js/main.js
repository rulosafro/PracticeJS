//* Condicionalaasda
  if (localStorage.getItem('carrito')) {
      carrito = JSON.parse(localStorage.getItem('carrito'))
  } else {
      carrito = []
  }

//* Declaraciones


//* Array
let carritoDeCompra = []

//* Query de Elementos 
const searchBar = document.querySelector('#searchBar')
const searchButton = document.querySelector('#searchButton')
const gridProductos = document.querySelector('#gridProductos')
const cardButton = document.querySelectorAll('.cardButton')

//* Funciones
const renderizarGuitarras = () => {
    dataGuitarras.forEach((guitarra) => {
        const nuevaCard = document.createElement('div') 
        nuevaCard.className = 'card'
        nuevaCard.innerHTML = `
            <h2 class="cardTitle"> ${guitarra.marca} </h2>
            <p class="cardInfo"> ${guitarra.nombre}</p>
            <img src="${guitarra.imgSrc}" class="cardImg">
            <span class="cardPrice"> $${guitarra.precio} </span>
            <button class="cardButton" data-id="${guitarra.id}"> <p> Agregar al Carrito </p> </button>
        `
        gridProductos.append(nuevaCard)
    })

    const buttonsCTA = document.querySelectorAll('.buttonCTA')
    buttonsCTA.forEach((button) => {
        button.addEventListener('click', agregarProductoAlCarrito)
    })
}


// Buscador
const inputChange = document.querySelector('#searchBar')
inputChange.addEventListener('çhange', (e) => {
    console.log(e.value);
})
const searchButtonJS = document.querySelector('#searchButton')
searchButton.addEventListener('click', () => {
    console.log(inputChange.value)
})

// Agregar al carrito

cardButton.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(e.target);
    })
})

//*Ejecuciones
renderizarGuitarras()

