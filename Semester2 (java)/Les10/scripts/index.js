const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let button = document.getElementById("btnGo")
    button.addEventListener("click",Controle)
}


const Controle = () => {
let string = document.getElementById("commandoInput").value
    let stringprefix = string.substring(0,2)
    console.log(stringprefix)
const prefix = ["/g", "/y","/t", "/i"]
    if (string.includes("/")){
       if (prefix.includes(stringprefix)){
           onSubmit(string);

       } else   {
           alert("dit is geen correcte prefix")
       }
    } else {
        alert("dit is geen correct commando")
    }
}



const onSubmit = (string) => {
    console.log("onsubmit methode")
    let prefix = string.substring(0, 2)
    let searchValue = string.substring(2)
    console.log(string)
    console.log(prefix + "test prefix")
    console.log(searchValue)

    if (prefix.includes("/g")) {
        let zoek = `https://www.google.com/search?q=${searchValue}`
        let rest = findTitel(zoek)
        window.open(zoek);

        kaartAanmaken(searchValue,rest,zoek);
    }
    if (prefix.includes("/y")) {
        let link = `https://www.youtube.com/search?q=${searchValue}`
        window.open(link);
    }
    if (prefix.includes("/t")) {
        let link =`https://twitter.com/search?q=${searchValue}`
        window.open(link);
    }
    if (prefix.includes("/i")) {
        let link = `https://www.instagram.com/search?q=${searchValue}`
        window.open(link);
    }
}

const findTitel = (link) =>{
    let snijpunt1 = link.indexOf(".")
    let stuk = link.substring(snijpunt1+1)
    let snijpunt2 = stuk.indexOf(".")
    let rest = stuk.substring(0,snijpunt2)
    console.log(stuk)
    console.log(rest)
    return rest



}

 const kaartAanmaken = (searchValue,rest,zoek) => {
        let rij = document.getElementById("row")
        let blok = document.createElement("div")
        let card = document.createElement("div")
        let body = document.createElement("div")
        rij.appendChild(blok)
        blok.className= "col-4"
        blok.classList.add("blok")
        blok.appendChild(card)
        card.className = "card"
        card.classList.add("bodystyle")
        body.className = "card-body"
        card.appendChild(body)
        let titel = document.createElement("h5")
            titel.className = "card-title"
            titel.innerText= rest
        body.appendChild(titel)
        let tekst = document.createElement("p")
         tekst.className = searchValue
         body.appendChild(tekst)
         let link = document.createElement("a")
         link.className = "btn btn-primary"
         link.href = zoek
         link.innerText = "dit is een link"
        body.appendChild(link)


 }




window.addEventListener("load", setup);