// Variables

let cerveza = 400;
let campari = 600;
let fernet = 800;

// Funciones

function iva(menu) { return menu * 0.21 }
function descuento(menu) { return menu / 2 }
function suma(a, b) { return a + b }
function resta(a, b) { return a - b }

// Prompts

let mensaje = alert('Bienvenido a Bar Coder!')
let nombre = prompt('Ingresa tu nombre');
let edad = prompt('Ingresa tu edad');

// Condicional

if (edad >= 18) {
    alert('Hola' + ' ' + nombre + ' ' + 'ya eres mayor de edad, podes pedir alcohol.')

    let menu = Number(prompt(`Opciones: \n 1)-Cerveza \n 2)-Campari \n 3)-Fernet \n 4)-Para salir`));

    while (menu != 4) {
        switch (menu) {
            case 1:
                alert('La cerveza viene con maní de regalo,');
                let precioFinalIva = suma(cerveza, iva(cerveza));
                alert("El precio final de la cerveza es de $" + ' ' + precioFinalIva);
                break;

            case 2:
                alert('Hoy tenemos 2 x 1 en Campari, ');
                let precioFinalDto = descuento(campari);
                alert('Por happy hour, el campari esta $' + ' ' + precioFinalDto);
                break;

            case 3:
                alert('Estas de mala suerte, estamos sin Stock');
                alert(`Volver al menu`);
                break;

            default:
                alert('Opción Incorrecta');
        }
        menu = Number(prompt('Opciones: \n 1)-Cerveza \n 2)-Campari \n 3)-Fernet \n 4)-Para salir'));
    }


} else {

    alert('Hola' + ' ' + nombre + ' ' + 'Solo pueden pedir los mayores de 18 Saludos!')

}



alert('Te esperamos la próxima')