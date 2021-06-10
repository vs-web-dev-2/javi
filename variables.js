const PI = 3.14;
let marca = "bh";
let radio = 30;
let rueda = 2 * PI * radio;
let esDeCarretera = true;
marca = "orbea";
radio = 400;
console.log("Marca : " + marca);
console.log("Longitud rueda: "  + rueda);
console.log(radio);
console.log(esDeCarretera);

let bici = {
marca : "bh",
precio: 300,
rueda : 30,
esDeCarretera : true,
color : "rojo"

};
console.log(bici.color);
bici.color = "azul";
console.log(bici);
console.log(bici.precio);
console.log(bici.color);

let colores = ["rojo","azul","blanco"];
console.log(colores);
console.log(colores[1]);
colores[2]="negro";
console.log(colores);

bici.marca= marca;
console.log(bici.marca);
marca= "especializ";

let esGrande = bici.radio > 25;
console.log(esGrande);
let meGusta = bici.color == "azul";
console.log(meGusta);

//es posible hacer lo siguiente y javascript interpreta
console.log(1 + 1);
console.log("1" + "1");
console.log("1" + 1);
console.log(1 + "1");