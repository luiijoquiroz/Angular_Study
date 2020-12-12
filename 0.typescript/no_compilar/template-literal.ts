
(function() {
    function saludar(persona: any){
        const { nombre, apellido, edad  } = persona
        const salida = `Hola  ${nombre}, ${apellido} \n Edad:${getEdad(edad)}`
        console.table(salida);
        preguntarEstado(1);
    }
    
    function getEdad(edad: number){
        return edad
    }

    function preguntarEstado(num: number){
        const preguntas : any = {
            1 : "¿Como estas?",
            2 : "¿Como te va?",
            3 : "¿Que tal todo?"
        };
        
        console.log(preguntas[num])
    }

    const persona = {
        nombre : 'Luis',
        apellido: 'Quiroz',
        edad: 30
    };
    
    saludar(persona);    
})();