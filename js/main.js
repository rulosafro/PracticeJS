//* Array y let
let carritoDeCompra = []
let post = []
let numberCart = carritoDeCompra.length

//* Query de Elementos 
const carritoNumero = document.querySelector('#numberCart')
const searchBar = document.querySelector('#searchBar')
const searchButton = document.querySelector('#searchButton')
const gridProductos = document.querySelector('#gridProductos')
// const numCarrito

//* Condicionales 
//! Posible Cambio
if (localStorage.getItem('carrito')) {
carritoDeCompra = JSON.parse(localStorage.getItem('carrito'))
} else {
    carritoDeCompra = []
}

//* Funciones
const agregarAlCarrito = (e) => {
    const clickProductoElegido = e.target.getAttribute('data-id')
    const productoElegido = dataGuitarras.find((guitarra) => guitarra.id == clickProductoElegido)
    carritoDeCompra.push(productoElegido)
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompra))
    // imprimirCarrito()
    //console.log(carritoDeCompra);
}


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
        gridProductos.appendChild(nuevaCard)
    })
    const cardButtons = document.querySelectorAll('.cardButton')
    cardButtons.forEach((button) => {
        button.addEventListener('click', agregarAlCarrito)
})}

const renderizarCarrito = () => {
    const nuevoNumber = document.createElement('p')
    nuevoNumber.className = "numberPNG"
    nuevoNumber.innerText = `${numberCart}`
    carritoNumero.append(nuevoNumber)
    return nuevoNumber
}

//! Fetch
renderizarPost = () => {
	posts.forEach((post) => {
		const newItemList = document.createElement('li')
		newItemList.textContent = post.title
		postContainer.append(newItemList)
	})
}
fetch ('./') //recibira una promesa pendiente
	.then((promise) => response.json()) //Escucha la respuesta de la primera promesa y activa el método json
	.then((data) => {
		console.log(data)
		renderizarPost()
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

//! Ejecuciones
renderizarProductos()
renderizarCarrito()
