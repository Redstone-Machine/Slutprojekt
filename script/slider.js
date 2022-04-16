"use strict";
let Rubrikex = document.getElementById("rubrik-ex");
let Rubriker = ["Amanda - Din virtuella assistent", "Fyller någon år idag?", "Dina gympass - Sparade", "Gratta dina kontakter - På deras namnsdag"];
let Underex = document.getElementById("under-ex");
let Texter = ["Amanda är en Virtuell Assistent programmerad i genvängar, som är anpassningsbar, kan svara på många frågor och hjälpa dig i vardagen. Du kan också ladda ner extensions och skapa moln extensions till henne. Det är en komplett assistent som sparar inställningar och generella val i filer appen.", "Din andra textis", "Din andra jag menar tredje teeeexten", "Den faktiskt fjärde loremen"];

var imageCounter = 1;
showDiv(imageCounter);
function changeImage(m) {
    showDiv(imageCounter = imageCounter + m);
}
function showDiv(n) {
    var i;
    var imageArray = document.getElementsByClassName("ExempelSlide-position");
    if (n > imageArray.length) {
        imageCounter = 1;
    }
    if (n < 1) {
        imageCounter = imageArray.length;
    }
    for (i = 0; i < imageArray.length; i++) {
        imageArray[i].classList.add("remove-picture");
    }
    imageArray[imageCounter - 1].classList.remove("remove-picture");
    Rubrikex.innerText = Rubriker[imageCounter-1]
    Underex.innerText = Texter[imageCounter-1]
}
document.getElementById("left-button").onclick = () => {
    document.getElementById("vtri").classList.add("vmindre")
    document.getElementById("vcir").classList.add("vmindrecir")
    setTimeout(() => {
        changeImage(-1)
        document.getElementById("vtri").classList.remove("vmindre")
        document.getElementById("vcir").classList.remove("vmindrecir")
    }, 150)
}
document.getElementById("right-button").onclick = () => {
    document.getElementById("htri").classList.add("hmindre")
    document.getElementById("hcir").classList.add("hmindrecir")
    setTimeout(() => {
        changeImage(1)
        document.getElementById("htri").classList.remove("hmindre")
        document.getElementById("hcir").classList.remove("hmindrecir")
    }, 150)
}
