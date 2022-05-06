console.log("connecté");
const mouseCursor = document.querySelector(".mouse-cursor");
console.log(mouseCursor);

document.body.addEventListener("mousemove", function(event){
    const mouseCursorTop = event.clientY;
    const mouseCursorLeft = event.clientX;
    mouseCursor.style.top = mouseCursorTop + "px";
    mouseCursor.style.left = mouseCursorLeft + "px";   
})







/*function getMouseCoords(e) {
  var e = e || window.event;
  document.getElementById('msg').innerHTML = e.clientX + ', ' + 
           e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
};


var followCursor = (function() {
  var s = document.createElement('div');
  s.style.position = 'absolute';
  s.style.width = "25px";
  s.style.height = "25px";
  s.style.margin = '0';
  s.style.padding = '5px';
  s.style.background = 'white';
  s.style.opacity = "0.1";
  s.style.borderRadius = "80%";

  return {
    init: function() {
      document.body.appendChild(s);
    },

    run: function(e) {
      var e = e || window.event;
      s.style.left  = (e.clientX - 15) + 'px';
      s.style.top = (e.clientY - 15) + 'px';
      getMouseCoords(e);
    }
  };
}());

window.onload = function() {
  followCursor.init();
  document.body.onmousemove = followCursor.run;
};*/