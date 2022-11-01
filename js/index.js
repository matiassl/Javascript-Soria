function formaPago() {
    let formaPago = parseInt(prompt('Ingrese forma de pago 1.Debito 2.Credito 3.Tranferencia Bancaria 4.Mercado Pago'));
    if (formaPago === 1) {
        let tarjeta = parseInt(prompt("Ingrese numero de tarjeta"));
        alert("Pago realizado con exito");
    }
    else if (formaPago === 2) {
        let cuotas
    }
}


function productos(total) {
    let categoria = parseInt(prompt("Ingrese la categoria deseada: 1.Smartv 2.Audio 3.Playstation 4.Camaras 5.Celulares"));
    let opcion;
    if (categoria === 1) {
        opcion = parseInt(prompt("Smartvs Disponibles: 1.Phillips 43 pulgadas $79.999 2.Samsung 50 pulgadas $99.999 3.Philco 32 $69.999"));
        if (opcion === 1) {
            //   carrito = carrito + 'Phillips 43 pulgadas $79.999 ';
            total = total + 79999;
        }
        else if (opcion === 2) {
           // carrito = carrito + 'Samsung 50 pulgadas $99.999 ';
            total = total + 99999
        }
        else if (opcion === 3) {
            // carrito = carrito + 'Philco 32 $69.999 ';
            total = total + 69999;
        }
    }
    else if (categoria === 2) {
        opcion = parseInt(prompt("Productos Disponibles: 1.Auriculares Sony $5999 2.Auriculares Sony Inalambricos $8999 3.Parlante Inalambrico Sony $129.999"));
        if (opcion === 1) {
            //  carrito = carrito + 'Auriculares Sony $5999 ';
            total = total + 5999;
        }
        else if (opcion === 2) {
            // carrito = carrito + 'Auriculares Sony Inalambricos $8999 ';
            total = total + 89999;
        }
        else if (opccion === 3) {
            // carrito = carrito + 'Parlante Inalambrico Sony $129.999 ';
            total = total + 129999;
        }
    }
    else if (categoria === 3) {
        opcion = parseInt(prompt("Playstations disponibles: 1.Playstation 5 $329000 2.Playstation 4 $150000"));
        if (opcion === 1) {
           // carrito = carrito + 'Playstation 5 $329000 ';
            total = total + 329000;
        }
        else if (opcion === 2) {
            //carrito = carrito + 'Playstation 4 $150000 ';
            total = total + 150000;
        }
    }

    return total;
}




let comprar = true;
let carrito;
let precioTotal = 0;
let nombre = prompt('Ingrese su nombre');
let preguntar;
alert(`Hola ${nombre}, Bienvenido a nuestra tienda online`);


while (comprar === true) {
    precioTotal = productos(precioTotal);
    alert('Total ' + precioTotal);

    preguntar = parseInt(prompt("Desea seguir comprando? 1.Si 2.No"));
    if (preguntar === 2) {
        comprar = false;
    }
}
