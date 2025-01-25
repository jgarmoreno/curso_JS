// Métodos de propiedad
const reproductorMusica = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con id = ${id}.`);
    },
    pausar: function(id) {
        console.log(`Pausando la canción con id = ${id}.`);
    },
    crearPlaylist: function(nombre) {
        console.log(`Se ha creado la playlist '${nombre}'.`);
    },
    reproducirPlaylist: function(id, nombre) {
        console.log(`Reproduciendo playlist '${nombre}' con id = ${id}.`);
    }
}
reproductorMusica.reproducir(30);
reproductorMusica.pausar(29);

reproductorMusica.crearPlaylist('Mi playlist');
reproductorMusica.reproducirPlaylist(30,'Mi playlist');

// Agregarle un método a la propiedad
reproductorMusica.borrar = function(id) {
    console.log(`Borrando la canción con id ${id}.`);
}
reproductorMusica.borrar(2);