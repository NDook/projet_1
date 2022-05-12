console.log("script contact connecté");

/*FORMULAIRE*/
function activeForm(){ /* desactiver section attente pour activer "message envoyé"*/
  const msgAfterDelete = document.querySelector(".pointDiv");
  msgAfterDelete.style.display = "none";
  const submitForm = document.querySelector(".spendMessage");
  submitForm.style.display = "block";
}
function msgTempAfter(){/* desactiver le formulaire pour activer "message envoyé" delai de 2s*/
  const formDelete = document.querySelector(".contactform");
  formDelete.style.display = "none";
  const msgAfter = document.querySelector(".pointDiv");
  msgAfter.style.display = "flex";
  setTimeout(activeForm, 2000);
}
const submitButton = document.querySelector(".contactform"); /* action 1 lors de la soumission du formaulaire*/
submitButton.addEventListener("submit", function(clickOnSub) {
  clickOnSub.preventDefault();
  msgTempAfter();  
})
/*Correction bug mouse-cursor lors du over sur le text area*/
let textArea = document.querySelector("#message");
  textArea.addEventListener("mouseover", function() {
    mouseCursor.style.transform = "scale(0)";
  })
  textArea.addEventListener("mouseout", function(){
    mouseCursor.style.transform = "scale(0.2)";
})