// Acceder a los elementos de un arreglo
const numeros = [10,20,30,40,50];

console.log(numeros);

// Para ver mejor los arreglos en consola => console.table()
console.table(numeros);

// Cómo acceder a una posición en concreto
console.log(numeros[2]); // 30
console.log(numeros[0]); // 10

// Para acceder a un arreglo, dentro de un arreglo
const numeros2 = [10,20,30,40,50, [1,2,3]];
console.table(numeros2); // Da la tabla.
console.log(numeros2[5][2]); // 3 del segundo array.

// Para acceder a la propiedad de un objeto, dentro de un array
const numeros3 = [
    10,
    20,
    30,
    40,
    50,
    [1, 2, 3],
    {
      nombre: "Jorge",
      edad: 30,
      profesion: "Analista de datos",
      habilidades: {
        lenguaje1: "Python",
        lenguaje2: "JavaScript",
        lenguaje3: "SQL"
      }
    }
];
console.log(numeros3[6].habilidades) // Objeto
console.log(numeros3[6].habilidades.lenguaje3) // SQL

// Crear una variable de manera normal
const lenguajeSQL = numeros3[6].habilidades.lenguaje3;
console.log(lenguajeSQL) // SQL.

// Crear una nueva variable aplicando el DESTRUCTURING sobre ARRAY
const [primero,,,,,array, { habilidades, habilidades: { lenguaje3 } } ] = numeros3;
console.log(primero);
console.log(array);
console.log(habilidades);
console.log(lenguaje3);