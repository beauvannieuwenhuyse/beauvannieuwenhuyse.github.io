const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let products = document.getElementsByClassName("aantal")
    for(let i = 0; i<products.length; i++){
        products[i].addEventListener("change", calc);
    }
}

const calc = () => {
let prijs = document.getElementsByClassName("bedrag prijs");
}

window.addEventListener("load", setup);