const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
   let par =  document.querySelectorAll("p")[0];
    let y = par.childNodes[0];
    par.removeChild(y);
    let tekst = document.createTextNode("Good job!")
    par.appendChild(tekst)
}

window.addEventListener("load", setup);