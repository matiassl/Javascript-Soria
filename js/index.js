const nombre = JSON.parse(localStorage.getItem('usuario')) || '';
const divusuario = document.getElementById('divusuario');
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

document.getElementById("paso1").style.display = "none";
document.getElementById("paso2").style.display = "none";
document.getElementById("paso3").style.display = "none";
document.getElementById("comprobante").style.display = "none";

if(nombre === ''){
    divusuario.innerHTML = ` <input type="text" name="user" id="user" placeholder="Ingrese su nombre">
    <a class="btn btn-danger" id="ingresar" href="">Ingresar</a>
    `;
    const user = document.getElementById('user');
    const ingresar = document.getElementById('ingresar');
    ingresar.onclick = () => {
        console.log(user.value)
        localStorage.setItem('usuario', JSON.stringify(user.value))
    }

}
else{
    divusuario.innerHTML = `Hola ${nombre}, Bienvenido a nuestra tienda de Comida`;
    document.getElementById("paso1").style.display = "block";
    class producto {
        constructor(id, nombre, precio) {
            this.id = id;
            this.nombre = nombre;
            this.precio = precio;
        }
    }
    const productos = [];
    
    const producto1 = new producto(1, "Hamburguesa Completa", 800);
    productos.push(producto1);
    
    const producto2 = new producto(2, "Piza Muzzarella", 1200);
    productos.push(producto2);
    
    const producto3 = new producto(3, "Empanadas", 1000);
    productos.push(producto3);
    
    const producto4 = new producto(4, "Ñoquis", 600);
    productos.push(producto4);
    
    
    const divProductos = document.getElementById('productos');
    
    
    productos.forEach(prod => {
        divProductos.innerHTML += `
        <div class="col-sm-4">
            <div class="card" style="width: 100%;" id="div${prod.id}">
                
                    <div class="card-body">
                        <h5 class="card-title">${prod.nombre}</h5>
                        <p class="card-text">${prod.precio}</p>
                        <button class="btn btn-primary" id="${prod.id}">Agregar al carrito</button>
                    </div>
            </div>
        </div>`
    });
    
    
    const botonesAgregar = document.querySelectorAll('.btn-primary');
    // console.log(botonesAgregar)
    
    botonesAgregar.forEach(boton=>{
        boton.onclick = () => {
            const prodselecionado = productos.find(prod=>prod.id === parseInt(boton.id))
            // console.log(prodselecionado)
            // console.log(boton.id)
    
            const productoCarrito = {...prodselecionado, cantidad:1}
    
            const indexCarrito = carrito.findIndex(prod=> prod.id === productoCarrito.id)

           
    
            if(indexCarrito === -1){
                carrito.push(productoCarrito)
                botonFinalizar()
                
            }
            else{
                carrito[indexCarrito].cantidad ++
            }
            localStorage.setItem('carrito', JSON.stringify(carrito))
            console.log(carrito)
            botonFinalizar()
        }
    }
    )

    if(carrito.length>0){
        botonFinalizar()
    }

    function botonFinalizar () {
    const finalizar = document.getElementById('finalizar');
    finalizar.innerHTML = `<a class="btn btn-success" id="botonFinalizar">Finalizar compra</a>`
    const finalizarCompra = document.querySelector('#botonFinalizar')
    finalizarCompra.onclick = () => {
        
        document.getElementById("paso1").style.display = "none";
        document.getElementById("paso2").style.display = "block";
        document.getElementById("paso3").style.display = "block";
            document.getElementById("botonFinalizar").style.display = "none";
          
            const tabla =document.querySelector('.tabla')
            carrito.forEach(prod => {
                tabla.innerHTML += `
                <tr>
                
                <td>${prod.nombre}</td>
                <td>${prod.cantidad}</td>
                <td>${prod.precio}</td>
                <td>${prod.precio*prod.cantidad}</td>
              </tr>
               `
            })

        const valores = carrito.map(prod => prod.precio * prod.cantidad) 
        const totalfinal = document.querySelector(".totalfinal")
        let totalCompra =0
        valores.forEach(valor =>{
            totalCompra += valor
        })

        totalfinal.innerHTML += `<h3>Total: ${totalCompra} </h3> `
       
            
        
    }
 }
   const pagar = document.getElementById('pagar')
   pagar.onclick = () =>{
    document.getElementById("paso1").style.display = "none";
        document.getElementById("paso2").style.display = "none";
        document.getElementById("paso3").style.display = "none";
        document.getElementById("comprobante").style.display = "block";
   }
  
   const volver = document.getElementById('volver')
   volver.onclick = () =>{
    document.getElementById("paso1").style.display = "block";
        document.getElementById("paso2").style.display = "none";
        document.getElementById("paso3").style.display = "none";
        document.getElementById("comprobante").style.display = "none";
        botonFinalizar()
   }
   

}

    
  









// function formaPago(total) {
//     let formaPago = parseInt(prompt('Ingrese forma de pago \n 1.Debito \n 2.Credito'));
//     if (formaPago === 1) {
//         let tarjeta = parseInt(prompt("Ingrese numero de tarjeta"));
//         alert("Pago de " + total + " realizado con exito");
//     }
//     else if (formaPago === 2) {
//         let cuotas = parseInt(prompt('Ingrese el numero de cuotas \n 1 Cuota de' + total + ' \n 3 cuotas de ' + (total / 3) * 1.20 + ' \n 6 cuotas de ' + (total / 6) * 1.40));
//         let tarjeta = parseInt(prompt("Ingrese numero de tarjeta"));
//         if (cuotas === 1) {
//             alert("Pago de " + total + " realizado con exito");
//         }
//         else if (cuotas === 3) {
//             alert("Pago de 3 cuotas de " + (total / 3) * 1.20 + " realizado con exito");
//         }

//         else if (cuotas === 6) {
//             alert("Pago de 6 cuotas de " + (total / 6) * 1.40 + " realizado con exito");
//         }
//     }
//     return true;
// }


// function mispedidos(total) {
//     let pedido;
//     let menu = `Elija una opcion de nuestro menu del dia: `;
//     for (item of productos) {
//         menu += `\n  ${item.id}. ${item.nombre} $ ${item.precio} `;
//     }
   
//     let opcion = parseInt(prompt(`${menu}`));


//     while (opcion < 1 || opcion > productos.length || isNaN(opcion)) {
//         opcion = parseInt(prompt(`${menu}`));
//     }
//     pedido = productos.find(e => e.id === opcion);
//     if (pedido !== undefined) {
//         carrito.push(pedido);
//     }

//     console.log(carrito);
// }

// function mostrarCompra() {
//     let lista ="";
//     let precio = 0;

//     for (item of carrito) {
//         lista += `${item.nombre} - `;
        
//         precio = item.precio +precio;
  
//     }
//     alert(`Productos deseados: ${lista} \n Precio total ${precio}`)

//     return precio
// }


// let comprar = true;
// let carrito = [];
// let precioTotal = 0;
// let nombre = prompt('Ingrese su nombre');
// let preguntar;
// alert(`Hola ${nombre}, Bienvenido a nuestra tienda de Comida`);


// while (comprar === true) {
//     mispedidos();

//     precioTotal = mostrarCompra(carrito);

//     preguntar = parseInt(prompt("Desea seguir comprando? 1.Si 2.No"));
//     if (preguntar === 2) {
//         comprar = false;
//     }


// }

// if (formaPago(precioTotal)) {
//     alert('Gracia por su compra, vuelvas prontos')
// }
