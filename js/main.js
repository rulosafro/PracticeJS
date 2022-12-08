//* Arrays
let dataGuitarras = []
let carritoDeCompra = JSON.parse(localStorage.getItem('carrito')) || []

//* Query de Elementos 
const carritoNumero = document.querySelector('#numberCart')
const searchBar = document.querySelector('#searchBar')
const searchButton = document.querySelector('#searchButton')
const gridProductos = document.querySelector('#gridProductos')
const carritoContendero = document.querySelector('#carritoContenedor')
const botonVaciar = document.querySelector('#vaciarCarrito')
const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')
const cantidadTotal = document.querySelector('#cantidadTotal')
const cantidad = document.querySelector('#cantidad')
const boton = document.querySelector(`.cardButton`)

//* Funciones
const renderizarProductos = () => {
    dataGuitarras.forEach((guitarra) => {
        const nuevaCard = document.createElement('div') 
        nuevaCard.className = 'card'
        nuevaCard.innerHTML = `
            <img src="${guitarra.imgSrc}" class="cardImg">
            <h2 class="cardTitle"> ${guitarra.marca} </h2>
            <p class="cardInfo"> ${guitarra.nombre}</p>
            <p class="cardPrice"> $${guitarra.precio} </p>
            <button class="cardButton" data-id="${guitarra.id}">  Agregar al Carrito </button>
        `
        gridProductos.append(nuevaCard)
    })

    contadorCarrito.innerText = carritoDeCompra.length
    const cardButtons = document.querySelectorAll('.cardButton')
    cardButtons.forEach((button) => {
        button.addEventListener('click', agregarAlCarrito)
})}

const agregarAlCarrito = (guitarraSelect) => {
    const idGuitarra = guitarraSelect.target.getAttribute('data-id')
    const elegidaGuitarra = dataGuitarras.find((guitarra) => guitarra.id == idGuitarra)
    if (!carritoDeCompra.some((guitarra)=> guitarra.id == idGuitarra)) {
        carritoDeCompra.push({
            ...elegidaGuitarra
        })
    } else {
        const seleccionGuitarra = carritoDeCompra.find((guitarra) => guitarra.id == idGuitarra)
        seleccionGuitarra.cantidad++
    }
    actualizarCarrito()
    console.log(carritoDeCompra);
}

const actualizarCarrito = () => {
    carritoContendero.innerHTML = ""
    carritoDeCompra.forEach((guitarra) => {
        const nuevaCardCarrito = document.createElement('div') 
        nuevaCardCarrito.className = 'guitarraEnCarrito'
        nuevaCardCarrito.innerHTML = `
        <h2 class="cardTitleCarrito"> ${guitarra.marca} </h2>
        <p class="cardInfoCarrito"> ${guitarra.nombre}</p>
        <p class="ca; <span id="cantidad"> ${guitarra.cantidad} </span> </p>
        <button onclick="eliminarDelCarrito(${guitarra.id})" class="bottonEliminar"> Eliminar</button>
        `
        carritoContendero.appendChild(nuevaCardCarrito)
    });
    
    
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompra))
    contadorCarrito.innerText = carritoDeCompra.length
    precioTotal.innerText = carritoDeCompra.reduce((acc, guitarra) => acc + guitarra.precio,0)
}

const eliminarDelCarrito = (eliminarGuitarra) => {
    const itemA = carritoDeCompra.find((guitarra) => guitarra.id === eliminarGuitarra)
    const indice = carritoDeCompra.indexOf(itemA)
    carritoDeCompra.splice(indice,1)
    actualizarCarrito()
}

botonVaciar.addEventListener('click', () => {
    carritoDeCompra.length = 0
    actualizarCarrito()
})

//! Buscador
const inputChange = document.querySelector('#searchBar')
inputChange.addEventListener('çhange', (e) => {
    console.log(e.value);
})
const searchButtonJS = document.querySelector('#searchButton')
searchButton.addEventListener('click', () => {
    console.log(inputChange.value)
})

// Fetch
const traerGuitarras = async () => {
    const response = await fetch ('../json/data.json') 
    const data = await response.json()
    dataGuitarras = data
    renderizarProductos()
}

//! Ejecuciones
traerGuitarras()
actualizarCarrito()

//! Filtros 
