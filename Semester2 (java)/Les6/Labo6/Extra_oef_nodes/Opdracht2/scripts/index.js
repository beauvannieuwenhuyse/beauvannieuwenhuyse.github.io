const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let list = document.querySelectorAll("li")
    for(var i=0; i<list.length;i++){
        list[i].setAttribute("class", "listitem");
    }
    let mypic = document.createElement('img')
    mypic.setAttribute("src",'#')
    mypic.setAttribute("alt",'#')
    document.querySelector("body").appendChild(mypic)
}

window.addEventListener("load", setup);