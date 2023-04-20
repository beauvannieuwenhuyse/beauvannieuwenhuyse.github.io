const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);



}
let txtOutput = document.getElementById("txtOutput")
const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    txtOutput.innerHTML = tekst;
    console.log(tekst);
}

window.addEventListener("load", setup);