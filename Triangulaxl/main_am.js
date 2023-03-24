const elegidos = []
let local = 0;
let visitante = 0;
let fn = document.querySelectorAll(".fichas")
const fichas = Array.from(fn)

const locvis = document.querySelector('.elegidos')

const americanos = ["Costa Rica", "México", "Canada", "Estados Unidos", "Argentina", "Brasil", "Chile", "Colombia", "Ecuador", "Paraguay", "Perú", "Uruguay", "Venezuela (Otras Selecciones)"]



const pick_teams = () => {
    let random = () => Math.floor(Math.random() * 13)
    let team = americanos[random()]
    if (elegidos.includes(team)){

        let n_team = americanos[random()]
        elegidos.push(n_team)
    }
    elegidos.push(team)
    
}

while(elegidos.length < 2){pick_teams()}



span_l = document.createElement("span")
span_v = document.createElement("span")
span_l.innerText = "Equipo Local: " + elegidos[0]
span_v.innerText = "Equipo Visitante: " + elegidos[1]


function sortear (){
    locvis.innerText = ""

    fichas.forEach(ficha => ficha.classList.toggle("disabled"))
    for(let i = 0; i < fichas.length; i++){
        if(elegidos.includes(fichas[i].innerText)){
            fichas[i].classList.toggle('disabled')
            
        } 
    }
    locvis.appendChild(span_l)
    locvis.appendChild(span_v)

    }

locvis.addEventListener('click', sortear)
