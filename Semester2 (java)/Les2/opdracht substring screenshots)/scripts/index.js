const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);



}
let txtInput = document.getElementById("txtInput");
let startNumber = document.getElementById("number1");
let eindNumber = document.getElementById("number2");
let txtOutput = document.getElementById("txtOutput")
const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    let nummer1 = startNumber.value;
    let nummer2 = eindNumber.value;
    txtOutput.innerHTML = tekst.substring(nummer1,nummer2);
}

window.addEventListener("load", setup);