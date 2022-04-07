let hamburgare = document.querySelector("#hamburgare")
let header = document.querySelector("header")

hamburgare.addEventListener("click", () => {
    header.classList.toggle("open")
})
document.addEventListener("mousedown", (event) => {
    if(!header.contains(event.target)) {
        header.classList.remove("open")
    }
})