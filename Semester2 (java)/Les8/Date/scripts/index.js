const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let start = new Date();  //system date
    console.log(start)

    //dag van de week
    //zal een getal geven tussen 0 en 6
    // 0 is zondag en 6 is zaterdag
    console.log(start.getDay());

    //maand
    //zal een getal 3 geven
    // 0 is januari en 11 is december
    console.log(start.getMonth());


    //year
    console.log(start.getFullYear());

    //dag
    //zal de dag van de maand geven
    console.log(start.getDate());


    console.log(start.getDate() + "-" + (start.getMonth()+1) + "-" + start.getFullYear() +" " + start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds());


    let datum = new Date (2023,0,1)

    console.log(datum);

    //bereken aantal dagen dat je leeft

    let geboorte = new Date(2000,11,2)
    let secondengeboren = start - geboorte;
    console.log(secondengeboren)
    console.log(Math.round( secondengeboren / (1000*60*60*24)))

    let event = new Date()

    console.log("toString " + event.toString());


    console.log("toISOString " + event.toISOString());

    console.log("toDateString " + event.toDateString());

    console.log("toTimeString " + event.toTimeString());


}

window.addEventListener("load", setup);