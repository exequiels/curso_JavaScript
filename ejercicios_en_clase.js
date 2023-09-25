/* 
La tienda vendera productos que tendran propiedades como nombre, precio y cantidad en stock. 
Incluye métodos para mostrar la información del producto.

Crea dos tipos de productos. 
Por ejemplo, puedes tener una clase ProductoElectrónico y una clase ProductoAlimenticio. 
Cada clase hija debe tener propiedades específicas 
(por ejemplo, potencia para productos electrónicos y fecha de caducidad para productos alimenticios) y métodos relacionados con su tipo de producto.
Crea una clase llamada Carrito que tenga un array para almacenar los productos seleccionados por el usuario.
Esta clase debe incluir métodos para agregar un producto al carrito, eliminar un producto del carrito y calcular el total de la compra.
*/

class Productos {
    constructor (articulo, precio, cantidad) {
        this.articulo = articulo;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}