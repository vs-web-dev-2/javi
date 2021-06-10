// un array de productos
// cada producto debe tener un tipo de iva (normal, reducido o exento)
// { nombre: 'libreta', precio: 1.80, iva: normal }

// carrito es un array (subconjunto de los productos escogidos)
// criterio => precio <10

// calcular subtotal sin iva

// un array de tipos de iva { nombre:'normal', tipo: 21 }

// calcular el total con iva
let pro_1 = { nombre: "manzana", precio: 1.80, iva: "normal" };
let pro_2 = { nombre: "pera", precio: 3.80, iva: "reducido" };
let pro_3 = { nombre: "platano", precio: 4.80, iva: "exento" };

let arrayProducto = [pro_1,pro_2,pro_3];

function precioCorrecto(producto) {
    return (producto.precio < 10);
}
console.log(arrayProducto);
