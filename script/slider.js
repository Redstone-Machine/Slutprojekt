"use strict";
let Rubrikex = document.getElementById("rubrik-ex");
let Rubriker = ["Amanda - Din virtuella assistent", "Fyller någon år idag?", "Dina gympass - Sparade", "Gratta dina kontakter - På deras namnsdag"];
let Underex = document.getElementById("under-ex");
let Texter = ["Amanda är en Virtuell Assistent programmerad i genvängar, som är anpassningsbar, kan svara på många frågor och hjälpa dig i vardagen. Du kan också ladda ner extensions och skapa moln extensions till henne. Det är en komplett assistent som sparar inställningar och generella val i filer appen.", "Det här kommandot kommer söka igenom alla dina kontakter och kolla om du registrerat en födelsedag på någon av kontakterna den dagen. Om någon fyller år får du en notis där du kan skicka ett automatiskt grattis meddelande till personen. I standard meddelandet står det //Lo i slutet, men det kan du ändra i kommandot. Om du sätter kommandot i ett Kör genväg block från automatiseringar kan du till exempel få telefonen att skicka en notis om folks födelsedagar varje morgon.", "Gympass är ett avancerat kommando för att spara din gymhistorik. Det är ett enkelt kommando där du startar kommandot, kan välja Registrera gett gympass, för att sedan låta kommandot spara all tidsinformation. Genom att använda Se historik kan du senare se en grafiskframställning av alla dina registrerade gympass. För att den ska kunna använda dess avancerade bild representation behöver du album med namnet Siffror LM med bilder av siffrorna 1-9 sedan 0, en tom bild och ett kolon. Sedan väljer det här albumet i genvägens kodning under Se historik. Kommandot tar också säkerhetskopior av din historik varje vecka och ger dig ett lätt sätt att ta tillbaka kopiorna. Du kan också använda ett lätt använt gränsnitt för att ta bort vissa gympass.", "Namnsdagskommandot liknar födelsedagskommandot och kollar alla dina kontakters inlagda förnamn, mellannamn och efternamns och ser om det är samma som någon av dagens namnsdag. Om någon har namnsdag får du en notis och du får möjlighet att gratta personen genom ett knapptryck. Kommandot gör detta genom en inbyggd lista med namnsdagarna för varje personer under varje dag av året. Det kan självklart integreras med en automation och kan på så sätt köras automatiskt när du till exempel stänger av alarmet. Den ger dig en notis som berättar om dagens namnsdag och om någon av dina kontakter har namnsdag."];

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
