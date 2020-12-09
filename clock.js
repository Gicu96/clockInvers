// Selectam data pana la care se va face numararea inversa
let countDownDate = new Date("Dec 31, 2020 15:37:25").getTime();

// facem update la timp fiecare 1 secunda
let x = setInterval(function() {

    // punem data de azi
    let now = new Date().getTime();

    // cautam distants intre timpul de acum si timpul pana la care se face numararea inversa
    let distance = countDownDate - now;

    // Calcularea in timp la zile, ore, minute si secunde
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // punem rezultatele in elementul id
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // Daca ajungem la data pana la care se face numararea inversa apare textul urmator
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Felicitari cu ANUL NOU!!!!!";
    }
}, 1000);