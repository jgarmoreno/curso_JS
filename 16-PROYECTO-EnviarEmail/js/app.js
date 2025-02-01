document.addEventListener('DOMContentLoaded', function()  {

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    };

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    // Agregar addEventListener
    inputEmail.addEventListener('input', validar); // Aquí no lleva paréntesis porque se mandaría a llamar siempre. En este caso, solo cuando ocurra blur. **Se cambió BLUR por INPUT para activarse automático y no al salir**
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e) {
        e.preventDefault();
        resetFormulario();
    });

    function enviarEmail(e) {
        e.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');
        
        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');
            resetFormulario();

            // Crear alerta
            const exito = document.createElement('P');
            exito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            exito.textContent = 'Mensaje enviado correctamente';
            formulario.appendChild(exito);

            setTimeout(() => {
                exito.remove();
            }, 3000);
        }, 3000);

    }

    function validar(e) {
        if(e.target.value.trim() === '') {
            mostrarAlerta(`El ${e.target.id} no puede ir vacío`, e.target.parentElement); // Referencia del div para colocar la alerta al final
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es válido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        // ASIGNAR VALORES DEL FORM AL OBJETO
        email[e.target.name] = e.target.value.trim().toLowerCase(); 
        //------------------------------------------------------------------------------------------------------------
        // Acceder a una PROPIEDAD DINÁMICA
        // Como name es una cadena de texto ("email", "asunto", "mensaje"), no puedes hacer:

        // email.e.target.name = e.target.value;

        // Porque email.e.target.name intentaría acceder a email."email" (lo cual es incorrecto).En cambio, usas la notación de corchetes:
        
        // email[e.target.name] = e.target.value.trim().toLowerCase();

        // Esto evalúa e.target.name y usa el resultado como clave dentro del objeto email, logrando:

        // email["email"] = "correo@ejemplo.com";
        // email["asunto"] = "Consulta";
        // email["mensaje"] = "Hola, quiero información...";

        //------------------------------------------------------------------------------------------------------------

        // COMPROBAR OBJETO
        comprobarEmail();

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

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        if(Object.values(email).includes('')) {  // .values() convierte a array y se puede usar .includes()
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }

    function resetFormulario() {
        email.email = '';
        email.asunto = '';
        email.mensaje = '';
        formulario.reset();
        comprobarEmail();
    }
});