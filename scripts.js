console.log("connecté");
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


/*
for(i=0; i < navBar.length; i++) {
  navBar[i].addEventListener("mouseover", function() {
    mouseCursor.style.transform = "scale(0)";
  })
  navBar[i].addEventListener("mouseout", function(){
    mouseCursor.style.transform = "scale(0.2)";
})}*/
/*Correction bug mouse-cursor lors du hover sur le texttitle*/
let redTitle = document.querySelector("#texttiltle");
  redTitle.addEventListener("mouseover", function() {
    mouseCursor.style.transform = "scale(0)";
  })
  redTitle.addEventListener("mouseout", function(){
    mouseCursor.style.transform = "scale(0.2)";
})



/*newletter inscription   SAVE
document.addEventListener("submit", function(event){ 
  event.preventDefault();  
  const newsletter = document.querySelector("#inscription");    
  newsletter.value = "Merci ! tu es inscrit.";   
});*/
/*newletter inscription
const newsButton = document.querySelector("#inscription");
newsButton.addEventListener("click", function(event){ 
    event.preventDefault();
    const email = document.querySelector("#email");
    const newsletter = document.querySelector("#inscription");
    if(email.value == "")  {
      newsletter.value = "Renseigne ton email."; 
    }
    else {
      newletter.value = "Merci ! tu es inscrit."
    }
      
});*/








/* effet interval "Blur" sur Tilte Page 1 (ko)
const titletext = document.querySelector("#texttiltle");
console.log(titletext.style);
function titleEffect(titletext) {    
    if(titletext.style.filter == "blur(0)"){
        titletext.style.filter = "blur(1px)";
}   else {
        titletext.style.filter = "blur(0)";
}    
};
setInterval(titleEffect, 2000);  */ 