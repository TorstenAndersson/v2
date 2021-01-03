function pageLoaded() {
	document.querySelector(".footerLogoText").innerHTML = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
	var topDiv = document.querySelector(".topDiv");
	console.log("page loaded!");
	topDiv.style.width = "100%";
    topDiv.style.height = "80px";
    
	products = JSON.parse('{"products": [{"name":"Sudd Johan", "description": "OG SUDD", "price":"14,99 kr", "img":"imgs/Sudd/Sudd Johan.png", "link":"vara-sudd/sudd-johan.html"}, {"name":"Johans Hoodie", "description": "fyfan va varmt", "price":"499,99 kr", "img":"imgs/Johans Hoodie/Johans Hoodie White Front.jpg", "link":"merchandise/johans-hoodie.html"}, {"name":"Johans Flip-Flops", "description": "LFIPÅPT FLOP", "price":"249,99 kr", "img":"imgs/Johans Flip-Flops/Johans Flip-Flops Medium Above.png", "link":"merchandise/johans-flip-flops.html"}, {"name":"Johans Mobilskal", "description": "Skydda din mobil!", "price":"249,99 kr", "img":"imgs/Johans Mobilskal/Johans Mobilskal iPhone 12 Pro Max.png", "link":"merchandise/johans-mobilskal.html"}]}')

    for (var i = 0; i < Object.keys(products.products).length; i ++) {
		var myDiv = document.createElement("div");
        myDiv.classList.add("paddingDiv");
        document.querySelector("div.mainFrame").appendChild(myDiv);
        var myLink = document.createElement("a");
        myLink.classList.add("productFrame");
		myLink.setAttribute("href", products.products[i].link)
		var myImage = document.createElement("img");
		myImage.setAttribute("src", products.products[i].img);
		myImage.classList.add("productImg");
		myLink.appendChild(myImage);
		var myHeader = document.createElement("span");
		myHeader.appendChild(document.createTextNode(products.products[i].name));
		myHeader.classList.add("productHeader");
		myLink.appendChild(myHeader);
		var myMainText = document.createElement("span");
		myMainText.appendChild(document.createTextNode(products.products[i].price));
		myMainText.classList.add("productPriceText");
		myLink.appendChild(myMainText);
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