var navright = true
var navArrows = ['<svg><path d="M0 0 L10 10 L0 20"><path><svg>', '<svg><path d="M10 0 L0 10 L10 20"><path><svg>']

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
    var totMinuten = ("0." + totUur[1]) * 60
    var tothourstxt = "<p>Tijd besteed: " + totUur[0] + " uur en " + totMinuten + " minuten<p>"
    document.getElementById("totuur").innerHTML = tothourstxt
})

function ResetForm() {
    var formhtml = 'Naam:<br>\n<input type="text" name="Fullname" value=""><br><br>\nLeeftijd:<br>\n<input type="number" name="Age" value="0" min="0"><br><br>\n<input type="radio" name="gender" value="male" checked> Man<br>\n<input type="radio" name="gender" value="female"> Vrouw<br>\n<input type="radio" name="gender" value="other"> Anders <br><br>\nWaarmee kom je naar school:<br>\n<input type="checkbox" name="" value="Bike"> Met de fiets<br>\n<input type="checkbox" name="" value="Car"> Met de auto<br>\n<input type="checkbox" name="" value="Walk"> Lopend<br>\n<input type="checkbox" name="" value="Other"> Anders<br>'
    document.getElementById("Form").innerHTML = formhtml
}