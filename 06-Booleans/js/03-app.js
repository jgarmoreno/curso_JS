// Consejos 1 No incluir === true o === false en la condición del if ya que va implícito
const autenticado = false;

// No recomendable
if(autenticado === true) {
    console.log('Puedes ver netflix');
} else {
    console.log('No puedes verlo');
}

// Es mejor:
if(autenticado) {
    console.log('Puedes ver netflix');
} else {
    console.log('No puedes ver Netflix');
}

// Operador ternario
console.log(autenticado ? 'Puedes ver Netflix' : 'No puedes ver Netflix');