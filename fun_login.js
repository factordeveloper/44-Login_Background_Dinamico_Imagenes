
window.onload = function(){
    changeImg()
}



function changeImg(){
let contador = 0;
const IMAGES = [
    "url(img/fondo_japon1.jpg)",
    "url(img/fondo_japon2.jpg)",
    "url(img/fondo_japon3.jpg)",
    "url(img/fondo_japon4.jpg)",
    "url(img/fondo_japon5.jpg)",
    "url(img/fondo_japon1.jpg)",
    "url(img/fondo_japon2.jpg)",
    "url(img/fondo_japon3.jpg)",
    "url(img/fondo_japon4.jpg)",
    "url(img/fondo_japon5.jpg)",
    "url(img/fondo_japon1.jpg)",
    "url(img/fondo_japon2.jpg)",
    "url(img/fondo_japon3.jpg)",
    "url(img/fondo_japon4.jpg)",
    "url(img/fondo_japon5.jpg)",
    "url(img/fondo_japon1.jpg)",
    "url(img/fondo_japon2.jpg)",
    "url(img/fondo_japon3.jpg)",
    "url(img/fondo_japon4.jpg)",
    "url(img/fondo_japon5.jpg)",
    "url(img/fondo_japon1.jpg)",
    "url(img/fondo_japon2.jpg)",
    "url(img/fondo_japon3.jpg)",
    "url(img/fondo_japon4.jpg)",
    "url(img/fondo_japon5.jpg)",
    "url(img/fondo_japon1.jpg)",
    "url(img/fondo_japon2.jpg)",
    "url(img/fondo_japon3.jpg)",
    "url(img/fondo_japon4.jpg)",
    "url(img/fondo_japon5.jpg)",
    "url(img/fondo_japon1.jpg)",
    "url(img/fondo_japon2.jpg)",
    "url(img/fondo_japon3.jpg)",
    "url(img/fondo_japon4.jpg)",
    "url(img/fondo_japon5.jpg)",
    "url(img/fondo_japon1.jpg)",
    "url(img/fondo_japon2.jpg)",
    "url(/img/fondo_japon3.jpg)",
    "url(img/fondo_japon4.jpg)",
    "url(img/fondo_japon5.jpg)",
    "url(img/fondo_japon1.jpg)",
    "url(img/fondo_japon2.jpg)",
    "url(img/fondo_japon3.jpg)",
    "url(img/fondo_japon4.jpg)",
    "url(img/fondo_japon5.jpg)",
    "url(/img/fondo_japon1.jpg)",
    "url(img/fondo_japon2.jpg)",
    "url(img/fondo_japon3.jpg)",
    "url(img/fondo_japon4.jpg)",
    "url(img/fondo_japon5.jpg)",
    "url(img/fondo_japon1.jpg)",
    "url(/img/fondo_japon2.jpg)",
    "url(img/fondo_japon3.jpg)",
    "url(img/fondo_japon4.jpg)",
    "url(img/fondo_japon5.jpg)",
    "url(img/fondo_japon1.jpg)",
    "url(img/fondo_japon2.jpg)",
    "url(img/fondo_japon3.jpg)",
    "url(img/fondo_japon4.jpg)",
    "url(img/fondo_japon5.jpg)",
    "url(img/fondo_japon1.jpg)",
    "url(img/fondo_japon2.jpg)",
    "url(img/fondo_japon3.jpg)",
    "url(img/fondo_japon4.jpg)",
    "url(img/fondo_japon5.jpg)",
    "url(img/fondo_japon1.jpg)",
    "url(img/fondo_japon2.jpg)",
    "url(img/fondo_japon3.jpg)",
    "url(img/fondo_japon4.jpg)",
    "url(img/fondo_japon5.jpg)",
    
    
    
   
    
    
];
const BODY = document.getElementsByTagName("body")[0];
setInterval(function(){
    contador++;
    if (contador > IMAGES.lenght) contador = 0;
    BODY.style.backgroundImage = IMAGES[contador];

}, 5000);
} 