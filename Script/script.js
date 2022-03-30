let hamburgare = document.querySelector("#hamburgare")
let header = document.querySelector("header")

console.log(hamburgare);
hamburgare.addEventListener("click", () => {
header.classList.toggle ("open")
})