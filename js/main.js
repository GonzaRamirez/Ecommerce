let totalCarrito = 1
let producto = 'producto';

precio = parseFloat(prompt("Ingresar precio")) ;
cantidad = parseFloat(prompt("Ingresar cantidad"));

compra = precio*cantidad;
desc = compra*0.15;
pagar = compra-desc;

document.write("El descuento es de: $"+desc + "<br>");
document.write("El total a pagar es: $"+pagar);

function agregarAlCarrito(producto, stock) {
        console.log('agregaste al carrito: ' + producto);
        /* console.log('Total en el carrito de compras:' + totalCarrito++); */
        const tenemosStock = stockDisponible(stock);

}
  
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

    