let edad;
edad = prompt("Introduce tu edad");
 if (edad >= 18){
alert('Puedes entrar, eres mayor de edad.');
} else { alert('Entra bajo tu responsabilidad');}


var e = confirm('¿ Esta seguro que desea salir?');

window.onbeforeunload = function () {
    var msg = "¿Esta seguro que desea salir?";
    return msg;
}


var distancia = prompt('Intoroduce en km tu distancia al local')
var resultado = km(numero);
alert(" La ditancia es de"+resultado+"km");
function km(numero){
    if (numero <= 40){
        return "Envio gratias";
    }
    else {
        return "Costo de envio $800";
    }

}