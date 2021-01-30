var divs = 0;
var active = true;
var count = 1;
const initalCount = count; 
var divCount = count;
var size;

fetch('https://api.github.com/repos/TorstenAndersson/productServer').then(response=>response.json()).then(data=> {
	if (new Date(data.updated_at).getTime() > localStorage.getItem("lastUpdate")) {
		localStorage.setItem("lastUpdate", new Date(data.updated_at).getTime());
		fetch('https://johanssudd.herokuapp.com/all').then(response=>response.json()).then(data=>localStorage.setItem("productInfo", JSON.stringify(data)))
	}
});
/*
fetch('https://johanssudd.herokuapp.com/products?wanted=onDisplay').then(response=>response.json()).then(products=> {
	for (var i = 0; i < Object.keys(products.items).length; i ++) {
		var myDiv = document.createElement("div");
		myDiv.classList.add("productDiv");
		myDiv.style.order = i;
		var myLink = document.createElement("a");
		myLink.setAttribute("href", products.items[i].link)
		if (products.items[i].price.discount != undefined) {
			var myDiscount = document.createElement("span");
			myDiscount.classList.add("discountReason");
			myDiscount.appendChild(document.createTextNode(products.items[i].price.discount.reason))
			myLink.appendChild(myDiscount);
		}
		var myImage = document.createElement("img");
		myImage.setAttribute("src", products.items[i].img);
		myImage.classList.add("slideshow");
		myLink.appendChild(myImage);
		var myHeader = document.createElement("span");
		myHeader.appendChild(document.createTextNode(products.items[i].name));
		myHeader.classList.add("slideshowHeader");
		myLink.appendChild(myHeader);
		var myMainText = document.createElement("span");
		myMainText.appendChild(document.createTextNode(products.items[i].description));
		myMainText.classList.add("slideshowMainText");
		myLink.appendChild(myMainText);
		var myTextDiv = document.createElement("div");
		myTextDiv.classList.add("slideshowPriceText");
		var myPriceText = document.createElement("span");
		myPriceText.appendChild(document.createTextNode(products.items[i].price.original));
		myPriceText.classList.add("price");
		if (products.items[i].price.discount != undefined) {
			myPriceText.classList.add("line");
			var myDiscountedPriceText = document.createElement("span");
			myDiscountedPriceText.appendChild(document.createTextNode(products.items[i].price.discount.price))
			myDiscountedPriceText.classList.add("price");
			myTextDiv.appendChild(myDiscountedPriceText);
		}
		myTextDiv.appendChild(myPriceText)
		myLink.appendChild(myTextDiv);
		myDiv.appendChild(myLink);
		document.querySelector("div.slideshow").appendChild(myDiv);
	}
	var slideshowDiv = document.querySelector("div.slideshow");
	slideshowDiv.style.width = Object.keys(products.items).length * 100 + "%";
	divs = document.querySelectorAll(".productDiv");
	divs = [...divs];
	size = divs[0].clientWidth;
	slideshowDiv.style.transform = "translateX(" + (-size * count) + "px)";
	setTimeout(function() { slideshowDiv.style.transition = "transform 0.3s ease-in-out"; }, 0); 
	var localCount = 0;
	setInterval(function() { 
		localCount ++;
		if (localCount == 1400) {
			slide("forward");
		}
		if (active == false) {
			active = true;
			localCount = 0;
		}
	}, 1)
});
*/

