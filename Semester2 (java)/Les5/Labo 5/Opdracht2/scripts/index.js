const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btnChange =  document.getElementById("btnChange");
   btnChange.addEventListener("click", vervang)
}

const vervang = () => {
    let txttext = document.getElementById("txtInput");
    let zin = txttext.value;
    let zoekwoord = "de";
    let nieuw = "het";
    let plaats = zin.indexOf(zoekwoord);
    let output = document.getElementById("txtOutput")
    while(plaats!=-1){
        let links = zin.slice(0,plaats);
        let rechts = zin.slice(plaats+zoekwoord.length,zin.length)
        output.innerText = links + nieuw + rechts;
        plaats=  zin.indexOf(zoekwoord)   }
    console.log(plaats);
    console.log(links);
    console.log(rechts);



}

window.addEventListener("load", setup);