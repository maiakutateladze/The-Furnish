
// burger bar 
let navigationElement = documnet.getElementByID("navBar");
let burgerElement = document.getElementById("burgerBar");

burgerElement.addEventListener("click", function () {
    navigationElement.classList.toggle("activeNav")
});