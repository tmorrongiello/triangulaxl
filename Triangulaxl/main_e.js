const elegidos = []
let local = 0;
let visitante = 0;
let fn = document.querySelectorAll(".fichas")
const fichas = Array.from(fn)

const locvis = document.querySelector('.elegidos')

const europeos = ["Austria (Europa A)", "Bélgica (Europa A)", "Bulgaria (Europa A)", "Croacia (Europa A)", "Republica Checa (Europa A)", "Dinamarca (Europa A)", "Inglaterra (Europa A)", "Finlandia (Europa A)", "Francia (Europa A)", 
    "Alemania (Europa A)", "Grecia (Europa A)", "Hungría (Europa A)", "Irlanda (Europa A)", "Italia (Europa A)", "Islandia (Europa A)", "Holanda (Europa A)", "Irlanda del Norte (Europa A)", "Noruega (Europa A)",
    "Polonia (Europa A)", "Portugal (Europa A)", "Rumania (Europa B)", "Rusia (Europa B)", "Escocia (Europa B)", "Serbia (Europa B)", "Eslovaquia (Europa B)", "Eslovenia (Europa B)", "España (Europa B)",
    "Suecia (Europa B)", "Suiza (Europa B)", "Turquía (Europa B)", "Ucrania (Europa B)", "Gales (Otras Selecciones)", "Albania (Otras Selecciones)", "Bosnia (Otras Selecciones)", "Macedonia (Otras Selecciones)", "Kosovo (Otras Selecciones)"]



const pick_teams = () => {
    let random = () => Math.floor(Math.random() * 36)
    let team = europeos[random()]
    if (elegidos.includes(team)){

        let n_team = europeos[random()]
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
