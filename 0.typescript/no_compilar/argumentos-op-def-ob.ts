
(function() {

    function activar(quien : string,  // Argumento Obligatorio
                     momento?: string,  // Argumento Opcional
                     objeto: string = "batiseñal" //Argumento Defecto
                     ){
        if(momento){
            console.log(` ${quien} activó la ${objeto} en la ${momento}`);
        }else{
            console.log(` ${quien} activó la ${objeto}`);
        }
        
    };
    

    activar("Gordon","tarde");

})();