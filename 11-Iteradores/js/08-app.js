// For in -> itera sobre OBJETOS
const automovil = {
    modelo: 'Camaro',
    year: 1978,
    motor: '6.0'
};

for(let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`); // Si se pone propiedad da los índices. Así se obtiene el valor.
}

for(let [llave,valor] of Object.entries(automovil)) {
    console.log(`${llave} ${valor}`) // Se puede hacer con un for of de esta manera
}