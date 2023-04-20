const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let element = document.createElement("p") //maakt p element aan
    element.setAttribute("class", "color") //voegt class color toe aan het p element
    let textNode = document.createTextNode("hello world") // maakt tekst aan
    element.appendChild(textNode) //voegt tekst toe aan het p element
    document.querySelector("#myDiv").appendChild(element) // doet hetzelfde

    //document.getElementById("myDiv").innerHTML = "<P>Hello world</p>"
    //dit mag niet!!!!!!!!!!!!
}

window.addEventListener("load", setup);