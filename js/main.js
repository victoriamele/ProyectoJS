//Variables iniciales
let comprar = true;
let iniciar;
let instrumento;
let modelo;
let agregar;
let precio = 0;
let total = 0;


//Arrays
const respuestas = ["1) Sí, por favor.\n", "2) No, gracias.\n"];
const categorias = ["1) Guitarras.\n", "2) Bajos.\n", "3) Pianos.\n", "4) Mixers. \n"];
const guitarras = ["1) Yamaha CX-40.\n", "2) Yamaha F-370 BL.\n", "3) Yamaha PAC-112J BL.\n"];
const bajos = ["1) Yamaha TRBX174.\n", "2) Yamaha TRBX304.\n", "3) Yamaha TRBX305.\n"];
const pianos = ["1) Yamaha PSR-E473.\n", "2) Yamaha P-45.\n", "3)Yamaha P-125.\n"];
const mixers = ["1) Yamaha MG06.\n", "2) Yamaha MG10XU.\n", "3)Yamaha MG20XU.\n"];


//Se determina si el usario quiere iniciar el proceso de compra
alert("Bienvenido a nuestra tienda!");
    iniciar = prompt("¿Desea realizar una compra?" + "\n" + respuestas.join(''));
    while ((iniciar != "1") && (iniciar !="2")) {
        alert("Ingrese un comando válido");
        iniciar = prompt("¿Desea realizar una compra?" + "\n" + respuestas.join(''));
    }

    switch (iniciar) {
        case "1":
            break;
        case "2":
            alert("Refresque la página en cualquier momento si cambia de opinión!")
            comprar = false;
            break;
    }
    

