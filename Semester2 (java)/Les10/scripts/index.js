let global = {
    zoekblokken: [],
}

const setup = () => {
    let btnGo = document.getElementById("btnGo")
    btnGo.addEventListener("click", valideer)
    restorezoekblokken()
}



const valideer = () => {
    let zoekwaarde = document.getElementById("commandoInput").value
    let zoekprefix = zoekwaarde.substring(0,2)
    let zoekwoord = zoekwaarde.substring(2)
    const prefix = ["/g", "/y", "/i" , "/t"]
    if (zoekwaarde.includes("/")){
        if (prefix.includes(zoekprefix)){
            console.log("alles ok")
            zoek(zoekwaarde,prefix,zoekprefix,zoekwoord)
        } else {
            alert("geen correcte start")
        }
    } else {
        alert("geen /")
    }

}

const zoek = (zoekwaarde,prefix,zoekprefix,zoekwoord) => {
    if (zoekprefix == "/g"){
        let zoek = `https://www.google.com/search?q=${zoekwoord}`
        let rest = findTitel(zoek)
        window.open(zoek);

        kaartAanmaken(zoekwoord,rest,zoek);
        storeLink(zoekwoord,rest,zoek)
    }

    if (zoekprefix == "/y"){
        let zoek = `https://www.youtube.com/search?q=${zoekwoord}`
        let rest = findTitel(zoek)
        window.open(zoek);

        kaartAanmaken(zoekwoord,rest,zoek);
        storeLink(zoekwoord,rest,zoek)
    }

    if (zoekprefix == "/t"){
        let zoek = `https://www.twitter.com/search?q=${zoekwoord}`
        let rest = findTitel(zoek)
        window.open(zoek);

        kaartAanmaken(zoekwoord,rest,zoek);
        storeLink(zoekwoord,rest,zoek)
    }

    if (zoekprefix == "/i"){
        let zoek = `https://www.instagram.com/search?q=${zoekwoord}`
        let rest = findTitel(zoek)
        window.open(zoek);

        kaartAanmaken(zoekwoord,rest,zoek);
        storeLink(zoekwoord,rest,zoek)
    }


}

const findTitel = (zoek) => {
    let snijpunt1 = zoek.indexOf(".")
    let substr1 = zoek.substring(snijpunt1+1)
    let snijpunt2 = substr1.indexOf(".")
    let titel = substr1.substring(0,snijpunt2)
    return titel
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
    card.classList.add(rest)
    card.appendChild(body)
    body.className = "card-body"
    let titel = document.createElement("h5")
    titel.className = "card-title"
    titel.innerText= rest
    body.appendChild(titel)
    let tekst = document.createElement("p")
    body.appendChild(tekst)
    tekst.className = searchValue
    tekst.innerText= searchValue
    let link = document.createElement("a")
    link.className = "btn btn-primary"
    link.href = zoek
    link.target = "_blank"
    link.innerText = "dit is een link"
    body.appendChild(link)



}



const storeLink = (searchValue,rest,zoek) => {
    let zoekblok = {}; // een leeg object
    zoekblok.searchValue = searchValue;
    zoekblok.rest = rest;
    zoekblok.zoek = zoek;
    global.zoekblokken.push(zoekblok)


    let settingsJSON;

    // bouw settings object op basis van ingevulde gegevens
    // eigenlijk zouden we hier ook inputvalidering moeten doen

    settingsJSON = JSON.stringify((global.zoekblokken))
    localStorage.setItem("VIVES.be.zoekblokken", settingsJSON)

}

const restorezoekblokken = () => {
    let settings=[];
    let settingsJSON = localStorage.getItem("VIVES.be.zoekblokken")

    // Maak een leeg settings object, of bouw het op basis
    // van de settings JSON string in local storage
    if (settingsJSON == undefined) {
        settings = {
        };
    } else {
        settings = JSON.parse((settingsJSON))
    }

    // vul de invoervelden met de settings-waarden
    for(let i=0; i<settings.length; i++){
        zoekblok = settings[i];
        kaartAanmaken(zoekblok.searchValue, zoekblok.rest, zoekblok.zoek)
        global.zoekblokken.push(zoekblok)
    }

    console.log(settings)
};




window.addEventListener('load', setup);