console.log("connecté");
/*Menu Burger*/
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the top navigation */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the top navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}
/*mouse-cursor effect*/
document.body.addEventListener("mousemove", function(event){
    const mouseCursor = document.querySelector(".mouse-cursor");
    mouseCursor.style.display = "block";
    mouseCursor.style.top = (event.layerY) + "px";
    mouseCursor.style.left = (event.layerX) + "px";   
})

/*newletter inscription*/
const newsletterSection = document.querySelector(".newsletter")
newsletterSection.addEventListener("submit", function(event){ 
  event.preventDefault();  
  const newsletter = document.querySelector("#inscription");    
  newsletter.value = "Merci ! tu es inscrit.";   
})
function activeForm(){
  const msgAfterDelete = document.querySelector(".msgAfter");
  msgAfterDelete.style.display = "none";
  const submitForm = document.querySelector(".spendMessage");
  submitForm.style.display = "block";
}
function msgTempAfter(){
  const formDelete = document.querySelector(".contactform");
  formDelete.style.display = "none";
  const msgAfter = document.querySelector(".msgAfter");
  msgAfter.style.display = "block";
  setTimeout(activeForm, 3000);
}


/*FORMULAIRE*/
const submitButton = document.querySelector(".contactform");
submitButton.addEventListener("submit", function(clickOnSub) {
  clickOnSub.preventDefault();
  msgTempAfter();  
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