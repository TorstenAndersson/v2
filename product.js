var divs;
var active = true;
var count = 1;
const initalCount = count; 
var divCount = count;
var size;

function pageLoaded() {
	try {
		document.querySelector(".cartItemsNumber").innerHTML = "(" + (localStorage["cart"].slice(4).split(",").length - 1) + ")";
		document.querySelector(".cartItemsNumber").style.visibility = "visible";
	} catch (TypeError) {
		document.querySelector(".cartItemsNumber").innerHTML = null;
	}
	document.querySelector(".footerLogoText").innerHTML = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
	var slideshowDiv = document.querySelector("div.slideshow");
	slideshowDiv.style.transform = "translateX(" + (-size * count) + "px)";
	setTimeout(function() { slideshowDiv.style.transition = "transform 0.3s ease-in-out"; }, 0); 
	divs = document.querySelectorAll(".imgFrame");
	divs = [...divs];
	size = divs[0].clientWidth;
}

function slide(where) {
	active = false;
	const slider = document.querySelector("div.slideshow");

	if (where === "forward") {
		//divs[0].style.order = divs.length - initalCount + count;
		//divs.push(divs[0]);
		//divs.shift();
		
		slider.style.left = parseInt(slider.style.left.slice(0, -2)) + size + "px";
		divCount ++;
		count ++;
		slider.style.transform = "translateX(" + (-size * count) + "px)";
	}

	if (where === "backward") {
		//divs[divs.length - 1].style.order = count - initalCount - 1;
		//divs.unshift(divs[divs.length - 1]);
		//divs.pop();
		
		slider.style.left = parseInt(slider.style.left.slice(0, -2)) - size + "px";
		divCount ++;
		count --;
		slider.style.transform = "translateX(" + (-size * count) + "px)";
	}
}

function buy(sender) {
	localStorage.setItem("cart", localStorage.getItem("cart") + sender.parentElement.parentElement.firstElementChild.innerHTML + ",");
	var cartItems = document.querySelector(".cartItemsNumber");
	cartItems.innerHTML = "(" + (localStorage.getItem("cart").slice(4).split(",").length - 1) + ")";
	cartItems.classList.add("shakeAnimation");
	setTimeout(function() {cartItems.classList.remove("shakeAnimation")}, 500)
	if (localStorage.getItem("cart").slice(4).split(",").length - 1 === 1) {
		cartItems.style.visibility = "visible";
	}
	/*
	retrive cart items (leaves one empty at end): localStorage.getItem("cart").slice(4).split(",").slice(0, -1); 
	retrive cart length: localStorage.getItem("cart").slice(4).split(",").length - 1
	*/
	var notification = document.querySelector(".notification");
	notification.style.opacity = "1";
	notification.classList.remove("fadeOut");
	notification.classList.add("fadeIn");
	setTimeout(function() { 
		notification.classList.remove("fadeIn");
		notification.classList.add("fadeOut");
		notification.style.opacity = "0";
	}, 5000);
}