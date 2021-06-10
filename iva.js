


function calcularIva(precio,tipoIva = 21) {
   let iva = (precio * tipoIva)/100;
   return precio + iva;
}

console.log("El iva de 100 es: " + calcularIva(100));
console.log(calcularIva(100));

function imprimir(civa, tipoIva, base, valor) {
  // console.log("El IVA" + iva + " al tipo" + tipoIva + " de " + base + " es " + valor);
  console.log(
    `El IVA ${civa} al tipo ${tipoIva}
        de ${base}
        es ${valor}`
  );
}

//  console.log("El IVA normal de 10 es " + calcularIva(10));
//  console.log("El IVA reducido de 10 es " + calcularIva(10, 4));
//  imprimir("El IVA normal de 10 es", calcularIva(10));
//  imprimir("El IVA reducido de 10 es", calcularIva(10, 4));
//  imprimir("normal", 21, 10, calcularIva(10));
//  imprimir("reducido", 4, 10, calcularIva(10, 4));

let precio = 10;
let iva = "reducido";
let tipoIva = 4;
let cuota = calcularIva(precio, tipoIva);
imprimir(iva, tipoIva, precio, cuota);