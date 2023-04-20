const setup = () => {
	let sliders = document.getElementsByClassName("slider");
	let btnSave = document.getElementById("btnSave")
	btnSave.addEventListener("click", saveSwatch)



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
let swatch = document.getElementById("swatch");
swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
}
const saveSwatch = () => {
	let  swatchComponents = document.getElementById("swatchComponents")
	let swatch = buildSwatchComponent()
	swatchComponents.appendChild(swatch)


}

const closeswatch = (e) => {
	e.target.parentElement.remove()
	document.getElementById("red").value = "50";
	document.getElementById("green").value = "50";
	document.getElementById("blue").value = "50";
	document.getElementById("waarderood").innerText = "50";
	document.getElementById("waardegroen").innerHTML = "50";
	document.getElementById("waardeblauw").innerHTML = "50";
}

const buildSwatchComponent = () => {
	let red = document.getElementById("red").value;
	let green = document.getElementById("green").value;
	let blue = document.getElementById("blue").value;
	let swatch=document.createElement("div")
	let btn = buildbutton()
	swatch.className="swatch"
	swatch.setAttribute("data-red", red)
	swatch.setAttribute("data-green", green)
	swatch.setAttribute("data-blue", blue)
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
	swatch.appendChild(btn)
	swatch.addEventListener("click", showSwatch)
	return	swatch

}

const buildbutton = () => {
	let btn = document.createElement("button")
	let tekst = document.createTextNode("X")
	btn.addEventListener("click", closeswatch)
	btn.className="btnClose"
	btn.appendChild(tekst)
	return btn
}

const showSwatch = (e) => {
	let red = e.target.getAttribute("data-red")
	let green = e.target.getAttribute("data-green")
	let blue = e.target.getAttribute("data-blue")

	document.getElementById("red").value = red;
	document.getElementById("green").value = green;
	document.getElementById("blue").value = blue;

	let swatch = document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);