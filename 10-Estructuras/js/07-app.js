// || OR
const efectivo = 300;
const credito = 300;
const disponible = efectivo + credito;
const totalAPagar = 600;

if(efectivo >= totalAPagar || credito >= totalAPagar || disponible >= totalAPagar) {
    console.log('Sí podemos pagar');
} else {
    console.log('No puedes pagar');
}