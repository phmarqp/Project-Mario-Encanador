
const form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")

function CliqueiNoBotao() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"

}

function hiddenmascara() {
    form.style.left = "-309px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility =  "hidden"
}