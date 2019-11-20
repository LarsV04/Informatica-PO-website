var navArrows = ['<svg><path d="M0 0 L10 10 L0 20"><path><svg>', '<svg><path d="M10 0 L0 10 L10 20"><path><svg>']
var navright = false

function SetNav() {
    document.getElementById("navbar").classList.toggle("extend")
}

function ChangeArrow() {
    SetNav()

    if (navright == false) {
        document.getElementById("NavPijl").innerHTML = navArrows[1]
        navright = true
    } else if (navright == true) {
        navright = false
        document.getElementById("NavPijl").innerHTML = navArrows[0]
    }
}