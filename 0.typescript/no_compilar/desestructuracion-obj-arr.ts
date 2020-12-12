
(() => {
    
    const avenger = {
        nombre: "Steve",
        clave: "Capitán América",
        poder: "Droga"
    }

    const extraerPropiedades = (objeto: any)=> {
        const {nombre , poder} = objeto;
        return `${nombre} - ${poder}`
    }

    const extraerPropiedades2 = ( {nombre , poder}: any )=> {
        
        return `${nombre} - ${poder} 2`
    }
    
    const execute = () =>{
        console.log(extraerPropiedades(avenger));
        console.log(extraerPropiedades2(avenger));
    }

    execute();    

})();