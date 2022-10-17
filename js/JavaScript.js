const img =  document.querySelectorAll(".img_pequeñas");
const bloque = document.querySelectorAll(".img_grande");
const bloque2 = document.querySelectorAll(".contenido_derecha");


img.forEach( ( cadaimg , i )=>{

    img[i].addEventListener('click',()=>{

        img.forEach( ( cadaimg , i )=>{
            bloque[i].classList.remove('activo');
            bloque2[i].classList.remove('activo');
        });

        img[i].classList.add('activo');
        bloque[i].classList.add('activo')
        bloque2[i].classList.add('activo');

    })
})
//  ESTO ES PARA EL POP UP DE LA PAGINA DE INICIO
function popup() {
    var  a =  document.querySelector(".pop");
    if(a.style.display  === "none"){
        a.style.display  = "flex";
    }
    else{
        a.style.display  = "none";
    }
}
document.querySelectorAll('.img_grande img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.pop').style.display = "flex";
        document.querySelector('.pop  img').src = image.src;
    }
});





