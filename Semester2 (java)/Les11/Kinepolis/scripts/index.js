global = {
    seats: [],
    takenseats: "./knipsel/seat_unavail.png",
    freeseats: "./knipsel/seat_avail.png",
    selectseats: "./knipsel/seat_select.png"
}


const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btnGo = document.getElementById("btnGo")
    btnGo.addEventListener("click", controleStoelen)
    laadstoelen();
    let wissen = document.getElementById("wissen")
    wissen.addEventListener("click", wisSettings)

}

const laadstoelen = () => {
    console.log("laad aangemaakt")
    let start = document.getElementById("row")
    let i = 1;
    let r = 0;

    while(i<32){
        let rij = maakdiv();
        r++
        for(let e = 0; e<8;e++){
            rij.appendChild(maakstoel(i,r))
            start.appendChild(rij)
            i++
            global.seats.push(true)
            console.log(i)
        }
    }

    showSettings()
    if (global.seats.length != 0){
        for (let p = 0;p<global.seats.length;p++){
            if(global.seats[p] === false){
                document.getElementById(p).src=global.selectseats;
            }
        }
    }

}

const controleStoelen = () => {
    let aanvaard = false;
    for (let i = 2; i < global.seats.length + 1; i++) {
        if (global.seats[i] === true && global.seats[i - 1] === true && global.seats[i + 1] === true && aanvaard === false) {
            if (document.getElementById(i).className[0] === document.getElementById(i + 1).className[0] && document.getElementById(i).className[0] === document.getElementById(i - 1).className[0]) {
                let response = confirm("vrije plek stoelnummers:" +
                    "," +document.getElementById(i-1).id
                    + "," + document.getElementById(i).id + "," + document.getElementById(i+1).id + "rij: " + document.getElementById(i).className[0])
                if (response) {
                    aanvaard = true;
                    kiesStoelen(i)
                    saveSettings()

                } else {

                }
            }

        }
    }
    if (aanvaard === false){
            alert("geen vrije plaatsen")
    }
}

const kiesStoelen = (getal) => {
        let getal2 = getal+1
        let getal3 = getal-1
        let stoel = document.getElementById(getal)
        let stoel2 = document.getElementById(getal2)
        let stoel3= document.getElementById(getal3)
        global.seats[getal]=false
        global.seats[getal2]=false
        global.seats[getal3]=false
        stoel.src = global.selectseats
        stoel2.src = global.selectseats
        stoel3.src = global.selectseats
}


const maakdiv = () => {
    let div = document.createElement("div")
    console.log("div aangemaakt")
    return div
}
const maakstoel = (nummer, rij) => {
    let stoel = document.createElement("img")
    stoel.src = global.freeseats;
    stoel.id = nummer
    stoel.classList.add(rij)
    console.log("stoel aangemaakt")
    return stoel
}


const saveSettings = () => {
    let settings = global.seats;
    let settingsJSON;


    // bewaar settings als JSON string in local storage
    settingsJSON = JSON.stringify(settings);
    localStorage.setItem("VIVES.be.arraystoelen", settingsJSON);
};

const showSettings = () => {
    let settings;
    let settingsJSON = localStorage.getItem("VIVES.be.arraystoelen");

    // Maak een leeg settings object, of bouw het op basis
    // van de settings JSON string in local storage
    if (settingsJSON == undefined) {

    } else {
        global.seats = JSON.parse(settingsJSON);
    }


    // vul de invoervelden met de settings-waarden
    console.log(global.seats)

};

const wisSettings = () => {
    localStorage.removeItem("VIVES.be.arraystoelen");
    global.seats = [];
    location.reload();

}


window.addEventListener("load", setup);