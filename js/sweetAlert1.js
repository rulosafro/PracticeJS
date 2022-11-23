Swal.fire({
    title: 'Bienvenido',
    text: 'Estas entrando el mundo de las guitarras, un nuevo ecommerce musical',
    icon: '',
    confirmButtonText: 'Buenardo'
})

const realizarCompra = document.querySelector('#boxCart')
    searchButton.addEventListener('click', () => {
        console.log(2233);
    Swal.fire({
        title: 'Quieres realizar tu compra',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Realizar Compra',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Compra realizada',
                showConfirmButton: false,
                timer: 1500
              })
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
})
