const copiarArchivo = async (nombreArchivo) => {
  const archivo = await buscarArchivo(nombreArchivo);
  const contenidoArchivo = await leerArchivo(archivo);
  const archivoCopiado = await copyArchivo("NuevoNombre", contenidoArchivo);
};


//----------promesas------------------

function dividir(dividiendo,divisor){
    return new Promise ((resolve, reject) =>{
        
    })
}