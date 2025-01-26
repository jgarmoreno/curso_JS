// Get Elements By Class Name // Selecciona varios elementos // Casi no se usa, mejor querySelector
const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// Si las clases existen más de una vez
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// Si una clase no existe
const noExiste = document.getElementsByClassName('noexiste');
console.log(noExiste); // Retorna arreglo vacío