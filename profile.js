const colorAlert = event => {
    alert('My favorite color is blue');
}

const placeAlert = event => {
    alert('My favorite place is Hueco Tanks')
}

const ritualAlert = event => {
    alert('My favorite ritual is riding my motorcyle to work')
}

const colorButton = document.getElementById('color');
const placeButton = document.getElementById('place');
const ritualButton = document.getElementById('ritual');

colorButton.addEventListener('click',colorAlert);
placeButton.addEventListener('click',placeAlert);
ritualButton.addEventListener('click',ritualAlert);