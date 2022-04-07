"use strict";
let Rubrikex = document.getElementById("rubrik-ex");
let Rubriker = ["Din första rubrik", "Din andra rubrik", "Din fjärde jag menade tredje rubrik", "Den faktiskt fjärde rubrikisen"];
let Underex = document.getElementById("under-ex");
let Texter = ["Din första text", "Din andra textis", "Din andra jag menar tredje teeeexten", "Den faktiskt fjärde loremen"];

var imageCounter = 1;
showDiv(imageCounter);
function changeImage(m) {
    showDiv(imageCounter = imageCounter + m);
}
function showDiv(n) {
    var i;
    var imageArray = document.getElementsByClassName("ExempelSlide");
    if (n > imageArray.length) {
        imageCounter = 1;
    }
    if (n < 1) {
        imageCounter = imageArray.length;
    }
    for (i = 0; i < imageArray.length; i++) {
        imageArray[i].style.display = "none";
    }
    imageArray[imageCounter - 1].style.display = "block";
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
