var boxes = document.querySelectorAll(".box");
var display = document.querySelector("#displayColor");
var num = 6;
var colors = colorlist(num);
var pickedColor = random(colors);
var noti = document.querySelector("#noti");
var reset = document.querySelector("#reset");
var hard = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



easyBtn.addEventListener("click", function(){
	this.classList.add("special");
	hardBtn.classList.remove("special");
});
hardBtn.addEventListener("click", function(){
	this.classList.add("special");
	easyBtn.classList.remove("special");
});

reset.addEventListener("click", function(){
	init();
	game();
});

init();
game();

function init(){
	h1.style.background = "STEELBLUE";
	noti.textContent = "";
	reset.textContent = "new color";
	num = 6;
	colors = colorlist(num);
	pickedColor = random(colors);
	display.textContent = pickedColor;
	console.log(pickedColor);
	console.log(colors);
}

function game(){
	for (var i = boxes.length - 1; i >= 0; i--) {
		boxes[i].style.background = colors[i];
		boxes[i].addEventListener("click",function(){
				if (this.style.background === pickedColor) {
					noti.textContent = "Correct!";
					changeAllColor(boxes);
					h1.style.background = pickedColor;
					reset.textContent = "Play Again?";
				}else{
					noti.textContent = "Wrongs!!";
					this.style.background = "DIMGRAY";
				}
		});
	}	
}


function colorlist(num){
	var colors = [];
	for (var i = num - 1; i >= 0; i--) {
		colors.push(createcolor());
	}
	return colors;
}

function createcolor(){
	var r = Math.floor(Math.random()*255 +1);
	var g = Math.floor(Math.random()*255 +1);
	var b = Math.floor(Math.random()*255 +1);
	return "rgb("+r+", "+g+", "+b+")";
}


function random(colors){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function changeAllColor(boxes){
	for (var i = boxes.length - 1; i >= 0; i--) {
		boxes[i].style.background = pickedColor;
	}
}




































