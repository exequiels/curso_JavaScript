class Producto {
    constructor (nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }   

    getInformacionProducto () {
        return "Nombre: "+ this.nombre + " | Precio: " + this.precio + " | Stock " + this.stock + " ";
    }
}


class ProductoElectronico extends Producto {
    constructor(nombre, precio, stock, potencia) {
      super(nombre, precio, stock);
      this.potencia = potencia;
    }

    getPotencia() {
        return this.potencia;
      }
}

class ProductoAlimenticio extends Producto {
    fechaVencimiento;
    alimentoPerecedero;
    constructor(nombre, precio, stock,fechaVencimiento,alimentoPerecedero) {
      super(nombre, precio,stock)
      this.fechaVencimiento = this.fechaVencimiento;
      this.alimentoPerecedero = this.alimentoPerecedero;      
    }
    tipoAlimento() {
        let respuesta = "";
        
        if (this.alimentoPerecedero) {
          respuesta  =  this.nombre + ' es un alimento perecedero.';
        } else {
            respuesta = this.nombre + ' no es un alimento perecedero.';
        }
        
        return respuesta; 
    }
  }

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    eliminarProducto(index) {
        this.productos.splice(index, 1);
    }
    
    calcular_total() {
        return this.productos.reduce((total, producto) => total + parseFloat(producto.precio.replace('$', '')), 0);
    }

}

//inicio de variables
const carrito = new Carrito();

function agregarAlCarrito(index) {
  //  console.log($(elemento).attr("data-nombre"));
    let nombreProducto = $("#producto_"+ index +" .nombre").text(); 
    let precio = $("#producto_"+ index +" .precio").text(); 

    if($("#producto_"+ index ).hasClass("electronico")) {
        let potencia = $("#producto_"+ index +" .potencia").text(); 
        let p1 = new ProductoElectronico(nombreProducto, precio, 1, potencia);
        carrito.agregarProducto(p1);
    } else {
        let fechaVencimiento = $("#producto_"+ index +" .caducidad").text(); 
        let alimentoPerecedero = true; 
        let p2 = new ProductoAlimenticio(nombreProducto, precio, 1, fechaVencimiento, alimentoPerecedero);
        carrito.agregarProducto(p2);
    }
    mostrarCarrito();
}


function mostrarCarrito() {
    const listaCarrito = $("#lista-carrito");
    const totalSpan = $("#total");

    listaCarrito.empty();

    carrito.productos.forEach((producto, index) => {
        const li = $("<li>").text(producto.getInformacionProducto()); // Use the getInformacionProducto method
        const eliminarBtn = $("<button>").text("Eliminar");

        eliminarBtn.click(() => eliminarDelCarrito(index));

        li.append(eliminarBtn);
        listaCarrito.append(li);
    });
    $("#cantidad").html("Cantidad de productos: " +  carrito.productos.length + " . Total: $" + carrito.calcular_total().toFixed(2));
}

function eliminarDelCarrito(index) {
    carrito.eliminarProducto(index);
    mostrarCarrito();
}



mostrarCarrito();
