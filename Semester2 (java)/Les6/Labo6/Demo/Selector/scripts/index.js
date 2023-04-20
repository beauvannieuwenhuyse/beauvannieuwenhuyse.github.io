const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    //let lstPar = document.getElementsByClassName("color");
    let lstParDiv = document.querySelectorAll("#myDIV > .color");
    //queryselector zal alle ellementen selecteren die klas .color hebben en waarvan hun parrent een mydiv is

    // for(let i=0; i<lstPar.length; i++){
    //   lstPar[i].addEventListener("click", change)
    // }

    for(let i=0; i<lstParDiv.length; i++){
        lstParDiv[i].addEventListener("click", changeDiv)
    }

}
const change = (e)=>{
    e.target.className="colorPar"
}

const changeDiv = (e)=>{
    e.target.className="colorParDiv"
}

window.addEventListener("load", setup);