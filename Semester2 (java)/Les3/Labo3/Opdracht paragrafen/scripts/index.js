const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let important = document.getElementsByClassName("belangrijk")
    for(let i = 0; i < important.length; i++){
        important[i].className+=" opvallend";
    }
}



window.addEventListener("load", setup);