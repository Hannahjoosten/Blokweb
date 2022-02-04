var button = document.getElementById("menuknop");
var element = document.querySelector("article");
var kruisje = document.getElementById("kruisje");
button.addEventListener("click", function() {
    element.classList.toggle("zichtbaar");
})

kruisje.addEventListener("click", function() {
        element.classList.toggle("zichtbaar")}