// Borrar del localStorage
localStorage.removeItem('nombre');

// Si quieres actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Nuevo mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));

localStorage.clear(); // Limpia todo