

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

    
   
    










