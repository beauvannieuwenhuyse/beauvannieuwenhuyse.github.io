const setup = () => {
    console.log("hello world");
    let imgPhoto = document.getElementById("imgPhoto");
    imgPhoto.addEventListener( "mouseover", change);
    imgPhoto.addEventListener( "mouseout", change2);
}

const change = () => {


    let imgPhoto = document.getElementById("imgPhoto");
    imgPhoto.src = "images/vivves.jpg";
    imgPhoto.className = "photo2";
    let txtText = document.getElementById("txtText");
    txtText.innerHTML = "School";
}

const change2 = () => {
    let imgPhoto = document.getElementById("imgPhoto");
    imgPhoto.src = "images/hond.gif";
    imgPhoto.className = "photo";
    let txtText = document.getElementById("txtText");
    txtText.innerHTML = "Hogeschool Vives";
}
window.addEventListener("load", setup);