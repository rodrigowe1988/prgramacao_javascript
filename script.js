console.log("Hello world");
let name = "Rodrigo";
console.log(`Olá ${name}`);
let bigName = name.toUpperCase();
console.log(bigName);

//Array
let lista = [1, 2, 3, 4, 5, 6, 7];
lista.push(8);
console.log(lista);
lista.pop();
console.log(lista);

let novaLista = lista.toString();
console.log(novaLista);

//laço for
let count;
for (count = 0; count < 3; count++) {
  console.log(count);
}

//if/else
age = 34;
if (age < 18) {
  console.log("entrada proibida");
} else {
  console.log("Pode entrar");
}

//date
let now = new Date();
console.log(now);
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());

//functions
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(1, 2));

const sum2 = (num1, num2) => num1 + num2;
console.log(sum2(23, 19));

//DOM
function handleClick() {
  console.log("viu como você me obedece");
  let titulo = document.getElementById("titulo");
  console.log(titulo);
  titulo.innerHTML = "titulo modificado via <b>JS</b>";
}

function search() {
  window.open("https://www.google.com/");

  //window.location.href = "https://www.google.com/";
}

function moveMouse() {
  console.log("Pode continuar. Eu gosto de carinho...S2");
}

function trocaTextoMouseOver() {
  let titulo = document.getElementById("titulo");
  titulo.innerHTML = "Evento -> onMouseOver";
}

function trocaTexto(elemento) {
  elemento.innerHTML = "meu teste";
}

function load() {
  console.log("pagina carregada");
}

function funcaoChange(elemento) {
  console.log(`Valor: ${elemento.value}, conteúdo: ${elemento.textContent}`);
}
