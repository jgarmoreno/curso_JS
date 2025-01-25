// Switch
const metodoPago = 'tarjeta';

switch(metodoPago) {
    case 'efectivo':
        pagar();
        break;
    case 'tarjeta':
        pagar();
        break;
    case 'movil':
        console.log(`Pagaste vía ${metodoPago}`);
        break;
    default:
        console.log(`No has seleccionado ningún método de pago`);
        break;
}

function pagar() {
    if(metodoPago === 'efectivo') {
        console.log(`Pagando en ${metodoPago}`);
    } else if (metodoPago === 'tarjeta') {
        console.log(`Pagando en ${metodoPago}`);
    }
}