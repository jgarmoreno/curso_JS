// Buenas prácticas con el if
const autenticado = true;

if(autenticado) {
    console.log('El usuario está autenticado');
} else {
    console.log('El usuario no está autenticado');
}

const puntuacion = 500;

if(puntuacion > 200) {
    console.log('Pasaste de nivel');
} else if (puntuacion > 300) {
    console.log('Excelente!'); // Es mejor que éste se lance primero, ya que el código se detiene arriba.
}

// Así:
if(puntuacion > 300) {
    console.log('Excelente');
} else if(puntuacion>200) {
    console.log('Pasaste de nivel');
}

// Detener el código con un return para que no se ejecute el de abajo. SE DEBE EJECUTAR EN UN FUNCTION.
function revisarPuntuaje() {
    if(puntuacion > 300) {
        console.log('Excelente');
        return;
    }
    if(puntuacion>200) {
        console.log('Pasaste de nivel');
        return;
    }
}

