// Objeto Math en JavaScript (se puede escribir en consola para revisar todos sus métodos)
let resultado;

// PI
resultado = Math.PI; // 3.141592653589793

// Redondear
resultado = Math.round(2.3) // 2
resultado = Math.round(2.7) // 3

// Redondeo hacia arriba
resultado = Math.ceil(2.3) // 3
resultado = Math.ceil(2.8) // 3

// Redondeo hacia abajo
resultado = Math.floor(2.3) // 2
resultado = Math.floor(2.8) // 2

// Raíz cuadrada
resultado = Math.sqrt(144) // 12

// Valor absoluto
resultado = Math.abs(-500) // 500

// Potencia
resultado = Math.pow(8, 3) // 512

// Mínimo
const numeros = [
    a = 100,
    b = 234,
    c = 249,
    d = 1,
    e = -130
]
resultado = Math.min(...numeros) // -130. Los puntos son para indicar que recorra los diferentes elementos del array.
resultado = Math.min(100, 234, 249, 1, -130) // -130

// Máximo
const numeros2 = [
    a = 100,
    b = 234,
    c = 249,
    d = 1,
    e = -130
]
resultado = Math.max(...numeros2) // 249
resultado = Math.max(100, 234, 249, 1, -130) // 249

// Aleatorio
resultado = Math.random() * 20; // Número aleatorio entre 0 y 1

// Aleatorio dentro de un rango
resultado = Math.floor(Math.random() * 30); // Número aleatorio entre 0 y 30

console.log(resultado);