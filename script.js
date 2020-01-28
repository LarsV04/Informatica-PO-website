var xhr = new XMLHttpRequest;

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var WeerData = JSON.parse(this.responseText);
        document.getElementById("weerbericht").innerHTML = "Stationnaam: " + WeerData.actual.stationmeasurements[4].stationname + "<br>Temperatuur: Het is " + WeerData.actual.stationmeasurements[4].temperature + " graden celcius<br>Wind: De richting is " + WeerData.actual.stationmeasurements[4].winddirection  + " met windsnelheid " + WeerData.actual.stationmeasurements[4].windspeed + "<br>Regen: " + WeerData.actual.stationmeasurements[4].rainFallLastHour + "mm het laatste uur en " + WeerData.actual.stationmeasurements[4].rainFallLast24Hour + "mm laatste 24 uur<br>Samenvatting: " + WeerData.actual.stationmeasurements[4].weatherdescription;
    }
}

xhr.open("GET", "https://data.buienradar.nl/2.0/feed/json");
xhr.send();

var navright = true

function SetNav() {
    document.getElementById("navbar").classList.toggle("extend")
    document.getElementById("NavPijl").classList.toggle("left")
}

window.addEventListener('load', () => {
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
    var tothourstxt = "<p>Tijd besteed: " + totUur[0] + " uur en " + totMinuten + " minuten<p>"
    document.getElementById("totuur").innerHTML = tothourstxt
})

window.addEventListener('scroll', () => {
    var Scrollofset = pageYOffset;

    if (Scrollofset == 0){
        document.getElementById("mainheader").classList.add('extended');
    } else if (Scrollofset >= 1) {
        document.getElementById("mainheader").classList.remove('extended');
    }
})