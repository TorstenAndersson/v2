function pageLoaded() {
	document.querySelector(".footerLogoText").innerHTML = "Copyright © " + new Date().getFullYear().toString() + " Johanssudd. All Rights Reserved";
	//var topDiv = document.querySelector(".topDiv");
	console.log("page loaded!");
	/*
	topDiv.style.width = "100%";
	topDiv.style.height = "80px";
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


function radioChanged() {
	if (document.querySelectorAll("input[type='radio'")[2].checked) {
		document.querySelector(".reasonOther").style.display = "block";
		document.querySelector(".reasonOther").setAttribute("required", "");
	} else {
		document.querySelector(".reasonOther").style.display = "none";
		document.querySelector(".reasonOther").removeAttribute("required");
	}
}


function textareaChanged() {
	/*
	var ta = document.querySelector("textarea.textarea");
	var taLineHeight = 20; // This should match the line-height in the CSS
	var taHeight = ta.scrollHeight; // Get the scroll height of the textarea
	var numberOfLines = Math.floor(taHeight/taLineHeight);
	ta.style.height = 20 + numberOfLines * 20 + "px";
	console.log(numberOfLines);
	*/
	var area = document.querySelector("textarea.textarea");
  	area.style.height = 'auto';	
    area.style.height = area.scrollHeight + 5 + 'px';
}

/*
function submitted() {
  	let formData = new FormData(document.querySelector("form"))
  	fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  	}).then(() => console.log('Form successfully submitted')).catch((error) => alert(error))
}
*/

function submitted() {
	console.log("greatly appreciate it!");
}