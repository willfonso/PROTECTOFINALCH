const nombre = prompt("Bienvenido, ingrese su nombre");
let edad = parseInt(prompt("¿Cuál es su edad?")); //Se que no es estrictamente necesario el parseInt en este caso, pero para ya comenzar a implementarlo.
const usuario = prompt("Ingrese un nombre de usuario");
let salida = "Bienvenido " + nombre +". Su edad es de " + edad + " años, y su nombre de usuario es: " + usuario + ".";
alert(salida);