//* Array y let
let carritoDeCompra = []

//* Condicionalaasda
if (localStorage.getItem('carrito')) {
carritoDeCompra = JSON.parse(localStorage.getItem('carrito'))
} else {
    carritoDeCompra = []
}



let numberCart = carritoDeCompra.length

//* Query de Elementos 
const searchBar = document.querySelector('#searchBar')
const searchButton = document.querySelector('#searchButton')
const gridProductos = document.querySelector('#gridProductos')
const carritoNumero = document.querySelector('#numberCart')

//* Funciones
const agregarAlCarrito = (e) => {
    const idProductoElegido = e.target.getAttribute('data-id')
    const productoElegido = dataGuitarras.find((guitarra) => guitarra.id == idProductoElegido)
    carritoDeCompra.push(productoElegido)
    console.log(carritoDeCompra);
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompra))
}

const renderizarProductos = () => {
    dataGuitarras.forEach((guitarra) => {
        const nuevaCard = document.createElement('div') 
        nuevaCard.className = 'card'
        nuevaCard.innerHTML = `
            <h2 class="cardTitle"> ${guitarra.marca} </h2>
            <p class="cardInfo"> ${guitarra.nombre}</p>
            <img src="${guitarra.imgSrc}" class="cardImg">
            <span class="cardPrice"> $${guitarra.precio} </span>
            <button class="cardButton" data-id="${guitarra.id}"> <p data-id="${guitarra.id}"> Agregar al Carrito </p> </button>
        `
        gridProductos.append(nuevaCard)
    })
    const cardButton = document.querySelectorAll('.cardButton')
    cardButton.forEach((button) => {
        button.addEventListener('click', agregarAlCarrito)
})}

const renderizarCarrito = () => {
    const nuevoNumber = document.createElement('p')
    nuevoNumber.className = "numberPNG"
    nuevoNumber.innerText = `${numberCart}`
    carritoNumero.append(nuevoNumber)
    return nuevoNumber
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

//*Ejecuciones
renderizarProductos()
renderizarCarrito()
