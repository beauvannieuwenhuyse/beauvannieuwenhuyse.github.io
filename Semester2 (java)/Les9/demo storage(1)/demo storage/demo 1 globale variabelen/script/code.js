let teller=0; // de globale variabele voor onze teller

const setup =() => {
	let btnVerhoog=document.getElementById("btnVerhoog");
	btnVerhoog.addEventListener("click", verhoog);
	document.getElementById("btnVerhoog").addEventListener("click", saveSettings);

}

const verhoog =() => {
	let txtResult=document.getElementById("txtResult");
	teller++;
	txtResult.innerHTML="De waarde van de teller is " + teller;
}

const saveSettings = () => {
	let settings = {};
	let settingsJSON;

	// bouw settings object op basis van ingevulde gegevens
	// eigenlijk zouden we hier ook inputvalidering moeten doen
	settings.txt = parseInt(teller);

	settingsJSON = JSON.stringify((settings))
	localStorage.setItem("VIVES.be.settingsTeller", settingsJSON)


};

const showSettings = () => {
	let settings;
	let settingsJSON = localStorage.getItem("VIVES.be.settingsTeller")

	// Maak een leeg settings object, of bouw het op basis
	// van de settings JSON string in local storage
	if (settingsJSON == undefined) {
		settings = {
			txt: 0

		};
	} else {
		settings = JSON.parse((settingsJSON))
		teller = settings.txt;
		let txtResult=document.getElementById("txtResult");
		txtResult.innerHTML="De waarde van de teller is " + teller;
	}

	// vul de invoervelden met de settings-waarden


};
window.addEventListener("load", showSettings)
window.addEventListener("load", setup);