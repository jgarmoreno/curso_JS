document.addEventListener('DOMContentLoaded', function()  {

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    // Agregar addEventListener
    inputEmail.addEventListener('blur', validar); // Aquí no lleva paréntesis porque se mandaría a llamar siempre. En este caso, solo cuando ocurra blur.
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e) {
        if(e.target.value.trim() === '') {
            mostrarAlerta(`El ${e.target.id} no puede ir vacío`, e.target.parentElement); // Referencia del div para colocar la alerta al final
            return;
        }
        limpiarAlerta(e.target.parentElement);
    }
    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);

        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center'); // Es en Tailwind CSS, por eso no tira de error.style.backgroundColor. p-2 es padding de 2.
        
        // Inyectar el error en el formulario
        referencia.appendChild(error);
        
    }

    function limpiarAlerta(referencia) {
        // Comprueba si ya existe la alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta) {
            alerta.remove();
        }
    }
});