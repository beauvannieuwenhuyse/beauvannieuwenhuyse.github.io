let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    //valideer();
    let persoon ={
    }
    vulPersoonOpBasisVanUserInterface(persoon)
    personen.push(persoon)
    console.log(persoon)
    voegPersoonToeAanLijstInUserInterface(persoon)
    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};
const vulPersoonOpBasisVanUserInterface = (persoon) => {

    persoon.Voornaam = document.getElementById("txtVoornaam").value.trim();
    persoon.familienaam = document.getElementById("txtFamilienaam").value.trim();
    persoon.GeboorteDatum = document.getElementById("txtGeboorteDatum").value.trim();
    persoon.Email = document.getElementById("txtEmail").value.trim();
    persoon.AantalKinderen = document.getElementById("txtAantalKinderen").value.trim();

}

const voegPersoonToeAanLijstInUserInterface = (persoon) => {
    let lijst = document.getElementById("lstPersonen")
    let option = document.createElement("option")
    option.text = persoon.Voornaam + " " +  persoon.familienaam;
    option.value = persoon.Voornaam + " " +  persoon.familienaam;
    option.setAttribute("data-index", personen.indexOf(persoon.Voornaam))
    lijst.appendChild(option);
    lijst.selectedindex = personen.length - 1;

}
// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let lijst = document.getElementById("lstPersonen")
    lijst.selectedindex = - 1;
    //input[type text] gaat alle inputs selecteren die type text zijn
    let inputelem = document.querySelectorAll('input[type=text]')
    inputelem.forEach((elem) => {
        elem.value = "";
    });
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("click", vulPersoonOpBasisVanUserInterface)
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);