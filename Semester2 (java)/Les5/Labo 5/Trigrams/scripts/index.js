const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btnShow = document.getElementById("btnShow");
    btnShow.addEventListener("click", toonTrigram);
}
const toonTrigram = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    let lstTrigrams = document.getElementById("lblList");
    let trigrams = getTrigrams(tekst);
    let output = [];
    for(let i=0; i<trigrams.length; i++){
        output +="<li>"+trigrams[i]+"</li>";
    }
    lstTrigrams.innerHTML=output;
}



const getTrigrams = (tekst) => {
let result = [];
    let trigram;
    for (let i = 0; i < tekst.length-3; i++) {
        trigram = tekst.slice(i,i+3);
        result.push(trigram)
    }
    return result;
}


window.addEventListener("load", setup);