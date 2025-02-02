// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody'); // Donde se van a listar los cursos
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let carritoCompras = [];

cargarEventListeners();
function cargarEventListeners() {
    // Cuando agregas un curso al clicar el botón del curso 'Agregar al carrito'
    listaCursos.addEventListener('click', agregarCurso);

    // Eliminar cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Traer el storage al HTML cuando cargue el DOM
    document.addEventListener('DOMContentLoaded', () => {
        carritoCompras = JSON.parse(localStorage.getItem('carrito')) || [];
        mostrarCursosCarrito();
    });

    // Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        carritoCompras = [];
        limpiarHTML();
    });
}

// Funciones
function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        obtenerNombreCurso(cursoSeleccionado);
    }
}

function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        // Elimina del arreglo por data-id
        carritoCompras = carritoCompras.filter(curso => curso.id !== cursoId)
        mostrarCursosCarrito();
    };

}

function obtenerNombreCurso(curso) {

    // Crear un objeto con el contenido del curso
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };

    // Revisa si un elemento ya existe en el carrito
    const existe = carritoCompras.some(curso => curso.id === infoCurso.id);

    if(existe) {
        // Actualizamos la cantidad
        const cursos = carritoCompras.map( curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        });
        carritoCompras = [...cursos];
    } else {
        // Agregar elementos al array de carrito
        carritoCompras = [...carritoCompras, infoCurso]; // Hay que primero hacer copia del carrito inicial, para mantener los elementos.
    }
    
    mostrarCursosCarrito();
}

function mostrarCursosCarrito() {
    // Limpiar el HTML
    limpiarHTML();

    // Recorrer el carrito y generar HTML
    carritoCompras.forEach((articulo) => {
        const { imagen, titulo, precio, cantidad, id } = articulo;
        const row = document.createElement('tr'); // Esta en un tbody
        row.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>
        `;
        // Agrega el HTML en el tbody
        contenedorCarrito.appendChild(row);
    });

    // Agregar carrito al storage
    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(carritoCompras));
}

function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild); // Siempre borra el hijo, deja el carrito vacío 
    }
}   


