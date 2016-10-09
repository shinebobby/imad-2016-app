console.log('Loaded!');

// Change the Main Text Div
var element = document.getElementById("main-text");

element.innerHTML = "New Value";

// Move Image

var img = document.getElementById("madi");

img.onClick = function(){
    img.style.marginLeft = '200px';
};