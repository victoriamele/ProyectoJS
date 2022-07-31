let nombre = prompt("Ingrese su nombre");
let saludo = "Bienvenido/a" + " " + nombre + "!";

if (nombre == "") {
    alert("Bienvenido/a!");
} else {
    alert(saludo);
}

let comprar = true;
let instrumento;
let modelo;
let precio = 0;
let total = 0;



//Arrays
const categorias = ["1) Guitarras.\n", "2) Pianos.\n"];
const guitarras = ["1) Yamaha CX-40.\n", "2) Yamaha F-370 BL.\n", "3) Yamaha PAC-112J BL.\n"];
const pianos = ["1) Yamaha PSR-E473.\n", "2) Yamaha P-45.\n", "3)Yamaha P-125.\n"];




//Ciclo para elegir los productos
while (comprar) {
    instrumento = prompt("Elija el numero de la categoria que desee." + "\n" + categorias.join('')).toLowerCase();
    while ((instrumento != "1") && (instrumento != "2")) {
        alert("Esa categoria no se encuentra en nuestra lista");
        instrumento = prompt("Elija el numero de la categoria que desee." + "\n" + categorias.join('')).toLowerCase();
    }


    // Navegar dentro de las categorias
    switch (instrumento) {
        case "1":
            modelo = prompt("Eliga el numero del modelo de guitarra que desee" + "\n" + guitarras.join(''));
            while ((modelo != "1") && (modelo != "2") && (modelo != "3")) {
                alert("Ese modelo no se encuentra en nuestra lista");
                modelo = prompt("Elija el numero del modelo de guitarra que desee" + "\n" + guitarras.join('')).toLowerCase();
            }
            switch (modelo) {
                case "1":
                    alert("Ha seleccionado la guitarra Yamaha CX-40 ($50,970)");
                    Sumar(50970.00);
                    break;
                case "2":
                    alert("Ha seleccionado la guitarra F-370 BL ($69,174)");
                    Sumar(69174.00);
                    break;
                case "3":
                    alert("Ha seleccionado la guitarra PAC-112J BL ($82,744)");
                    Sumar(82744.00);
                    break;
            }
            break;

        case "2":
            modelo = prompt("Eliga el numero del modelo de piano que desee" + "\n" + pianos.join(''));
            while ((modelo != "1") && (modelo != "2") && (modelo != "3")) {
                alert("Ese modelo no se encuentra en nuestra lista");
                modelo = prompt("Elija el numero del modelo de piano que desee" + "\n" + pianos.join('')).toLowerCase();
            }
            switch (modelo) {
                case "1":
                    alert("Ha seleccionado el piano Yamaha PSR-E473 ($104,181)");
                    Sumar(104181.00);
                    break;
                case "2":
                    alert("Ha seleccionado el piano Yamaha P-45 ($148,906)");
                    Sumar(148906.00);
                    break;
                case "3":
                    alert("Ha seleccionado el piano Yamaha Yamaha P-125 ($235,724)");
                    Sumar(235724.00);
                    break;
            }
            break;
    }

    let seguir = prompt("¿Quiere agregar productos? Si/No").toLowerCase();
    if (seguir == "no") {
        comprar = false;
        break;
    }
}

//Se suma el total de la compra
function Sumar(precio) {
    total += precio;
    precioTotal = total.toFixed(2);
    return precioTotal;
}

alert(`El precio a abonar corresponde a: $${total} pesos argentinos`);
