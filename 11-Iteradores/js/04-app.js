// While (mismos 3 pasos que el for)
let i = 1; // 1º Inicializar el while

while(i < 100) { // 2º  Condición
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} = Fizz Buzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} = Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} = Buzz`);
    }
    i++; //3º Incremento
}


// While con pares y nones
let i = 1;

while(i < 100) {
    if(i % 2 === 0) {
        console.log(`Número par -> ${i}`)
    } else if (i % 3 === 0) {
        console.log(`Número impar -> ${i}`)
    }
    i++;
}