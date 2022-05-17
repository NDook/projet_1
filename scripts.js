/*Menu Burger*/
var sidenav = document.querySelector("#mySidenav");
var openBtn = document.querySelector(".burger-icon");
var closeBtn = document.querySelector("#closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the height of the top navigation */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the height of the top navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}
/*mouse-cursor effect*/
document.body.addEventListener("mousemove", function(event){
    let mouseCursor = document.querySelector(".mouse-cursor");
    mouseCursor.style.display = "block";
    mouseCursor.style.top = (event.layerY) + "px";
    mouseCursor.style.left = (event.layerX) + "px";   
})


  /*newletter inscription*/
/*---------bouton newsletter footer-----------*/
const newsletterSection = document.querySelector(".newsletter")
newsletterSection.addEventListener("submit", function(event){ 
  event.preventDefault();  
  const newsletter = document.querySelector("#inscription"); 
  const btnNewslet = document.querySelector(".submit")
  const email = document.querySelector(".email");
  email.style.transition = "1s";
  btnNewslet.style.transition = "1s";
  btnNewslet.style.width = "80%";
  email.style.width = "0";

  newsletter.value = "Merci ! tu es inscrit.";   
})

/*Correction bug mouse-cursor lors du over sur les menu nav*/
let navBar = document.querySelectorAll(".menu");
let mouseCursor = document.querySelector(".mouse-cursor");

function mouseUp(event) {event.addEventListener("mouseover", function() {
  mouseCursor.style.transform = "scale(0)";
})}
function mouseDown(event) {event.addEventListener("mouseout", function() {
  mouseCursor.style.transform = "scale(0.2)";
})}
function mouseUpDown (callback, array) {
  array.forEach(event => callback(event));
}
mouseUpDown(mouseUp, navBar);
mouseUpDown(mouseDown, navBar);





/* boucle for pour la correction bug souris
for(i=0; i < navBar.length; i++) {
  navBar[i].addEventListener("mouseover", function() {
    mouseCursor.style.transform = "scale(0)";
  })
  navBar[i].addEventListener("mouseout", function(){
    mouseCursor.style.transform = "scale(0.2)";
})}*/