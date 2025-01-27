// Eventos de FORMULARIO
const formulario = document.querySelector('#formulario');

// Función ANÓNIMA con el arrow function
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene el envío de formulario. Útil para validar antes de enviarlo.
    console.log(e);
});

// Función con DECLARACIÓN
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log(e);
}