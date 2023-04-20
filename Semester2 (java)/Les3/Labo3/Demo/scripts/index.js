const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btnTry = document.getElementById("btnTry");
    let btnWithoutBullets = document.getElementById("btnWithoutBullets")
    let btnWithBullets = document.getElementById("btnWithBullets")
    //envent-based programming:
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut)
    //btnTry.addEventListener("mouseout", mouseOut)
    // eventListeners CSS
    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);
    document.getElementById("btnWithBullets").addEventListener("click", withBullets);
    //eventListeners difference between "textContent" and "innerHTML"

    document.getElementById("btnContent").addEventListener("click", changeContent);


    //andere manier van scrhijven
    //btnTry.addEventListener("mouseout", () => {
    //    event.innerHTML += "mouse Out!<br>";
    //})
}

let event = document.getElementById("event")

//hover function
const mouseHover = () => {
event.innerHTML += "mouse Hovered!<br>";
}

//click function
const onClick = () => {
    event.innerHTML += "Click!<br>";
}

//mouse out function
const mouseOut = () => {
event.innerHTML += "mouse Out!<br>";
}



const withBullets = () => {
let listItems = document.getElementsByTagName("li");
for(let i = 0; i < listItems.length; i++){
    //eerste manier
    //listItems[i].style.listStyleType="disc";
    //listItems[i].style.backgroundColor="white";

    //tweede manier
    //listItems[i].className = "listItemsStyleDisc colorWhite";

    //derde manier
    listItems[i].classList.add("listItemsStyleDisc");
    listItems[i].classList.add("colorWhite");
    console.log("output" + listItems[i].className );
}
}


const withoutBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for(let i = 0; i < listItems.length; i++){
       //eerste manier
        //listItems[i].style.listStyleType="none";
        // listItems[i].style.backgroundColor="red";

        //tweede manier
        //listItems[i].className = "listItemsStyleNone colorRed";

        //derde manier
        listItems[i].classList.remove("listItemsStyleDisc");
        listItems[i].classList.remove("colorWhite");
        listItems[i].classList.add("listItemsStyleNone");
        listItems[i].classList.add("colorRed");
        console.log("output" + listItems[i].className );
    }
}

const changeContent = () => {
    //textcontent is letterlijk tekst
    document.getElementById("textContent").textContent ="<a href='https://www.vives.be'>VIVES</a>";
    //innerhtml kijkt ook naar de html tags
    document.getElementById("innerHTML").innerHTML ="<a href='https://www.vives.be'>VIVES</a>";
}

window.addEventListener("load", setup);