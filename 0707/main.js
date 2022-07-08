let imageIndex = 0;
let postion = 0;
const IMAGE_WIDTH = 370;
const btnPrevious = document.querySelector(".previous")
const btnNExt= document.querySelector(".next")
const images = document.querySelector(".images")

function prev(){
    if(imageIndex > 0){
        btnNExt.removeAttribute("disabled")
        postion += IMAGE_WIDTH;
        images.style.transform='translateX(${postion}px)';
        imageIndex = imageIndex - 1;
    }
    if(imageIndex == 0){
        btnPrevious.setAttribute('disabled', 'true')
    }
}
function next(){
    if(imageIndex < 3){
        btnPrevious.removeAttribute("disabled")
        postion -= IMAGE_WIDTH;
        images.style.transform ='translateX(${postion}px)';
        imageIndex = imageIndex + 1 ;
    
    }
    if(imageIndex == 3) {
        btnNExt.setAttribute('disabled', 'true')
    }
}

function init(){
    btnPrevious.setAttribute('disabled', 'true')
    btnPrevious.addEventListener("click", prev)
    btnNExt.addEventListener("click", next)
}
init();