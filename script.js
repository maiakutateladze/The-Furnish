document.getElementById('sendMessage').addEventListener('click', function(){
    alert("Your message has been sent sucsessfully!");
 });
 // burger bar 


 let navigationElement = document.getElementById("navBar");
 let burgerElement = document.getElementById("burgerBar");

 burgerElement.addEventListener("click", function(){
    navigationElement.classList.toggle("activeNav");
 });