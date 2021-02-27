var divs;
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
	/*
	smallImgs = Array.prototype.slice.call(document.querySelectorAll(".smallProductFrame"));
	for (const i in smallImgs) {
		smallImgs[i].addEventListener("mouseover", () => {
			for (const i2 in document.querySelectorAll(".smallProductFrame")) {
				smallImgs[i2].classList.remove("selected");
			}
			smallImgs[i].classList.add("selected");
		})
	}
	*/
}

function smallImgHovered(sender) {
	for (const i2 in Array.prototype.slice.call(document.querySelectorAll(".smallProductFrame"))) {
		Array.prototype.slice.call(document.querySelectorAll(".smallProductFrame"))[i2].classList.remove("selected");
	}
	sender.classList.add("selected");
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