var navright = true
var navArrows = ['<svg><path d="M0 0 L10 10 L0 20"><path><svg>', '<svg><path d="M10 0 L0 10 L10 20"><path><svg>']

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
    var totMinuten = ("0." + totUur[1]) * 60
    var tothourstxt = "<p>Tijd besteed: " + totUur[0] + " uur en " + totMinuten + " minuten<p>"
    document.getElementById("totuur").innerHTML = tothourstxt
})

function SendForm() {
    var FullName = document.getElementById("Fullname").value
    var Age = document.getElementById("Age").value
    console.log(FullName)
    console.log(Age)
}

function ResetForm() {
    document.getElementById("Form").innerHTML = formhtml
}