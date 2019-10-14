

document.getElementById('pag2').style.display = 'none'
document.getElementById('pag3').style.display = 'none'
document.getElementById('pag4').style.display = 'none'

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.getElementById('pag2').style.display = 'block'
    document.getElementById('pag1').style.display = 'none'
    document.getElementById('pag3').style.display = 'none'
    document.getElementById('pag4').style.display = 'none'

});

const cifrar = document.getElementById('cifrar');

cifrar.addEventListener('click', () => {
    document.getElementById('pag3').style.display = 'block'
    document.getElementById('pag1').style.display = 'none'
    document.getElementById('pag2').style.display = 'none'
    document.getElementById('pag4').style.display = 'none'
    
});


const volver = document.getElementById('volver');

volver.addEventListener('click', () => {
    document.getElementById('pag1').style.display = 'block'
    document.getElementById('pag2').style.display = 'none'
    document.getElementById('pag3').style.display = 'none'
    document.getElementById('pag4').style.display = 'none'
});

const descifrar = document.getElementById('descifrar');

    descifrar.addEventListener('click', () => {
    document.getElementById('pag4').style.display = 'block'
    document.getElementById('pag1').style.display = 'none'
    document.getElementById('pag2').style.display = 'none'
    document.getElementById('pag3').style.display = 'none'

    });
    
    const volver2 = document.getElementById('volver2');

volver2.addEventListener('click', () => {
    document.getElementById('pag1').style.display = 'block'
    document.getElementById('pag2').style.display = 'none'
    document.getElementById('pag3').style.display = 'none'
    document.getElementById('pag4').style.display = 'none'
});

const cifrarMensaje = document.getElementById("cifrarMensaje");
cifrarMensaje.addEventListener('click', ()=> {
    let string = document.getElementById('cifrar').value;
    let offset = document.getElementById('clave').value;
    //window.cipher.encode(offset, string);
    //console.log(window.cipher.encode(string, offset));
    document.getElementById('cifrar2').innerHTML = window.cipher.encode(string, offset); 
});
 
const descifrarMensaje = document.getElementById("descifrarMensaje");
descifrarMensaje.addEventListener('click', ()=> {
    let string = document.getElementById('descifrar').value;
    let offset = document.getElementById('clave2').value;
    window.cipher.encode(offset, string);
    document.getElementById('descifrar2').innerHTML = window.cipher.decode(offset, string); 
});

/*const btn = document.getElementById("btn");
const pag1 = document.getElementById("pag1");
const pag2 = document.getElementById("pag2");
const pag3 = document.getElementById("pag3");
const pag4 = document.getElementById("pag4");

btn.addEventListener("click", ()=>{
    pag1.classList.add("centrar");
    pag2.classList.remove("centrar");
    pag3.classList.remove("centrar");
    pag4.classList.remove("centrar");

});*/



    
   
    










