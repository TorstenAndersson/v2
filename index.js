var divs;
var active = true;
var count = 1;
const initalCount = count; 
var divCount = count;
var size;

function pageLoaded() {
	var slideshowDiv = document.querySelector("div.slideshow");
	divs = document.querySelectorAll(".productDiv");
	divs = [...divs];
	size = divs[0].clientWidth;
	slideshowDiv.style.transform = "translateX(" + (-size * count) + "px)";
	setTimeout(function() { slideshowDiv.style.transition = "transform 0.3s ease-in-out"; }, 0); 
	var localCount = 0;
	setInterval(function() { 
		localCount ++;
		if (localCount === 1400) {
			slide("forward");
		}
		if (!active) {
			active = true;
			localCount = 0;
		}
	}, 1)
	document.querySelector(".footerText").innerHTML = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
}

var isScrolled = false;

function pageScrolled() {
	var navigationBar = document.querySelector(".navigationBar");
	if (window.pageYOffset > 30) {
		if (!isScrolled) {
			navigationBar.style.position = "fixed";
			navigationBar.style.top = "0px";
			navigationBar.style.backgroundColor = "rgb(39, 39, 39)";
			isScrolled = true;
		}
	} 
	if (window.pageYOffset < 30) {
		if (isScrolled) {
			navigationBar.style.position = "absolute";
			navigationBar.style.top = "30px";
			navigationBar.style.backgroundColor = "transparent";
			isScrolled = false;
		}
	}
}

function slide(where) {
	active = false;
	const slider = document.querySelector("div.slideshow");

	if (where === "forward") {
		divs[0].style.order = divs.length - initalCount + count;
		divs.push(divs[0]);
		divs.shift();
		
		slider.style.left = +slider.style.left.slice(0, -2) + size + "px";
		divCount ++;
		count ++;
		slider.style.transform = "translateX(" + (-size * count) + "px)";
	}

	if (where === "backward") {
		divs[divs.length - 1].style.order = count - initalCount - 1;
		divs.unshift(divs[divs.length - 1]);
		divs.pop();
		
		slider.style.left = +slider.style.left.slice(0, -2) - size + "px";
		divCount ++;
		count --;
		slider.style.transform = "translateX(" + (-size * count) + "px)";
	}
}