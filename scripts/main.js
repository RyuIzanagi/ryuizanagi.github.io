let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefoxchan.jpg') {
	   myImage.setAttribute('src', 'images/firefoxchan2.jpg');
	} else {
	  myImage.setAttribute('src', 'images/firefoxchan.jpg');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName) {
		setUserName();
	} else {
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Firefox-chan is cute, ' + myName;
	}
}
if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Firefoxchan is cute, ' + storedName;
}
myButton.onclick = function() {
	setUserName();
}
		