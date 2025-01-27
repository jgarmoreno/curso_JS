// Eventos de SCROLL (scrollY -> vertical, scrollX -> horizontal)
window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY;
    console.log(scrollPX); // Retorna los PX en vertical
});

// Hacer "animación" en una sección en concreto al hacer scroll
window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); // Te da la distancia en PX a la que se encuentra el elemento seleccionado, en bottom o top
    // console.log(ubicacion);

    if(ubicacion.top < 768) {
        console.log('El elemento se ve');
    } else {
        console.log('Aún no se ve');
    }
});