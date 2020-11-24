
(function() {
    function saludar(nombre: string){
        console.table('Hola ' + nombre);
    }
    
    const wolverine = {
        nombre : 'Luis',
        apellido: 'Quiroz'
    };
    
    saludar(wolverine.nombre);    
})();