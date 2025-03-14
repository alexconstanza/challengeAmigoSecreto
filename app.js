// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//let amigo = document.querySelector('h3');
let conjuntoAmigos = [];





function agregarAmigo(){
    let amigosIngreso = document.getElementById('amigo').value;
    if(amigosIngreso === ""){
        alert("Ingrese el nombre de un participante.")
    }   else {
        conjuntoAmigos.push(amigosIngreso);
        console.log(conjuntoAmigos);
    }
    limpiarCaja();
}

function limpiarCaja(){
    document.querySelector('#amigo').value ='';
}
function sortearAmigo(){
    let tamano = conjuntoAmigos.length;
    let numeroSorteo = Math.floor(Math.random()*tamano)+1;
    let verificarRifa = numeroSorteo-1;
    console.log(numeroSorteo);
    console.log(conjuntoAmigos[verificarRifa]);
    console.log(verificarRifa);
    return conjuntoAmigos[verificarRifa];
}
let guardarValor = sortearAmigo();

const parrafoCuatro = document.createElement('p');
const textoParrafoCuatro = document.createTextNode('Párrafo 4');
const elementoPadre = document.querySelector ('.padre');
elementoPadre.appendChild(parrafoCuatro);
parrafoCuatro.appendChild(textoParrafoCuatro);
/*const itemAgregado = document.createElement('li');
const textItemAgregado = document.createTextNode("Parrafo 4");
const amigoGanador = document.querySelector('.result-list');
amigoGanador.appendChild(itemAgregado);
*/
/*function mostrarAmigo(){
    let amigoSeleccionado = document.querySelector("result-list");
    let li1 = document.createElement("li");
    li1.textContent = conjuntoAmigos

let itemAgregado = document.createElement("li");
itemAgregado.textContent = guardarValor;
amigoGanador.appendChild(itemAgregado);
 }*/   

