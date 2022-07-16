let totalCarrito = 1
let producto = 'producto';
const carrito = [];


function agregarAlCarrito(producto, stock) {
        console.log('agregaste al carrito: ' + producto);
        
        const tenemosStock = stockDisponible(stock);

}

function agregarAlCarrito(producto){
        carrito.push(producto);
        console.log(carrito);
}

agregarAlCarrito({id: 1200, name: "Zapatillas Nike", price:20000})
agregarAlCarrito({id: 1400, name: "Remera Nike", price:8000})
agregarAlCarrito({id: 2200, name: "Mochila Nike", price:6000})

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


  
function stockDisponible(stock){
         
        if(stock > 1){
        return 'Tenemos stock';
        }
        else{
        return 'No tenemos stock';}
        
}


/* agregarAlCarrito('Remera Nike', 10)
agregarAlCarrito('Zapatillas Nike', 20)
agregarAlCarrito('Mochila', 8) */

    