// Orden DOMContentLoaded
console.log(1); // 1º

document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento listo');
    console.log(2); // 3º
});

console.log(3); // 2º