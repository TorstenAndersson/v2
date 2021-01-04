function pageLoaded() {
	document.querySelector(".footerLogoText").innerHTML = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
	//var topDiv = document.querySelector(".topDiv");
	console.log("page loaded!");
	/*
	topDiv.style.width = "100%";
	topDiv.style.height = "80px";
	*/
	
	const product = JSON.parse('{"product": [{"name":"Sudd Johan", "description": "Bara gamla goda Johan.", "price":"14,99 kr", "img":"imgs/Sudd/Sudd Johan.png", "link":"sudd/sudd-johan.html"}]}')

	//https://" + window.location.href.split("/").slice(2, -2).toString() + "/" + product.product[0].img
	document.querySelector(".productImg").setAttribute("src", "../" + product.product[0].img);
	document.querySelector(".productHeader").innerHTML = product.product[0].name;
	document.querySelector(".productDescription").innerHTML = product.product[0].description;
	document.querySelector(".productPriceText").innerHTML = product.product[0].price;
}