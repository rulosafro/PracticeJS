// Condicionalaasda
  if (localStorage.getItem('carrito')) {
      carrito = JSON.parse(localStorage.getItem('carrito'))
  } else {
      carrito = []
  }

// Declaraciones


// Array
let carritoDeCompra = []

// Query de Elementos 
const searchBarInput = document.querySelector('#searchBarInput')
const searchBarButton = document.querySelector('#searchBarButton')
const gridProductos = document.querySelector('#gridProductos')

// * Cards
const renderizarGuitarras = () => {
    dataGuitarras.forEach((guitarra) => {
        const nuevaCard = document.createElement('div') 
        nuevaCard.className = 'card'
        nuevaCard.innerHTML = `
            <h2 class="cardTitle"> ${guitarra.marca} </h2>
            <p class="cardInfo"> ${guitarra.nombre}</p>
            <img src="${guitarra.imgSrc}" class="cardImg">
            <span class="cardPrice"> $${guitarra.precio} </span>
            <button class="buttonCTA" data-id="${guitarra.id}"> Agregar al Carrito </button>
        `
        gridProductos.append(nuevaCard)
    })

    const buttonsCTA = document.querySelectorAll('.buttonCTA')
    buttonsCTA.forEach((button) => {
        button.addEventListener('click', agregarProductoAlCarrito)
    })
}

//Ejecuciones
renderizarGuitarras()
