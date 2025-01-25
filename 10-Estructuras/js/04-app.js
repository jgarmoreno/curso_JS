// Else if
const dinero = 100;
const aPagar = 200;
const tarjeta = false;
const cheque = false;

if(dinero >= aPagar) {
    console.log('Tienes dinero')
} else if (cheque) {
    console.log('Puedes pagar con cheque')
} else if (tarjeta) {
    console.log('Puedes usar la tarjeta')
} else {
    console.log('No puedes pagar');
}
