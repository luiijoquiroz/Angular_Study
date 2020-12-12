"use strict";
(function () {
    var avenger = {
        nombre: "Steve",
        clave: "Capitán América",
        poder: "Droga"
    };
    var extraerPropiedades = function (objeto) {
        var nombre = objeto.nombre, poder = objeto.poder;
        return nombre + " - " + poder;
    };
    var extraerPropiedades2 = function (_a) {
        var nombre = _a.nombre, poder = _a.poder;
        return nombre + " - " + poder + " 2";
    };
    var execute = function () {
        console.log(extraerPropiedades(avenger));
        console.log(extraerPropiedades2(avenger));
    };
    execute();
})();
