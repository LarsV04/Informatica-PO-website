var navright = true

function SetNav() {
    document.getElementById("navbar").classList.toggle("extend")
    document.getElementById("NavPijl").classList.toggle("left")
}

window.addEventListener('load', () => {
    document.getElementById('footer').innerHTML = '<div class="LinksFooter"><h2>Links</h2><ul><li><a href="./index.html">Home</a></li><li><a href="./p5.html">Persona 5</a></li><li><a href="./dangan.html">Danganronpa: Trigger Happy Havoc</a></li><li><a href="./botw.html">The legend of Zelda: Breath of the Wild</a></li><li><a href="./weer.html">Het weer</a></li><li><a href="./bronnen.html">Bronnen en logboek</a></li><li><a href="./formulier.html">Formulier</a></li><li><a href="https://google.com">Ik wil van deze site weg, breng me naar google</a></li></ul></div><div class="DisclaimerFooter"><h2>Disclaimer</h2>Alles op deze website is mijn mening, dus als je het ergens niet mee eens bent ga dan maar niet bij mij klagen.Als je het toch doet verspil je alleen maar mijn en je eigen tijd en ik ga het toch niet aanpassen.</div><div class="Copyright"><h5>©2019-2020</h5></div>'
    //Hiermee hoef ik alleen elke footer een id te geven en dan komt dit erin te staan, makkelijker om later aan te passen

    document.getElementById("navbar").innerHTML = '<div class="NavtextWrap"><ul><li><a href="./index.html">Home</a></li><li><a href="./p5.html">Persona 5</a></li><li><a href="./dangan.html">Danganronpa: Trigger Happy Havoc</a></li><li><a href="./botw.html">The legend of Zelda: Breath of the Wild</a></li></ul></div><div id="NavPijl"><h2>></h2></div>'
    //hetzelfde maar met de navbar


    try {
        var element = document.getElementsByClassName('time');
        if(element.length == 0) return;
        var totalhours = 0
        for (i = 0; i < element.length; i++) {
            totalhours += Number(element[i].innerText.match(/(\d|\.)+/g))
        }

        var totUur = (totalhours + "").split(".")
        if(totUur[1] === undefined) {
            var totMinuten = 0
        } else {
            var totMinuten = ("0." + totUur[1]) * 60
        }
        var tothourstxt = "<p>Tijd besteed: " + totUur[0] + " uur en " + totMinuten + "     minuten<p> (gemaakt met javascript: lijn 20-36)"
        document.getElementById("totuur").innerHTML = tothourstxt
    } catch {
        return
    }
})

window.addEventListener('scroll', () => {
    try {
        var Scrollofset = pageYOffset;

        if (Scrollofset == 0){
            document.getElementById("mainheader").classList.add('extended');
        } else if (Scrollofset >= 1) {
            document.getElementById("mainheader").classList.remove('extended');
        }
    } catch {
        return
    }
})