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
const botonComprar = document.querySelector('#realizarCompra')
const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')
const cantidadTotal = document.querySelector('#cantidadTotal')
const cantidad = document.querySelector('#cantidad')
const boton = document.querySelector(`.cardButton`)
const filterBtns = document.querySelectorAll('.filter-btn')

filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const category = e.currentTarget.id
    const seleccionColores = dataGuitarras.filter((colorItem) => {
      return colorItem.color == category
    })
    console.log(seleccionColores);
    gridProductos.innerHTML = ""
    dataGuitarras = seleccionColores
    renderizarProductos()
  })
})



//* Funciones
const renderizarProductos = () => {
    dataGuitarras.forEach((guitarra) => {
        const nuevaCard = document.createElement('div') 
        nuevaCard.className = 'card filter-item'
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

    Toastify({
        text: "Se ha cargado un producto al carrito :)",
        duration: 2000,
        close: true,
        gravity: "top", 
        position: "right",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function(){} // Callback after click
      }).showToast();

    actualizarCarrito()

}

const actualizarCarrito = () => {
    carritoContendero.innerHTML = ""
    carritoDeCompra.forEach((guitarra) => {
        const nuevaCardCarrito = document.createElement('div') 
        nuevaCardCarrito.className = 'guitarraEnCarrito'
        nuevaCardCarrito.innerHTML = `
        <div class="ordenCarrito">
        <h2 class="cardTitleCarrito"> ${guitarra.marca} - <span class="cardInfoCarrito"> ${guitarra.nombre}</span></h2>
        <p class="cantidad"> <span id="cantidad">Precio: $${guitarra.precio} - Cantidad: ${guitarra.cantidad} </span></p> </div>
        <div>        <button onclick="eliminarDelCarrito(${guitarra.id})" class="bottonEliminar"> Eliminar</button> </div>
        </div>
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
    Toastify({
        text: "Se ha vaciado el carrito",
        duration: 2000,
        close: true,
        gravity: "top", 
        position: "right",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function(){} // Callback after click
      }).showToast();
})

botonComprar.addEventListener('click', () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Quieres confirmar tu compra?',
        text: "Estas a punto de realizar tu compra por medio de GuitarWorld",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Realizar compra',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Compra Realizada',
            'Tu compra se ha realizado con exito',
            'success'
          )
        } else (
          result.dismiss === Swal.DismissReason.cancel
        )
      })
})

// Fetch
const traerGuitarras = async () => {
    const response = await fetch ('../json/data.json') 
    const data = await response.json()
    dataGuitarras = data
    renderizarProductos()
}

// Ejecuciones
actualizarCarrito()
traerGuitarras()

