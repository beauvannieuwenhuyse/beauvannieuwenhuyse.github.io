const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btn = document.getElementById("btnCreate")
   btn.addEventListener("click", create)
}

const create =()=>{
    let test = document.querySelector("div")
    let para = document.createElement("p")
    test.appendChild(para)
    let t = document.createTextNode("this is something")
    para.appendChild(t)
}

window.addEventListener("load", setup);