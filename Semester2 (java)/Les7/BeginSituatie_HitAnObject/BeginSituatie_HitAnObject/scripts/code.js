
let number = 0

const setup = () => {
let startimg = document.getElementById("startimg")
    startimg.addEventListener("click",alert)

};

const alert = () => {
    let counter = document.getElementById("counter")
    counter.innerText = number++
    let startimg = document.getElementById("startimg")
    let randompositieX = Math.random() * 750
    let randompositieY = Math.random() * 550
    let random = Math.round(Math.random()) * 4
    startimg.style.marginLeft = randompositieX + "px";
    startimg.style.marginTop = randompositieY + "px";
    startimg.setAttribute("src", "images/" + random +".png")
}

// let global = {
//     IMAGE_COUNT: 5, // aantal figuren
//     IMAGE_SIZE: 48, // grootte van de figuur
//     IMAGE_PATH_PREFIX: "images/", // map van de figuren
//     IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
//     MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
//     score: 0, // aantal hits
//     timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
// };


window.addEventListener("load", setup);


