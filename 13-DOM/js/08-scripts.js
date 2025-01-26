// Traversing the DOM // CHILDREN (de padre a hijo) // PARENTNODE, PARENTELEMENT(de hijo a padre)
const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.childNodes); // Esto da array 0 = text, 1 = a, 2 = text... Text = espacios en blanco entre enlaces en el HTML (distancia entre </a> y el <a> siguiente)
console.log(navegacion.children); // Esto lista solo los elementos HTML


console.log(navegacion.children[1].nodeName); // Etiqueta <a>
console.log(navegacion.children[1].nodeType); // Da 1. Nodo de tipo elemento.

// TRAVERSING DE PADRE A HIJO
const card = document.querySelector('.card');
console.log(card.children[1].children[1].textContent);

// Cambiar texto e imagen haciendo traversing
card.children[1].children[1].textContent = 'Nuevo heading desde traversing the Dom'; // 
card.children[0].src = 'img/hacer2.jpg';

// TRAVERSING DE HIJO A PADRE
console.log(card.parentNode); // Toma en cuenta los espacios en blanco, mejor usar el de Element
console.log(card.parentElement);


// Cuando estoy con elementos similares, entre hermanos
console.log(card.nextElementSibling);


const ultimoCard = document.querySelector('.card:nth-child(4)'); //También -> lastOfType
console.log(ultimoCard.previousElementSibling);

// FirstElementChild y LastElementChild
const navegacion2 = document.querySelector('.navegacion').firstElementChild;
console.log(navegacion2);
const navegacion3 = document.querySelector('.navegacion').lastElementChild;
console.log(navegacion3);