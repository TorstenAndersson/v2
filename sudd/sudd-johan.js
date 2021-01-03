function pageLoaded() {
	document.querySelector(".footerLogoText").innerHTML = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
	var topDiv = document.querySelector(".topDiv");
	console.log("page loaded!");
	topDiv.style.width = "100%";
	topDiv.style.height = "80px";
	
	products = JSON.parse('{"product": [{"name":"Sudd Johan", "description": "OG SUDD", "price":"14,99 kr", "img":"imgs/Sudd/Sudd Johan.png", "link":"sudd/sudd-johan.html"}]}')
}