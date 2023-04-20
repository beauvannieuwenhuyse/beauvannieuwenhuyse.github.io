const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}

//window.alert("dit is een mededeling");
//window.confirm("weet u het zeker")
let tekst = window.prompt("wat is u naaw", "onbekend");
console.log(tekst)
//window.prompt("wat is u naaw", "onbekend");

window.addEventListener("load", setup);