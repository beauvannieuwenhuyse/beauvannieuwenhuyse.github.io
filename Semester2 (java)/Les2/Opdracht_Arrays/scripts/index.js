const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

}

const familieNamen = ['pascal', 'beau', 'diego', 'claudia', 'linda'];
console.log(familieNamen[0]);
console.log(familieNamen[2]);
console.log(familieNamen[4]);

let naam = prompt('voeg iets toe')
function VoegNaamToe(iets){
    iets.push(naam);

}
VoegNaamToe(familieNamen);
console.log(familieNamen[5]);

window.addEventListener("load", setup);