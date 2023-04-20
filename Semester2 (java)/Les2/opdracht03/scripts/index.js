const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    debugger;
    let pElement=document.getElementById("txtOutput")
    let btnWijzig = document.getElementById("btn")
    btnWijzig.addEventListener("click", change);
    function change(){
        pElement.innerHTML="welkom!";
    }

}

window.addEventListener("load", setup);