function pageLoaded() {
	if (localStorage["cart"] !== "{}" && localStorage["cart"] !== undefined) {
		document.querySelector(".cartNumber").style.display = "inline-block";
		document.querySelector(".cartNumber").innerText = Object.values(JSON.parse(localStorage["cart"])).reduce((a, b) => +a + +b);
	}
	document.querySelector(".footerText").innerText = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
	var form = document.querySelector("form");

	form.addEventListener("submit", e => {
  		e.preventDefault();

 		fetch(null, {
    		method: "POST",
    		headers: {
      			"Accept": "application/x-www-form-urlencoded;charset=UTF-8",
     			"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    		},
    		body: new URLSearchParams(new FormData(form)).toString()
  		}).then(res => {
    		if (res) {
				var notification = document.querySelector(".notification");
				notification.style.opacity = "1";
				setTimeout(function() { 
					notification.style.opacity = "0";
				}, 5000);
				document.querySelector(".reasonOther").style.display = "none";
				form.reset();
    		}
  		});
	});
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
			document.querySelector(".notification").style.position = "fixed";
			document.querySelector(".notification").style.top = "90px";
		}
	} 
	if (window.pageYOffset < 30) {
		if (isScrolled) {
			navigationBar.style.position = "absolute";
			navigationBar.style.top = "30px";
			navigationBar.style.backgroundColor = "transparent";
			isScrolled = false;
			document.querySelector(".notification").style.position = "absolute";
			document.querySelector(".notification").style.top = "120px";
		}
	}
}

function radioChanged() {
	if (document.querySelectorAll("input[type='radio'")[2].checked) {
		document.querySelector(".reasonOther").style.display = "block";
		document.querySelector(".reasonOther").firstElementChild.required = true;
	} else {
		document.querySelector(".reasonOther").style.display = "none";
		document.querySelector(".reasonOther").firstElementChild.required = false;
	}
}

function textareaChanged() {
	var area = document.querySelector("textarea.textarea");
  	area.style.height = 'auto';	
    area.style.height = area.scrollHeight - 8 + 'px';
}