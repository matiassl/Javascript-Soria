function formaPago(total) {
    let formaPago = parseInt(prompt('Ingrese forma de pago \n 1.Debito \n 2.Credito'));
    if (formaPago === 1) {
        let tarjeta = parseInt(prompt("Ingrese numero de tarjeta"));
        alert("Pago de " + total +" realizado con exito");
    }
    else if (formaPago === 2) {
        let cuotas = parseInt(prompt('Ingrese el numero de cuotas \n 1 Cuota de' + total + ' \n 3 cuotas de ' + (total/3)*1.20 +   ' \n 6 cuotas de ' + (total/6)*1.40   ));
        let tarjeta = parseInt(prompt("Ingrese numero de tarjeta"));
        if(cuotas === 1){
            alert("Pago de " + total +" realizado con exito");
        }
        else if(cuotas ===3){
            alert("Pago de 3 cuotas de " + (total/3)*1.20 +" realizado con exito");
        }

        else if(cuotas ===6){
            alert("Pago de 6 cuotas de " + (total/6)*1.40 +" realizado con exito");
        }
    }
    return true;
}


function productos(total) {
    let categoria = parseInt(prompt("Ingrese la categoria deseada: \n 1.Smartv \n 2.Audio \n 3.Playstation"));
    let opcion;
    if (categoria === 1) {
        opcion = parseInt(prompt("Smartvs Disponibles: \n 1.Phillips 43 pulgadas $79.999 \n 2.Samsung 50 pulgadas $99.999 \n 3.Philco 32 $69.999"));
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
        opcion = parseInt(prompt("Productos Disponibles: \n 1.Auriculares Sony $5999 \n 2.Auriculares Sony Inalambricos $8999 \n 3.Parlante Inalambrico Sony $129.999"));
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
        opcion = parseInt(prompt("Playstations disponibles: \n 1.Playstation 5 $329000 \n 2.Playstation 4 $150000"));
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

if(formaPago(precioTotal)){
    alert('Gracia por su compra, vuelvas prontos')
}
