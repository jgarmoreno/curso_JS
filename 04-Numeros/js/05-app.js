// Incrementos o decrementos
let puntuacion = 5;
let puntuacion2 = 9;
let puntuacion3 = 4;
let puntuacion4 = 5;

// Incremento
puntuacion++; // Ojo aquí. Primero se asigna el valor y luego se incrementa, con lo que si yo hago console.log(puntuacion++)
// me va a mostrar 5. Pero si se vuelve a llamar a la variable, ya sale 6.
++puntuacion; // Así se evita, ya que primero se incrementa y luego muestra el valor de puntuación.

// Decremento
puntuacion2--; // 9 -> 8 Igual que el incremento, primero se asigna el valor y luego se decrementa.
--puntuacion2; // 7.

// Para que no sea solo un incremento o decremento de 1:
puntuacion3 += 3; // Aquí sí incrementa directamente en 3.
puntuacion4 -= 3; // Aquí sí decrementa directamente en 3.


console.log(puntuacion);
console.log(puntuacion2);
console.log(puntuacion3);
console.log(puntuacion4);