//Ciclo para elegir los productos
while (comprar) {
    instrumento = prompt("Elija el número de la categoria que desee." + "\n" + categorias.join('')).toLowerCase();
    while ((instrumento != "1") && (instrumento != "2") && (instrumento != "3") && (instrumento != "4")) {
        alert("Esa categoria no se encuentra en nuestra lista");
        instrumento = prompt("Elija el número de la categoria que desee." + "\n" + categorias.join('')).toLowerCase();
    }


    // Navegar dentro de las categorias
    switch (instrumento) {
        case "1":
            modelo = prompt("Eliga el número del modelo de guitarra que desee" + "\n" + guitarras.join(''));
            while ((modelo != "1") && (modelo != "2") && (modelo != "3")) {
                alert("Ese modelo no se encuentra en nuestra lista");
                modelo = prompt("Elija el número del modelo de guitarra que desee" + "\n" + guitarras.join('')).toLowerCase();
            }
            //Decidir si se agrega el producto al carrito de compras
            switch (modelo) {
                case "1":
                    alert("Ha seleccionado la guitarra Yamaha CX-40 ($50,970)");
                        agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        while ((agregar != "1") && (agregar !="2")) {
                            alert("Ingrese un comando válido");
                            agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        }
                        switch (agregar) {
                            case "1":
                                alert("La guitarra Yamaha CX-40 se encuentra ahora en su carrito");
                                Sumar(50970.00);
                                break;
                            case "2":
                                alert("No se ha agregado el producto a su carrito");
                                break;
                        }
                        break;

                case "2":
                    alert("Ha seleccionado la guitarra F-370 BL ($69,174)");
                    agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        while ((agregar != "1") && (agregar !="2")) {
                            alert("Ingrese un comando válido");
                            agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        }
                        switch (agregar) {
                            case "1":
                                alert("La guitarra Yamaha F-370 BL se encuentra ahora en su carrito");
                                Sumar(69174.00);
                                break;
                            case "2":
                                alert("No se ha agregado el producto a su carrito");
                                break;
                        }
                        break;

                case "3":
                    alert("Ha seleccionado la guitarra PAC-112J BL ($82,744)");
                    agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        while ((agregar != "1") && (agregar !="2")) {
                            alert("Ingrese un comando válido");
                            agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        }
                        switch (agregar) {
                            case "1":
                                alert("La guitarra Yamaha PAC-112J BL se encuentra ahora en su carrito");
                                Sumar(82744.00);
                                break;
                            case "2":
                                alert("No se ha agregado el producto a su carrito");
                                break;
                        }
                        break;
            }
            break;

        case "2":
            modelo = prompt("Eliga el número del modelo de bajo que desee" + "\n" + bajos.join(''));
            while ((modelo != "1") && (modelo != "2") && (modelo != "3")) {
                alert("Ese modelo no se encuentra en nuestra lista");
                modelo = prompt("Elija el número del modelo de bajo que desee" + "\n" + bajos.join('')).toLowerCase();
            }
            //Decidir si se agrega el producto al carrito de compras
            switch (modelo) {
                case "1":
                    alert("Ha seleccionado el bajo Yamaha TRBX174 ($80,962)");
                    agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        while ((agregar != "1") && (agregar !="2")) {
                            alert("Ingrese un comando válido");
                            agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        }
                        switch (agregar) {
                            case "1":
                                alert("El bajo Yamaha TRBX174 se encuentra ahora en su carrito");
                                Sumar(80962.00);
                                break;
                            case "2":
                                alert("No se ha agregado el producto a su carrito");
                                break;
                        }
                        break;

                case "2":
                    alert("Ha seleccionado el bajo Yamaha TRBX304 ($136,974)");
                    agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        while ((agregar != "1") && (agregar !="2")) {
                            alert("Ingrese un comando válido");
                            agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        }
                        switch (agregar) {
                            case "1":
                                alert("El bajo Yamaha TRBX304 se encuentra ahora en su carrito");
                                Sumar(136974.00);
                                break;
                            case "2":
                                alert("No se ha agregado el producto a su carrito");
                                break;
                        }
                        break;

                case "3":
                    alert("Ha seleccionado el bajo Yamaha TRBX305 ($160,651)");
                    agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        while ((agregar != "1") && (agregar !="2")) {
                            alert("Ingrese un comando válido");
                            agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        }
                        switch (agregar) {
                            case "1":
                                alert("El bajo Yamaha TRBX305 se encuentra ahora en su carrito");
                                Sumar(160651.00);
                                break;
                            case "2":
                                alert("No se ha agregado el producto a su carrito");
                                break;
                        }
                        break;
            }
            break;

        case "3":
            modelo = prompt("Eliga el número del modelo de piano que desee" + "\n" + pianos.join(''));
            while ((modelo != "1") && (modelo != "2") && (modelo != "3")) {
                alert("Ese modelo no se encuentra en nuestra lista");
                modelo = prompt("Elija el número del modelo de piano que desee" + "\n" + pianos.join('')).toLowerCase();
            }
            //Decidir si se agrega el producto al carrito de compras
            switch (modelo) {
                case "1":
                    alert("Ha seleccionado el piano Yamaha PSR-E473 ($104,181)");
                    agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        while ((agregar != "1") && (agregar !="2")) {
                            alert("Ingrese un comando válido");
                            agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        }
                        switch (agregar) {
                            case "1":
                                alert("El piano Yamaha PSR-E473 se encuentra ahora en su carrito");
                                Sumar(104181.00);
                                break;
                            case "2":
                                alert("No se ha agregado el producto a su carrito");
                                break;
                        }
                        break;

                case "2":
                    alert("Ha seleccionado el piano Yamaha P-45 ($148,906)");
                    agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        while ((agregar != "1") && (agregar !="2")) {
                            alert("Ingrese un comando válido");
                            agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        }
                        switch (agregar) {
                            case "1":
                                alert("El piano Yamaha P-45 se encuentra ahora en su carrito");
                                Sumar(148906.00);
                                break;
                            case "2":
                                alert("No se ha agregado el producto a su carrito");
                                break;
                        }
                        break;

                case "3":
                    alert("Ha seleccionado el piano Yamaha P-125 ($235,724)");
                    agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        while ((agregar != "1") && (agregar !="2")) {
                            alert("Ingrese un comando válido");
                            agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        }
                        switch (agregar) {
                            case "1":
                                alert("El piano Yamaha P-125 se encuentra ahora en su carrito");
                                Sumar(235724.00);
                                break;
                            case "2":
                                alert("No se ha agregado el producto a su carrito");
                                break;
                        }
                        break;
            }
            break;

        case "4":
            modelo = prompt("Eliga el número del modelo de mixer que desee" + "\n" + mixers.join(''));
            while ((modelo != "1") && (modelo != "2") && (modelo != "3")) {
                alert("Ese modelo no se encuentra en nuestra lista");
                modelo = prompt("Elija el número del modelo de mixer que desee" + "\n" + mixers.join('')).toLowerCase();
            }
            //Decidir si se agrega el producto al carrito de compras
            switch (modelo) {
                case "1":
                    alert("Ha seleccionado el mixer Yamaha MG06 ($29,667)");
                    agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        while ((agregar != "1") && (agregar !="2")) {
                            alert("Ingrese un comando válido");
                            agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        }
                        switch (agregar) {
                            case "1":
                                alert("El mixer Yamaha MG06 se encuentra ahora en su carrito");
                                Sumar(29667.00);
                                break;
                            case "2":
                                alert("No se ha agregado el producto a su carrito");
                                break;
                        }
                        break;

                case "2":
                    alert("Ha seleccionado el mixer Yamaha MG10XU ($59,335)");
                    agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        while ((agregar != "1") && (agregar !="2")) {
                            alert("Ingrese un comando válido");
                            agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        }
                        switch (agregar) {
                            case "1":
                                alert("El mixer Yamaha MG10XU se encuentra ahora en su carrito");
                                Sumar(59335.00);
                                break;
                            case "2":
                                alert("No se ha agregado el producto a su carrito");
                                break;
                        }
                        break;

                case "3":
                    alert("Ha seleccionado el mixer Yamaha MG20XU ($160,651)");
                    agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        while ((agregar != "1") && (agregar !="2")) {
                            alert("Ingrese un comando válido");
                            agregar = prompt("¿Quiere agregar el producto al carrito?" + "\n" + respuestas.join(''));
                        }
                        switch (agregar) {
                            case "1":
                                alert("El mixer Yamaha MG20XU se encuentra ahora en su carrito");
                                Sumar(160651.00);
                                break;
                            case "2":
                                alert("No se ha agregado el producto a su carrito");
                                break;
                        }
                        break;
            }
            break;
    }

    let seguir = prompt("¿Quiere agregar productos?" + "\n" + respuestas.join(''));
        while ((seguir != "1") && (seguir !="2")) {
            alert("Ingrese un comando válido");
            seguir = prompt("¿Quiere agregar productos?" + "\n" + respuestas.join(''));
        }

        switch (seguir) {
            case "1":
                break;
            case "2":
                comprar = false;
                break;
        }
        break;
}


//Se suma el total de la compra
function Sumar(precio) {
    total += precio;
    precioTotal = total.toFixed(2);
    return precioTotal;
}

if (total !== 0){
    alert(`El precio a abonar corresponde a: $${total} pesos argentinos`);
}