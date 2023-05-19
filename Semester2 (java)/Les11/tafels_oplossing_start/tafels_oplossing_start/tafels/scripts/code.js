
const setup = () => {
    let btnGo = document.getElementById("btnGo")
    btnGo.addEventListener("click", controle)
    loadTables()
}

const controle = () => {
    let input = document.getElementById("input").value;
    if ( isNaN(input) || input === ""){
        alert("dit is geen getal")
    } else {
        maakHeader()
        document.getElementById("input").value = "";

    }
}

const maakHeader = () => {
    let huidigdatum = new Date
    let input = document.getElementById("input").value;
    let rij = document.getElementById("row")
    let blok = document.createElement("div")
    blok.classList.add("tafel")
    let thead = document.createElement("div")
    thead.innerText = "tafel van " + input + " aangemaakt op " + huidigdatum.getHours() + ":" + huidigdatum.getMinutes()+ ":" + huidigdatum.getSeconds()
    thead.classList.add("header")
    rij.appendChild(blok)
    blok.appendChild(thead)
    maakBody(blok)
}

const maakBody = (table) => {
    let input = document.getElementById("input").value;
    for (let i=1; i<11; i++){
        let tr = document.createElement("div")
        tr.innerText = input + " x " + i + " = " + input*i;
        table.appendChild(tr)
        if(i%2==0){
            tr.classList.add("even")
        }

    }
    saveTables();

}
const saveTables = () => {
    let tables = document.getElementById("row").innerHTML;
    localStorage.setItem("tables", tables);
};

const loadTables = () => {
    let tables = localStorage.getItem("tables");
    if (tables) {
        document.getElementById("row").innerHTML = tables;
    }
};


window.addEventListener("load", setup);