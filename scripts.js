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
});
/*newletter inscription*/
document.addEventListener("submit", function(event){ 
    event.preventDefault();  
    const newsletter = document.querySelector("#inscription");    
    newsletter.value = "Merci ! tu es inscrit.";   
});










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