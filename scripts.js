/*mouse-cursor effect*/
console.log("connecté");
const mouseCursor = document.querySelector(".mouse-cursor");

document.body.addEventListener("mousemove", function(event){
    mouseCursor.style.top = (event.layerY) + "px";
    mouseCursor.style.left = (event.layerX) + "px";   
});

/* effet interval "Blur" sur Tilte Page 1 (ko)
const titletext = document.querySelector(".texttiltle");

function titleEffect(titletext) {    
    if(titletext.style.filter == "none"){
        titletext.style.filter = "blur(1px)";
}   else {
        titletext.style.filter = "none";
}    
};
setInterval(titleEffect, 2000);*/ 

/*newletter inscription*/
document.addEventListener("submit", function(event){ 
    event.preventDefault(); /*problème event defaut*/ 
    const newsletter = document.querySelector("#inscription");    
    newsletter.value = "Inscription envoyée !";   
});