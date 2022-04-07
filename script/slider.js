"use strict";
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
}
document.getElementById("left-button").onclick = () => {
    document.getElementById("vtri").classList.add("vmindre")
    setTimeout(() => {
        changeImage(-1)
        document.getElementById("vtri").classList.remove("vmindre")
    }, 150)
}
document.getElementById("right-button").onclick = () => {
    document.getElementById("right-button").classList.add("hmindre")
    setTimeout(() => {
        changeImage(1)
        document.getElementById("right-button").classList.remove("hmindre")
    }, 150)
}
