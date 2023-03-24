const img = document.querySelector("img")
const aqui = document.querySelector("strong")
console.log(img)
console.log(aqui)


function hide(){
    img.classList.toggle('hide')
}


aqui.addEventListener('click', hide)