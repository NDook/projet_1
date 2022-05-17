/*Correction bug mouse-cursor lors du over sur le text area*/
let textArea = document.querySelector("#message");
  textArea.addEventListener("mouseover", function() {
    mouseCursor.style.transform = "scale(0)";
  })
  textArea.addEventListener("mouseout", function(){
    mouseCursor.style.transform = "scale(0.2)";
})

/*CREATION DES ELEMENTS APRES SOUMMISSION DU FORMULAIRE */
const formElement = document.querySelector(".contact");
/*Création div pour msg d'attente */
const ballElement = document.createElement("div");
ballElement.classList.add("pointDiv");
formElement.appendChild(ballElement);
/*création ball 1 */
const spanFirst = document.createElement("span");
spanFirst.classList.add("msgAfter");
ballElement.appendChild(spanFirst);
/*création ball 2 */
const spanSecond = document.createElement("span");
spanSecond.classList.add("msgAfter1");
ballElement.appendChild(spanSecond);
/*création ball 3 */
const spanThird = document.createElement("span");
spanThird.classList.add("msgAfter2");
ballElement.appendChild(spanThird);

/*création div pour message envoyé */
const spendMsg = document.createElement("div");
spendMsg.classList.add("spendMessage");
formElement.appendChild(spendMsg);
/*création du titre */
const spendMsgTitle = document.createElement("h2");
spendMsgTitle.classList.add("titlespend");

spendMsg.appendChild(spendMsgTitle);
/*création du paragraphe */
const spendMsgParag = document.createElement("p");
spendMsgParag.classList.add("spendMessageParag");
spendMsgParag.innerHTML = "- La Team Crossfift Hero  va prendre contact avec toi.- \<br>\🔥 A très vite ! 🔥"
spendMsg.appendChild(spendMsgParag);


/* récuperer mon Formulaire dans une variable */
const contactForm = document.querySelector(".contactform"); 
/*Evenement à la soumission du formulaire */
contactForm.addEventListener("submit", function(clickOnSub){
  clickOnSub.preventDefault();
  
  activeDisplayTemp()
})
/* fonction pour activer et désactiver les display */
function activeDisplayTemp () {
  contactForm.style.display = "none";
  ballElement.style.display = "flex";
  setTimeout(activeDisplaySpend, 2000);
}
function activeDisplaySpend () {
  ballElement.style.display = "none";
  const firstName = document.querySelector("#firstname").value;
  spendMsgTitle.innerHTML = `Merci ${firstName} !\<br>\ Ton message est transmis à notre équipe.`;
  spendMsg.style.display = "block";
}




/*FORMULAIRE
function activeForm(){ /* desactiver section attente pour activer "message envoyé"
  const msgAfterDelete = document.querySelector(".pointDiv");
  msgAfterDelete.style.display = "none";
  const submitForm = document.querySelector(".spendMessage");
  submitForm.style.display = "block";
}
function msgTempAfter(){/* desactiver le formulaire pour activer "message envoyé" delai de 2s
  const formDelete = document.querySelector(".contactform");
  formDelete.style.display = "none";
  const msgAfter = document.querySelector(".pointDiv");
  msgAfter.style.display = "flex";
  setTimeout(activeForm, 2000);
}
const submitButton = document.querySelector(".contactform"); /* action 1 lors de la soumission du formaulaire
submitButton.addEventListener("submit", function(clickOnSub) {
  clickOnSub.preventDefault();
  msgTempAfter();  
})*/


/*-----------test fct form -----------
const submitButton = document.querySelector(".contactform")
const msgAfterDelete = document.querySelector(".pointDiv");
const submitForm = document.querySelector(".spendMessage");
const formDelete = document.querySelector(".contactform");
const msgAfter = document.querySelector(".pointDiv");
/*quand je soumets le formulaire : formDelete : none et msgAfter + timeOut 2s 
function eventOn(element, status, eventOn) {
  element.style.diplay = status;
}
function eventOff(element, status, eventOn) {
  element.style.diplay = status;
}

function submitForm(callback, )

function mouseDown(event) {event.addEventListener("mouseout", function() {
  mouseCursor.style.transform = "scale(0.2)";
})}
function mouseUpDown (callback, array) {
  array.forEach(event => callback(event));
}
mouseUpDown(mouseUp, navBar);
mouseUpDown(mouseDown, navBar);

/*function desactiveContent(clickOn, clickOff) {
  clickOn.style.display = "none";
  clickOff.style.display = "block";
}
const msgAfterDelete = document.querySelector(".pointDiv");
const submitForm = document.querySelector(".spendMessage");
const formDelete = document.querySelector(".contactform");
const msgAfter = document.querySelector(".pointDiv");

const submitButton = document.querySelector(".contactform"); /* action 1 lors de la soumission du formaulaire
submitButton.addEventListener("submit", function(clickOnSub) {
  clickOnSub.preventDefault()
  desactiveContent(formDelete, msgAfter);
  setTimeout(desactiveContent, 2000);
  desactiveContent(msgAfterDelete, submitForm);
})*/




