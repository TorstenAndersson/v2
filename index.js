var divs = 0;
var active = true;
var count = 1;
const initalCount = count; 
var divCount = count;
var size;


function pageLoaded() {
	document.querySelector(".footerLogoText").innerHTML = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
	//var topDiv = document.querySelector(".topDiv");
	console.log("page loaded!");
	/*
	topDiv.style.width = "100%";
	topDiv.style.height = "80px";
	*/

	// var products = "";
	
	/*
	fetch("https://objective-gates-c91be9.netlify.app/json.txt", {
		headers: { "Content-type": "application/json" }
	})
	.then(function(response) {
		console.log(response);
	});
	*/
	//products = JSON.parse("{'products': {'name':'Sudd Johan', 'description': 'OG SUDD', 'price':'14,99 kr', 'img':'imgs/Sudd/Sudd Johan.png', 'link':'vara-sudd/sudd-johan.html'}, {'name':'Johans Hoodie', 'description': 'fyfan va varmt', 'price':'499,99 kr', 'img':'imgs/Johans Hoodie/Johans Hoodie White Front.png', 'link':'merchandise/johans-hoodie.html'}, {'name':'Johans Flip-Flops', 'description': 'OG SUDD', 'price':'14,99 kr', 'img':'imgs/Sudd/Sudd Johan.png', 'link':'vara-sudd/sudd-johan.html'}}");
	
	
	/*	'{"employees":[\
 	{ "firstName":"John", "lastName":"Doe" },\
  	{ "firstName":"Anna", "lastName":"Smith" },\
  	{ "firstName":"Peter", "lastName":"Jones" }\
	]}')
	*/


	const products = JSON.parse('{"products": [{"name":"Sudd Johan", "description": "OG SUDD", "price": {"discount": {"price": "10,99 kr", "reason": "Fick vibbarna"}, "original": "14, 99 kr"}, "img":"imgs/Sudd/Sudd Johan.png", "link":"vara-sudd/sudd-johan.html"}, {"name":"Johans Hoodie", "description": "fyfan va varmt", "price": {"discount": {"price": "149,99 kr", "reason": "PÅSKREA"}, "original": "499,99 kr"}, "img":"imgs/Johans Hoodie/Johans Hoodie White Front.jpg", "link":"merchandise/johans-hoodie.html"}, {"name":"Johans Flip-Flops", "description": "LFIPÅPT FLOP", "price": {"discount": {"price": "1000,99 kr", "reason": "PÅSKREA"}, "original": "349, 99 kr"}, "img":"imgs/Johans Flip-Flops/Johans Flip-Flops Medium Above.png", "link":"merchandise/johans-flip-flops.html"}, {"name":"Johans Mobilskal", "description": "Skydda din mobil!", "price": {"original": "149,99 kr"}, "img":"imgs/Johans Mobilskal/Johans Mobilskal iPhone 12 Pro Max.png", "link":"merchandise/johans-mobilskal.html"}]}')
	console.log(products.products);

		/*
	const links = ["sudd/sudd-johan.html", "merchandise/johans-hoodie.html", "merchandise/johans-keps.html", "merchandise/johans-flip-flops.html", "merchandise/johans-mobilskal.html"];
	const imgs = ["imgs/Sudd/Sudd Johan.png", "imgs/Johans Hoodie/Johans Hoodie White Front.jpg", "imgs/Johans Keps/Johans Keps White Front.png", "imgs/Johans Flip-Flops/Johans Flip-Flops Large Above.png", "imgs/Johans Mobilskal/Johans Mobilskal iPhone 12 Pro Max.png"];
	const products = ["Sudd Johan", "Johans Hoodie", "Johans Keps", "Johans Flip-Flops", "Johans Mobilskal"];
	const descriptions = ["Suddet från de gamla goda dagarna!", "För alla er som uppskattar ännu ett lager runt kroppen!", "Om du bara önskade solen skulle explodera!", "Flippy Floppy!", "När du vill skydda din telefon men ändå verka cool!"];
	const prices = ["14,99 kr", "499,99 kr", "199,99 kr", "299,99 kr", "199,99 kr"];
	*/
	for (var i = 0; i < Object.keys(products.products).length; i ++) {
		var myDiv = document.createElement("div");
		myDiv.classList.add("productDiv");
		myDiv.style.order = i;
		document.querySelector("div.slideshow").appendChild(myDiv);
		var myLink = document.createElement("a");
		myLink.setAttribute("href", products.products[i].link)
		if (products.products[i].price.discount != undefined) {
			var myDiscount = document.createElement("span");
			myDiscount.classList.add("discountReason");
			myDiscount.appendChild(document.createTextNode(products.products[i].price.discount.reason))
			myLink.appendChild(myDiscount);
		}
		var myImage = document.createElement("img");
		myImage.setAttribute("src", products.products[i].img);
		myImage.classList.add("slideshow");
		myLink.appendChild(myImage);
		var myHeader = document.createElement("span");
		myHeader.appendChild(document.createTextNode(products.products[i].name));
		myHeader.classList.add("slideshowHeader");
		myLink.appendChild(myHeader);
		var myMainText = document.createElement("span");
		myMainText.appendChild(document.createTextNode(products.products[i].description));
		myMainText.classList.add("slideshowMainText");
		myLink.appendChild(myMainText);
		var myTextDiv = document.createElement("div");
		myTextDiv.classList.add("slideshowPriceText");
		var myPriceText = document.createElement("span");
		myPriceText.appendChild(document.createTextNode(products.products[i].price.original));
		if (products.products[i].price.discount != undefined) {
			myPriceText.classList.add("line");
			var myDiscountedPriceText = document.createElement("span");
			myDiscountedPriceText.appendChild(document.createTextNode(products.products[i].price.discount.price))
			myDiscountedPriceText.classList.add("dicountedPrice");
			myTextDiv.appendChild(myDiscountedPriceText);
		}
		myTextDiv.appendChild(myPriceText)
		myLink.appendChild(myTextDiv);
		myDiv.appendChild(myLink);
	}
	var headers = document.querySelectorAll(".slideshowHeader");
	var mainText = document.querySelectorAll(".slideshowMainText");
	var priceText = document.querySelectorAll(".slideshowPriceText");
	for (var i = 0; i < headers.length; i ++) {
		headers[i].style.width = 100 / headers.length + "%";
		mainText[i].style.width = 100 / mainText.length + "%";
		priceText[i].style.width = 100 / mainText.length + "%";
	}
	var slideshowDiv = document.querySelector("div.slideshow");
	slideshowDiv.style.width = Object.keys(products.products).length * 100 + "%";
	divs = document.querySelectorAll(".productDiv");
	divs = [...divs];
	size = divs[0].clientWidth;
	slideshowDiv.style.transform = "translateX(" + (-size * count) + "px)";
	setTimeout(function() { slideshowDiv.style.transition = "transform 0.3s ease-in-out"; }, 0); 
	var localCount = 0;
	/*
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
	*/
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


function slide(where) {
	active = false;
	const slider = document.querySelector("div.slideshow");

	if (where == "forward") {
		divs[0].style.order = divs.length - initalCount + count;
		divs.push(divs[0]);
		divs.shift();
		/*
		divs[0] = null;
		divs = divs.filter(val => val != null);
		*/
		
		slider.style.left = parseInt(slider.style.left.slice(0, -2)) + size + "px";
		divCount ++;
		count ++;
		slider.style.transform = "translateX(" + (-size * count) + "px)";
	}

	if (where == "backward") {
		divs[divs.length - 1].style.order = count - initalCount - 1;
		divs.unshift(divs[divs.length - 1]);
		divs.pop();
		/*
		divs[divs.length - 1] = null;
		divs = divs.filter(val => val != null);
		*/
		
		slider.style.left = parseInt(slider.style.left.slice(0, -2)) - size + "px";
		divCount ++;
		count --;
		slider.style.transform = "translateX(" + (-size * count) + "px)";
	}
}