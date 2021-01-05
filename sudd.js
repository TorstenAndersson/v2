function pageLoaded() {
	document.querySelector(".footerLogoText").innerHTML = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
	//var topDiv = document.querySelector(".topDiv");
	console.log("page loaded!");
	/*
	topDiv.style.width = "100%";
	topDiv.style.height = "80px";
	*/
    
	//const products = JSON.parse('{"products": [{"name":"Sudd Johan", "description": "OG SUDD", "price": {"discount": {"price": "10,99 kr", "reason": "Fick vibbarna"}, "original": "14, 99 kr"}, "img":"imgs/Sudd/Sudd Johan.png", "link":"sudd/sudd-johan.html"}, {"name":"Johans Hoodie", "description": "fyfan va varmt", "price": {"discount": {"price": "149,99 kr", "reason": "PÅSKREA"}, "original": "499,99 kr"}, "img":"imgs/Johans Hoodie/Johans Hoodie White Front.jpg", "link":"merchandise/johans-hoodie.html"}, {"name":"Johans Flip-Flops", "description": "LFIPÅPT FLOP", "price": {"discount": {"price": "1000,99 kr", "reason": "PÅSKREA"}, "original": "349, 99 kr"}, "img":"imgs/Johans Flip-Flops/Johans Flip-Flops Medium Above.png", "link":"merchandise/johans-flip-flops.html"}, {"name":"Johans Mobilskal", "description": "Skydda din mobil!", "price": {"original": "149,99 kr"}, "img":"imgs/Johans Mobilskal/Johans Mobilskal iPhone 12 Pro Max.png", "link":"merchandise/johans-mobilskal.html"}]}')

	var products;

	/*
	fetch("documents/json.txt")
	.then(x => draw(x.json())
	*/

	fetch('documents/json.txt')
  .then(response => response.json())
  .then(data => products = data);

	//console.log(products)

	//https://gallant-yonath-0ed04b.netlify.app/documents/json.txt

    for (var i = 0; i < Object.keys(products.products).length; i++) {
		var myDiv = document.createElement("div");
        myDiv.classList.add("paddingDiv");
        document.querySelector("div.mainFrame").appendChild(myDiv);
        var myLink = document.createElement("a");
		myLink.classList.add("productFrame");
		myLink.setAttribute("href", products.products[i].link)
		if (products.products[i].price.discount != undefined) {
			var myDiscount = document.createElement("span");
			myDiscount.classList.add("discountReason");
			myDiscount.appendChild(document.createTextNode(products.products[i].price.discount.reason))
			myLink.appendChild(myDiscount);
		}
		var myImage = document.createElement("img");
		myImage.setAttribute("src", products.products[i].img);
		myImage.classList.add("productImg");
		myLink.appendChild(myImage);
		var myHeader = document.createElement("span");
		myHeader.appendChild(document.createTextNode(products.products[i].name));
		myHeader.classList.add("productHeader");
		myLink.appendChild(myHeader);
		var myTextDiv = document.createElement("div");
		var myPriceText = document.createElement("span");
		myPriceText.classList.add("productPriceText");
		myPriceText.appendChild(document.createTextNode(products.products[i].price.original));
		if (products.products[i].price.discount != undefined) {
			myPriceText.classList.add("line");
			var myDiscountedPriceText = document.createElement("span");
			myDiscountedPriceText.appendChild(document.createTextNode(products.products[i].price.discount.price))
			myDiscountedPriceText.classList.add("dicountedPrice");
			myDiscountedPriceText.classList.add("productPriceText");
			myTextDiv.appendChild(myDiscountedPriceText);
		}
		myTextDiv.appendChild(myPriceText)
		myLink.appendChild(myTextDiv);
		myDiv.appendChild(myLink);
	}
}

var isScrolled = false;

function pageScrolled() {
	var topDiv = document.querySelector(".topDiv");
	var topLogoText = document.querySelector(".topLogoText");
	var topLogoTextDiv = document.querySelector(".topLogoTextDiv");
	if (window.pageYOffset > 30) {
		if (isScrolled == false) {
			console.log("now");
			topDiv.style.position = "fixed";
			topDiv.style.top = "0px";
			topDiv.classList.add("backgroundAnimation");
			topDiv.style.backgroundColor = "rgb(39, 39, 39)";
			topDiv.classList.remove("backgroundAnimationBack");
			topDiv.style.zIndex = "2";
			isScrolled = true;
		}
	} 
	if (window.pageYOffset < 30) {
		if (isScrolled == true) {
			console.log("back");
			topDiv.style.position = "absolute";
			topDiv.style.top = "30px";
			topDiv.classList.add("backgroundAnimationBack");
			topDiv.style.backgroundColor = "transparent";
			topDiv.classList.remove("backgroundAnimation");
			topDiv.style.zIndex = "2";
			isScrolled = false;
		}
	}
}