async function pageLoaded() {
	document.querySelector(".footerLogoText").innerHTML = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
	console.log("page loaded");

	if (localStorage.getItem("productInfo") == undefined) {
		await fetch('https://johanssudd.herokuapp.com/all').then(response=>response.json()).then(data=>localStorage.setItem("productInfo", JSON.stringify(data)))
		fetch('https://api.github.com/repos/TorstenAndersson/productServer').then(response=>response.json()).then(data=>localStorage.setItem("lastUpdate", new Date(data.updated_at).getTime()));
	}

	products = JSON.parse(localStorage.getItem("productInfo"));
	for (var i = 0; i < Object.keys(products.items).length; i ++) {
		var myDiv = document.createElement("div");
		myDiv.classList.add("productDiv");
		myDiv.style.order = i;
		var myLink = document.createElement("a");
		myLink.setAttribute("href", products.items[i].link)
		if (products.items[i].price.discount != undefined) {
			var myDiscount = document.createElement("span");
			myDiscount.classList.add("discountReason");
			myDiscount.appendChild(document.createTextNode(products.items[i].price.discount.reason))
			myLink.appendChild(myDiscount);
		}
		var myImage = document.createElement("img");
		myImage.setAttribute("src", products.items[i].img);
		myImage.classList.add("slideshow");
		myLink.appendChild(myImage);
		var myHeader = document.createElement("span");
		myHeader.appendChild(document.createTextNode(products.items[i].name));
		myHeader.classList.add("slideshowHeader");
		myLink.appendChild(myHeader);
		var myMainText = document.createElement("span");
		myMainText.appendChild(document.createTextNode(products.items[i].description));
		myMainText.classList.add("slideshowMainText");
		myLink.appendChild(myMainText);
		var myTextDiv = document.createElement("div");
		myTextDiv.classList.add("slideshowPriceText");
		var myPriceText = document.createElement("span");
		myPriceText.appendChild(document.createTextNode(products.items[i].price.original));
		myPriceText.classList.add("price");
		if (products.items[i].price.discount != undefined) {
			myPriceText.classList.add("line");
			var myDiscountedPriceText = document.createElement("span");
			myDiscountedPriceText.appendChild(document.createTextNode(products.items[i].price.discount.price))
			myDiscountedPriceText.classList.add("price");
			myTextDiv.appendChild(myDiscountedPriceText);
		}
		myTextDiv.appendChild(myPriceText)
		myLink.appendChild(myTextDiv);
		myDiv.appendChild(myLink);
		document.querySelector("div.slideshow").appendChild(myDiv);
	}
	var slideshowDiv = document.querySelector("div.slideshow");
	slideshowDiv.style.width = Object.keys(products.items).length * 100 + "%";
	divs = document.querySelectorAll(".productDiv");
	divs = [...divs];
	size = divs[0].clientWidth;
	slideshowDiv.style.transform = "translateX(" + (-size * count) + "px)";
	setTimeout(function() { slideshowDiv.style.transition = "transform 0.3s ease-in-out"; }, 0); 
	var localCount = 0;
	setInterval(function() { 
		localCount ++;
		if (localCount == 1400) {
			slide("forward");
		}
		if (active == false) {
			active = true;
			localCount = 0;
		}
	}, 1)
}

var isScrolled = false;

function pageScrolled() {
	var navigationBar = document.querySelector(".navigationBar");
	var topLogoText = document.querySelector(".topLogoText");
	var topLogoTextDiv = document.querySelector(".topLogoTextDiv");
	if (window.pageYOffset > 30) {
		if (isScrolled == false) {
			console.log("now");
			navigationBar.style.position = "fixed";
			navigationBar.style.top = "0px";
			navigationBar.classList.add("backgroundAnimation");
			navigationBar.style.backgroundColor = "rgb(39, 39, 39)";
			navigationBar.classList.remove("backgroundAnimationBack");
			navigationBar.style.zIndex = "2";
			isScrolled = true;
		}
	} 
	if (window.pageYOffset < 30) {
		if (isScrolled == true) {
			console.log("back");
			navigationBar.style.position = "absolute";
			navigationBar.style.top = "30px";
			navigationBar.classList.add("backgroundAnimationBack");
			navigationBar.style.backgroundColor = "transparent";
			navigationBar.classList.remove("backgroundAnimation");
			navigationBar.style.zIndex = "2";
			isScrolled = false;
		}
	}
}

function slide(where) {
	active = false;
	const slider = document.querySelector("div.slideshow");

	if (where == "forward") {
		divs[0].style.order = divs.length - initalCount + count;
		divs.push(divs[0]);
		divs.shift();
		
		slider.style.left = parseInt(slider.style.left.slice(0, -2)) + size + "px";
		divCount ++;
		count ++;
		slider.style.transform = "translateX(" + (-size * count) + "px)";
	}

	if (where == "backward") {
		divs[divs.length - 1].style.order = count - initalCount - 1;
		divs.unshift(divs[divs.length - 1]);
		divs.pop();
		
		slider.style.left = parseInt(slider.style.left.slice(0, -2)) - size + "px";
		divCount ++;
		count --;
		slider.style.transform = "translateX(" + (-size * count) + "px)";
	}
}