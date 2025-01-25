// Fizz Buzz

// Los que son múltiplos de 3 imprimir fizz
// Los que son múltiplos de 5 imprimir buzz
// Los que son múltiplos de 3 y 5 imprimir fizzbuzz

for(let i = 1; i < 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} = Fizz Buzz`); // Este primero, porque si va último entrarían antes o el 3 o el 5
    } else if (i % 3 === 0) {
        console.log(`${i} = Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} = Buzz`);
    }
}
