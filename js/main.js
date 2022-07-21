let totalCarrito = 1
let producto = 'producto';
const carrito = [];
/* const listaProductos = [
        {producto: "Zapatillas Nike", price: 42000},
        {producto: "Remera Nike", price: 8000},
        {producto: "Mochila", price: 6500},
]
 */
/* const productos = listaProductos.map ((n) => n.producto)
console.log(productos)

const actualizado = listaProductos.map ((n)=> {
        return {
                producto: n.producto,
                price: n.price *1.21
        }
        
        })
console.log(actualizado) */

function agregarAlCarrito(producto, stock) {
  console.log('agregaste al carrito: ' + producto);
        
  const tenemosStock = stockDisponible(stock);

}

function agregarAlCarrito(producto){
  carrito.push(producto);
  console.log(carrito);
}

agregarAlCarrito({id: 1200, name: "Zapatillas Nike", price:42000})
agregarAlCarrito({id: 1400, name: "Remera Nike", price:8000})
agregarAlCarrito({id: 2200, name: "Mochila Nike", price:6500})

function quitarDelCarrito(idProducto){
  const index = carrito.findIndex((producto) => producto.id === idProducto);
  console.log(index);
  if(index !== -1) {
    carrito.splice(index, 1);
  }
  console.log(carrito);
}

quitarDelCarrito(2200);
quitarDelCarrito(1200);


class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}
      
let producto1 = new Producto("Zapatillas Nike", 42000, 40);
let producto2 = new Producto("Remera Nike", 8000, 50);
let producto3 = new Producto("Mochila Nike", 6500, 20);
let producto4 = new Producto("Buzo Nike", 14000, 14);
      
const catalogo = [producto1, producto2, producto3, producto4];

const numEmpleado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function loginEmpleado() {
  let numEntrada = parseInt(
    prompt("Bienvenido, ingrese su numero de empleado: ")
  );
      
  let existe = numEmpleado.find((empleado) => {
    return empleado === numEntrada;
  });
      
  if (existe) {
    alert("Bienvenido empleado Nº " + existe);
  } 
  else {
    alert("Empleado no registrado");
  }
    return existe;
}

function operacion() {
  let opcion = parseInt(
    prompt(
      "Que desea realizar? :\n1)Agregar un nuevo producto\n2)Ver lista de productos\n3)Continuar a la pagina"
    )
  );
  while (opcion !== 3) {
    switch (opcion) {
      case 1:
        agregarUnProducto();
        break;
      case 2:
        listaProductos();
        break;
    }
    opcion = parseInt(
    prompt(
      "Que desea realizar? :\n1)Agregar un nuevo producto\n2)Ver lista de productos\n3)Continuar a la pagina"
    )
  );}
}

function agregarUnProducto() {
  let nombre = prompt("Nombre del producto: ");
  let precio = parseInt(prompt("Precio del producto:"));
  let stock = parseInt(prompt(" Cantidad en stock: "));
  let nuevoProducto = new Producto(nombre, precio, stock);
      
  catalogo.push(nuevoProducto);
}

function listaProductos() {
  catalogo.forEach((producto) => {
    alert(
      producto.nombre +
        " Precio: " +
      producto.precio +
        " Stock: " +
      producto.stock +
        "\n"
    );
  });
}


let empleadoValido = loginEmpleado();
if (empleadoValido) {
  operacion();
}


    