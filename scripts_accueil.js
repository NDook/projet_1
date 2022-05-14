console.log("script_accueil.js connecté")
/*Correction bug mouse-cursor lors du hover sur le texttitle*/
let redTitle = document.querySelector("#texttiltle");
  redTitle.addEventListener("mouseover", function() {
    mouseCursor.style.transform = "scale(0)";
  })
  redTitle.addEventListener("mouseout", function(){
    mouseCursor.style.transform = "scale(0.2)";
})