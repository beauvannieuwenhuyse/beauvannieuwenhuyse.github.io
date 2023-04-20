const setup = () => {
	let sliders = document.getElementsByClassName("slider");



	for(let i = 0; i < sliders.length; i++){
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
update();

}

const update = () => {
	let red = document.getElementById("red").value;
	let green = document.getElementById("green").value;
	let blue = document.getElementById("blue").value;

	//tekst bepalen
	document.getElementById("waarderood").innerText = red;
	document.getElementById("waardegroen").innerHTML = green;
	document.getElementById("waardeblauw").innerHTML = blue;

	//kleur bepalen
let swatch = document.getElementById("colorDemo");
swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
}


// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);