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





