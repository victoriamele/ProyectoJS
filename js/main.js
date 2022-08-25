const productos = [
    //Guitarras
    {
        id: 1,
        modelo: "CX-40",
        precio: 50970,
        imagen: "./img/CX40.jpg"
    },
    {
        id: 2,
        modelo: "F-370",
        precio: 69174,
        imagen: "./img/F370BL.jfif"
    },
    {
        id: 3,
        modelo: "PAC-112J",
        precio: 82744,
        imagen: "./img/PAC112J.jpg"
    },
    //Bajos
    {
        id: 4,
        modelo: "TRBX174",
        precio: 80962,
        imagen: "./img/TRBX174.jpg"
    },
    {
        id: 5,
        modelo: "FTRBX304",
        precio: 136974,
        imagen: "./img/TRBX304.webp"
    },
    {
        id: 6,
        modelo: "TRBX305",
        precio: 160652,
        imagen: "./img/TRBX305.jpg"
    },
    //Pianos
    {
        id: 7,
        modelo: "PSR-E473",
        precio: 104181,
        imagen: "./img/PSRE473.jpg"
    },
    {
        id: 8,
        modelo: "P-45",
        precio: 148906,
        imagen: "./img/P45.jpg"
    },
    {
        id: 9,
        modelo: "P-125",
        precio: 160652,
        imagen: "./img/P125.jpg"
    },
    //Mixers
    {
        id: 10,
        modelo: "MG06",
        precio: 29667,
        imagen: "./img/MG06.jpg"
    },
    {
        id: 11,
        modelo: "MG10XU",
        precio: 59335,
        imagen: "./img/MG10XU.jpg"
    },
    {
        id: 12,
        modelo: "MG20XU",
        precio: 160651,
        imagen: "./img/MG20XU.jpg"
    }
];

//Se crea un Local Storage de los productos
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//Almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}

let carrito = [];
const moneda = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones
function renderizarProductos() {
    productos.forEach((info) => {
        // Estructura de tarjetas con Bootstrap
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('card', 'col-sm-4', 'bg-light', 'border-dark', 'text-center');

        const tarjetaBody = document.createElement('div');
        tarjetaBody.classList.add('card-body');
        
        const tarjetaTitle = document.createElement('h4');
        tarjetaTitle.classList.add('card-title', 'text-center');
        tarjetaTitle.textContent = info.modelo;
        
        const tarjetaImage = document.createElement('img');
        tarjetaImage.classList.add('img-fluid');
        tarjetaImage.setAttribute('src', info.imagen);
        
        const tarjetaPrice = document.createElement('p');
        tarjetaPrice.classList.add('card-text', 'text-center');
        tarjetaPrice.textContent = `${info.precio}${moneda}`;
        
        const tarjetaBtn = document.createElement('button');
        tarjetaBtn.classList.add('btn', 'btn-light');
        tarjetaBtn.textContent = 'Agregar';
        tarjetaBtn.setAttribute('marcador', info.id);
        tarjetaBtn.addEventListener('click', addProductoAlCarrito);
        
        //Se agrega el contenido
        tarjetaBody.appendChild(tarjetaImage);
        tarjetaBody.appendChild(tarjetaTitle);
        tarjetaBody.appendChild(tarjetaPrice);
        tarjetaBody.appendChild(tarjetaBtn);
        tarjeta.appendChild(tarjetaBody);
        DOMitems.appendChild(tarjeta);
    });
}

//Sumar productos al carriyo
function addProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'))
    updateCarrito();
}

//Se defince la funcion para actualizar el carrito
function updateCarrito() {
    DOMcarrito.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
        const myItem = productos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        
        const myNode = document.createElement('li');
        myNode.classList.add('list-group-item', 'text-right', 'mx-2');
        myNode.textContent = `${numeroUnidadesItem} x ${myItem[0].modelo} - ${myItem[0].precio}${moneda}`;

        // Boton para borrar
        const myBtn = document.createElement('button');
        myBtn.classList.add('btn', 'mx-5');
        myBtn.textContent = 'Eliminar';
        myBtn.style.marginLeft = '1rem';
        myBtn.dataset.item = item;
        myBtn.addEventListener('click', deleteItemCarrito);      
        myNode.appendChild(myBtn);
        DOMcarrito.appendChild(myNode);
    });
    
    //Calculamos el total
    DOMtotal.textContent = calcularTotal();
}

//Borrar items del carrito
function deleteItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    updateCarrito();
}

//Precio total con productos repetidos
function calcularTotal() {
    return carrito.reduce((total, item) => {
        const miItem = productos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}


function emptyCarrito
() {
    carrito = [];
    updateCarrito();
}

DOMbotonVaciar.addEventListener('click', () => {

    Swal.fire({
        title: 'Está seguro de vaciar el carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((result) => {

        if (result.isConfirmed) {
            Swal.fire({
                title: 'Borrado!',
                icon: 'success',
                text: 'El carrito ha sido vaciado',
                onOpen: emptyCarrito()
            })
        }
    })
})


// Inicio
renderizarProductos();
updateCarrito();
