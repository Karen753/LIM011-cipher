const empezar = document.getElementById("empezar");
const pag1 = document.getElementById("pag1");
const pag2 = document.getElementById("pag2");
const pag3 = document.getElementById("pag3");
const pag4 = document.getElementById("pag4");

empezar.addEventListener("click", ()=>{
    pag1.classList.add("hide");
    pag2.classList.remove("hide");
    pag3.classList.add("hide");
    pag4.classList.add("hide");
});

const entrarAcifrar =document.getElementById("entrarAcifrar");
entrarAcifrar.addEventListener("click",()=>{
    pag1.classList.add("hide");
    pag2.classList.add("hide");
    pag3.classList.remove("hide");
    pag4.classList.add("hide");
});

const entrarAdesdifrar=document.getElementById("entrarAdesdifrar");
entrarAdesdifrar.addEventListener("click", ()=>{
    pag1.classList.add("hide");
    pag2.classList.add("hide");
    pag3.classList.add("hide");
    pag4.classList.remove("hide");
});

const volver=document.getElementById("volver");
volver.addEventListener("click", ()=>{
    pag1.classList.add("hide");
    pag2.classList.remove("hide");
    pag3.classList.add("hide");
    pag4.classList.add("hide");
    document.getElementById("formularioCifrar").reset();
    document.getElementById("formularioCifrar2").reset();
    });

const volver2=document.getElementById("volver2");
volver2.addEventListener("click", ()=>{
    pag1.classList.add("hide");
    pag2.classList.remove("hide");
    pag3.classList.add("hide");
    pag4.classList.add("hide");
    document.getElementById("formularioDescifrar").reset();
    document.getElementById("formularioDescifrar2").reset();
});

const cifrarMensaje = document.getElementById("cifrarmensaje");
cifrarMensaje.addEventListener('click', ()=> {
    let string = document.getElementById('mensajeAcifrar').value;
    let offset = document.getElementById('claveAcifrar').value;
    window.cipher.encode(offset, string);
    document.getElementById('mensajeCifrado').value = window.cipher.encode(offset, string); 
});
 
const descifrarMensaje = document.getElementById("descifrarmensaje");
descifrarMensaje.addEventListener('click', ()=> {
    let string = document.getElementById('mensajeAdescifrar').value;
    let offset = document.getElementById('claveAdescifrar').value;
    window.cipher.encode(offset, string);
    document.getElementById('mensajeDescifrado').value = window.cipher.decode(offset, string); 
});


