console.log("hello world");

function mouseOverImage(evt) {
	alert('Nice Hair');
}

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted succesfully')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let image = document.querySelector('img');

image.addEventListener('mouseover', mouseOverImage);