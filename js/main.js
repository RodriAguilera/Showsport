function correo() {

let ingreso = prompt("Bienvenido a ShowSport. Le gustaria recibir promociones y descuentos a su Correo Electronico?");

if(ingreso.toLowerCase() === "si"){
let mail = prompt("Ingrese su direccion de Correo Electronico");
let deporte = prompt("Ingrese el deporte o disciplina que que practica o de la que le gustaria recibir notificaciones");
  alert(`Recibira notificaciones de ${deporte} en ${mail} `);
}

else{alert("Gracias por visitar ShowSport")};


}

correo();

  
// // OBJETO

class Producto{
    constructor(nombre, precio, descripcion){

    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;

  }};
  
    const producto1 = new Producto("Adidas Galaxy6", 21000, "Calzado de rendimiento medio, suela de impacto resistente, para correr de 10 a 20k.")
    const producto2 = new Producto("Nike Airzoom Pegasus39", 50000, "Calzado de alto rendimiento, sistema de camara de aire interna, para correr de 20 a 45k.")

    console.log(producto1);
    console.log(producto2);

// ARREGLO

const productos = [
  { id: 1, nombre: "Remera", precio: 12000 },
  { id: 2, nombre: "Pantalón", precio: 30000 },
  { id: 3, nombre: "Zapatilla", precio: 50000 },
  { id: 4, nombre: "Mochila", precio: 10000 }
];


function buscarProducto(nombre) {
	return productos.find(producto => producto.nombre === nombre)
}

// ejemplo de busqueda
console.log(buscarProducto("Zapatilla")); 

