
(function() {
    
    //Funcion 
    let miFuncion = function(a : string ){
        return a;
    }
    
    //Funcion flecha
    const miFuncionFlecha = (a: string) => {
        return a.toUpperCase();
    }
    
    //Funcion flecha corta
    const miFuncionFlechaAbreviada = (a: string) =>  a.toLocaleLowerCase(); // Si la funcion es corta se puede escribir en una sola linea

    const sumarN = function(a: number, b: number){
        return a + b
    }

    const sumarNAbreviada = (a: number, b: number ) => a + b

    const hulk = {
        nombre: "Hulk",
        smash(){
            setTimeout(() =>{
                console.log(`${this.nombre} smash!!`)
            }, 1000);
            
        }
    }
    
    hulk.smash();


    const start = () => {
        console.log(`Funcion ${miFuncion("Hola")}`);
        console.log(`Funcion Flecha ${miFuncionFlecha("Como")}`);
        console.log(`Funcion Flecha Abreviada ${miFuncionFlechaAbreviada("NO")}`);
        console.log(`Funcion Sumar ${sumarN(1,2)}`);
        console.log(`Funcion Sumar Abreviada ${sumarNAbreviada(5,6)}`);

    }    

    start()

})();