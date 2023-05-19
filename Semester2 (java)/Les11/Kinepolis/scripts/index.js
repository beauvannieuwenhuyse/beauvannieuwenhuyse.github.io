const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btnGo = document.getElementById("btnGo")
    btnGo.addEventListener("click", findstoel)
    laadstoelen();
}

const laadstoelen = () => {
    let stoel = document.createElement("img")

}

window.addEventListener("load", setup);