class producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}
let productos = [];

let producto1 = new producto(1, "Hamburguesa Completa", 800);
productos.push(producto1);

let producto2 = new producto(2, "Piza Muzzarella", 1200);
productos.push(producto2);

let producto3 = new producto(3, "Empanadas", 1000);
productos.push(producto3);

let producto4 = new producto(4, "Ñoquis", 600);
productos.push(producto4);



function formaPago(total) {
    let formaPago = parseInt(prompt('Ingrese forma de pago \n 1.Debito \n 2.Credito'));
    if (formaPago === 1) {
        let tarjeta = parseInt(prompt("Ingrese numero de tarjeta"));
        alert("Pago de " + total + " realizado con exito");
    }
    else if (formaPago === 2) {
        let cuotas = parseInt(prompt('Ingrese el numero de cuotas \n 1 Cuota de' + total + ' \n 3 cuotas de ' + (total / 3) * 1.20 + ' \n 6 cuotas de ' + (total / 6) * 1.40));
        let tarjeta = parseInt(prompt("Ingrese numero de tarjeta"));
        if (cuotas === 1) {
            alert("Pago de " + total + " realizado con exito");
        }
        else if (cuotas === 3) {
            alert("Pago de 3 cuotas de " + (total / 3) * 1.20 + " realizado con exito");
        }

        else if (cuotas === 6) {
            alert("Pago de 6 cuotas de " + (total / 6) * 1.40 + " realizado con exito");
        }
    }
    return true;
}


function mispedidos(total) {
    let pedido;
    let menu = `Elija una opcion de nuestro menu del dia: `;
    for (item of productos) {
        menu += `\n  ${item.id}. ${item.nombre} $ ${item.precio} `;
    }
   
    let opcion = parseInt(prompt(`${menu}`));


    while (opcion < 1 || opcion > productos.length || isNaN(opcion)) {
        opcion = parseInt(prompt(`${menu}`));
    }
    pedido = productos.find(e => e.id === opcion);
    if (pedido !== undefined) {
        carrito.push(pedido);
    }

    console.log(carrito);
}

function mostrarCompra() {
    let lista ="";
    let precio = 0;

    for (item of carrito) {
        lista += `${item.nombre} - `;
        
        precio = item.precio +precio;
  
    }
    alert(`Productos deseados: ${lista} \n Precio total ${precio}`)

    return precio
}


let comprar = true;
let carrito = [];
let precioTotal = 0;
let nombre = prompt('Ingrese su nombre');
let preguntar;
alert(`Hola ${nombre}, Bienvenido a nuestra tienda de Comida`);


while (comprar === true) {
    mispedidos();

    precioTotal = mostrarCompra(carrito);

    preguntar = parseInt(prompt("Desea seguir comprando? 1.Si 2.No"));
    if (preguntar === 2) {
        comprar = false;
    }


}

if (formaPago(precioTotal)) {
    alert('Gracia por su compra, vuelvas prontos')
}
