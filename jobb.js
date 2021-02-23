function pageLoaded() {
	document.querySelector(".footerLogoText").innerHTML = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
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
				notification.classList.remove("fadeOut");
				notification.classList.add("fadeIn");
				setTimeout(function() { 
					notification.classList.remove("fadeIn");
					notification.classList.add("fadeOut");
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
	var topLogoText = document.querySelector(".topLogoText");
	var topLogoTextDiv = document.querySelector(".topLogoTextDiv");
	if (window.pageYOffset > 30) {
		if (isScrolled == false) {
			navigationBar.style.position = "fixed";
			navigationBar.style.top = "0px";
			navigationBar.classList.add("backgroundAnimation");
			navigationBar.style.backgroundColor = "rgb(39, 39, 39)";
			navigationBar.classList.remove("backgroundAnimationBack");
			//navigationBar.style.zIndex = "2";
			isScrolled = true;
			document.querySelector(".notification").style.position = "fixed";
			document.querySelector(".notification").style.top = "90px";
		}
	} 
	if (window.pageYOffset < 30) {
		if (isScrolled == true) {
			navigationBar.style.position = "absolute";
			navigationBar.style.top = "30px";
			navigationBar.classList.add("backgroundAnimationBack");
			navigationBar.style.backgroundColor = "transparent";
			navigationBar.classList.remove("backgroundAnimation");
			//navigationBar.style.zIndex = "2";
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