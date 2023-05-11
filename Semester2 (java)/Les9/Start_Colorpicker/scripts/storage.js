const swatches = []

const storeSliderValues = (red,green,blue) => {

    let settings = {};
    let settingsJSON;

    // bouw settings object op basis van ingevulde gegevens
    // eigenlijk zouden we hier ook inputvalidering moeten doen
    settings.red = parseInt(red);
    settings.green = parseInt(green);
    settings.blue = parseInt(blue);

    settingsJSON = JSON.stringify((settings))
    localStorage.setItem("VIVES.be.settingsSlider", settingsJSON)
};

const restoreSliderValues = () => {
    let settings;
    let settingsJSON = localStorage.getItem("VIVES.be.settingsSlider")

    // Maak een leeg settings object, of bouw het op basis
    // van de settings JSON string in local storage
    if (settingsJSON == undefined) {
        settings = {
            red: 255,
            green: 255,
            blue: 255,

        };
    } else {
        settings = JSON.parse((settingsJSON))
    }
    document.getElementById("sldRed").value = settings.red;
    document.getElementById("sldGreen").value = settings.green;
    document.getElementById("sldBlue").value = settings.blue;
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let swatch = {}; // een leeg object
    swatch.red = document.getElementById("sldRed").value;
    swatch.green = document.getElementById("sldGreen").value;
    swatch.blue = document.getElementById("sldBlue").value;
    console.log(swatch)
    swatches.push(swatch)
    console.log(swatches)


    let settingsJSON;

    // bouw settings object op basis van ingevulde gegevens
    // eigenlijk zouden we hier ook inputvalidering moeten doen

    settingsJSON = JSON.stringify((swatches))
    localStorage.setItem("VIVES.be.settingsSwatches", settingsJSON)

};

const deletestoreSwatches = (red, green, blue) => {
    // bouw een array met kleurinfo objecten
    let swatch = {}; // een leeg object
    swatch.red = red;
    swatch.green = green;
    swatch.blue = blue;
    console.log(red + "rood2")
    console.log(green)
    console.log(blue)
    console.log(swatch)
    swatches.splice(swatch,1)
    console.log(swatches)


    let settingsJSON;

    // bouw settings object op basis van ingevulde gegevens
    // eigenlijk zouden we hier ook inputvalidering moeten doen

    settingsJSON = JSON.stringify((swatches))
    localStorage.setItem("VIVES.be.settingsSwatches", settingsJSON)

};


const restoreSwatches = () => {
    let settings=[];
    let settingsJSON = localStorage.getItem("VIVES.be.settingsSwatches")

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
       swatch = settings[i];
        addSwatchComponent(swatch.red, swatch.green, swatch.blue)
      swatches.push(swatch)
    }

    console.log(settings)
};
