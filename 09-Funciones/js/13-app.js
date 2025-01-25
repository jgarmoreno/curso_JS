// Arrow function en el reproductor (Objeto con funciones, métodos de propiedades)
const reproductorMusica = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con id = ${id}.`),
    pausar: () => console.log(`Pausando...`),
    crearPlaylist: nombre => console.log(`Se ha creado la playlist '${nombre}'.`),
    reproducirPlaylist: (id, nombre) => {
        console.log(`Reproduciendo playlist '${nombre}' con id = ${id}.`);
    },
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}
reproductorMusica.nuevaCancion = 'Enter Sandman';
reproductorMusica.obtenerCancion;

reproductorMusica.reproducir(30);
reproductorMusica.pausar(29);
reproductorMusica.crearPlaylist('Mi playlist');
reproductorMusica.reproducirPlaylist(30,'Mi playlist');

// Agregarle un método a la propiedad
reproductorMusica.borrar = function(id) {
    console.log(`Borrando la canción con id ${id}.`);
}
reproductorMusica.borrar(2);