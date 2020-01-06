var navright = true

function SetNav() {
    document.getElementById("navbar").classList.toggle("extend")
    document.getElementById("NavPijl").classList.toggle("left")
    var formhtml = document.getElementById("Form").innerHTML
    globalThis(formhtml)
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