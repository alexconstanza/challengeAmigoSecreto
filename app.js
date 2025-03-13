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
}
    

