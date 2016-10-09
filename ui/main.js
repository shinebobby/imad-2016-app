console.log('Loaded!');

// Change the Main Text Div
var element = document.getElementById("main-text");

element.innerHTML = "New Value";

// Move Image

var img = document.getElementById("madi");
var marginLeft = 0;
function moveRight(){
  marginLeft = marginLeft + 1;
  img.style.marginLeft = marginLeft + 'px';
}
img.onClick = function(){
   setInterval(moveRight, 50);
};