/*
 * Archivo principal de funcionalidad de JS
 */
var imagenes = document.getElementsByClassName("imgwork");
var arregloimagenes = Array.from(imagenes);
var modal1 = document.getElementById("modalimg");
var modalimg = document.getElementById("imagenmodal");
var close = document.getElementById("close");


arregloimagenes.forEach(function (img){
    img.addEventListener("click",hola);    
function hola(item){
    modal1.style.display = "block";
    modalimg.src = img.src;    
}
}); 
close.addEventListener("click",cerrar);

function cerrar(){
    modal1.style.display = "none";
}

