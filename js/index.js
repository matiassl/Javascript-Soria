const nombre = JSON.parse(localStorage.getItem('usuario')) || '';
// const divusuario = document.getElementById('divusuario');
const login = document.getElementById('login');
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const paso1 = document.getElementById("paso1");
document.getElementById("bienvenido").style.display = "none";
document.getElementById("paso1").style.display = "none";
document.getElementById("paso2").style.display = "none";
document.getElementById("paso3").style.display = "none";
document.getElementById("comprobante").style.display = "none";

if (nombre === '') {

    const user = document.getElementById('user');
    const ingresar = document.getElementById('ingresar');
    ingresar.onclick = () => {
        console.log(user.value)
        localStorage.setItem('usuario', JSON.stringify(user.value))
    }

}
else {
    let bienvenido = document.getElementById("bienvenido")
    bienvenido.innerText = `Hola ${nombre}, bienvenido a nuestra tienda de Comidas!`;

    document.getElementById("login").style.display = "none";
    document.getElementById("bienvenido").style.display = "block";
    document.getElementById("paso1").style.display = "block";

    class producto {
        constructor(id, nombre, precio, img) {
            this.id = id;
            this.nombre = nombre;
            this.precio = precio;
            this.img = img;
        }
    }
    // const productos = [];

    // const producto1 = new producto(1, "Asado", 1500, "asado-min.jpg");
    // productos.push(producto1);

    // const producto2 = new producto(2, "Empanadas", 1000, "empanadas-min.jpg");
    // productos.push(producto2);

    // const producto3 = new producto(3, "Guiso de Lentejas", 800, "guiso-min.jpg");
    // productos.push(producto3);

    // const producto4 = new producto(4, "Hamburguesa Completa", 1200, "hamburguesa-min.jpg");
    // productos.push(producto4);

    // const producto5 = new producto(5, "Lasagna", 700, "lasagna-min.png");
    // productos.push(producto5);

    // const producto6 = new producto(6, "Matambre a la Pizza", 1800, "matambre-min.jpg");
    // productos.push(producto6);

    // const producto7 = new producto(7, "Piza Muzzarella", 1100, "pizza-min.jpg");
    // productos.push(producto7);

    // const producto8 = new producto(8, "Salmon con Salsa", 2500, "salmon-min.jpg");
    // productos.push(producto7);


    const divProductos = document.getElementById('listaproductos');
    const lista = [];
    const consultarProductos = async () => {
        const response = await fetch('../json/productos.json');
        const productos = await response.json();

        // productos.forEach ( p=>{
        //     lista.push(p)
        // })

        return productos;
    }

    consultarProductos().then(productos => {        
        productos.forEach(producto=>{
            divProductos.innerHTML += `
            <div class="col-sm-3">
            <div class="card"  id="div${producto.id}">
                <img src="./img/productos/${producto.img}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">$ ${producto.precio}</p>
                        <button class="btn btn-primary" id="${producto.id}">Agregar al carrito</button>
                    </div>
            </div>
        </div>
            `
        });

        const botonesAgregar = document.querySelectorAll('.btn-primary');
    // console.log(botonesAgregar)



    botonesAgregar.forEach(boton => {
        boton.onclick = () => {
            const prodselecionado = productos.find(prod => prod.id === parseInt(boton.id))
            // console.log(prodselecionado)
            // console.log(boton.id)

            const productoCarrito = { ...prodselecionado, cantidad: 1 }

            const indexCarrito = carrito.findIndex(prod => prod.id === productoCarrito.id)

            Toastify({

                text: "Producto agregado",

                duration: 2000,
                style: {
                    background: "#008C00",
                    color: "white",

                }

            }).showToast();

            if (indexCarrito === -1) {
                carrito.push(productoCarrito)
                botonFinalizar()

            }
            else {
                carrito[indexCarrito].cantidad++
            }
            localStorage.setItem('carrito', JSON.stringify(carrito))
            console.log(carrito)
            botonFinalizar()
        }
    }
    )


    })



    // productos.forEach(producto => {
    //     divProductos.innerHTML += `
    //     <div class="col-sm-3">
    //     <div class="card mb-3"  id="div${producto.id}">
    //         <img src="./img/productos/${producto.img}" class="card-img-top img-fluid" alt="...">
    //             <div class="card-body">
    //                 <h5 class="card-title">${producto.nombre}</h5>
    //                 <p class="card-text">$ ${producto.precio}</p>
    //                 <button class="btn btn-primary" id="${producto.id}">Agregar al carrito</button>
    //             </div>
    //     </div>
    // </div>`
    // });


    
   
        //   BOTON QUITAR

        //     const botoneQuitar = document.querySelectorAll('.quitar');
        //     botoneQuitar.forEach(boton =>{
        //         boton.onclick = () =>{
        //             const prodquitar = productos.find(prod => prod.id === parseInt(boton.id))
        //            console.log(prodquitar)
        
                    
        
        //            const carritoLS = JSON.parse(localStorage.getItem('carrito'))
                        
        
        //            delete carritoLS[prodquitar.id];
                                 
        //             localStorage.setItem('carrito', JSON.stringify(carritoLS))
        //             console.log(carrito)
        //             botonFinalizar()
                    
        //         }
        //     })

    if (carrito.length > 0) {
        botonFinalizar()
    }

    function botonFinalizar() {
        const finalizar = document.getElementById('finalizar');
        finalizar.innerHTML = `<a class="btn btn-success" id="botonFinalizar">Finalizar compra</a>`
        const finalizarCompra = document.querySelector('#botonFinalizar')
        finalizarCompra.onclick = () => {

            document.getElementById("paso1").style.display = "none";
            document.getElementById("paso2").style.display = "block";
            document.getElementById("paso3").style.display = "block";
            document.getElementById("botonFinalizar").style.display = "none";

            let tabla = document.querySelector('.tabla')
            tabla.innerHTML = "";
            carrito.forEach(prod => {
                tabla.innerHTML += `
                <tr>                
                    <td>${prod.nombre}</td>
                    <td>${prod.cantidad}</td>
                    <td>${prod.precio}</td>
                    <td>${prod.precio * prod.cantidad}</td>
                    
              </tr>
               `
            })

            const valores = carrito.map(prod => prod.precio * prod.cantidad)
            const totalfinal = document.querySelector(".totalfinal")
            let totalCompra = 0
            valores.forEach(valor => {
                totalCompra += valor
            })

            totalfinal.innerHTML = `<h3>Total: ${totalCompra} </h3> `


        }
    }
    const pagar = document.getElementById('pagar')
    pagar.onclick = () => {
        document.getElementById("paso1").style.display = "none";
        document.getElementById("paso2").style.display = "none";
        document.getElementById("paso3").style.display = "none";
        document.getElementById("comprobante").style.display = "block";
    }

    const volver = document.getElementById('volver')
    volver.onclick = () => {
        document.getElementById("paso1").style.display = "block";
        document.getElementById("paso2").style.display = "none";
        document.getElementById("paso3").style.display = "none";
        document.getElementById("comprobante").style.display = "none";
        botonFinalizar()
    }


};


