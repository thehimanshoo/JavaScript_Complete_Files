// display Message for first H1 element
function displayMessage(message,color) {
    let h1Tag = document.querySelector('#message');
    h1Tag.innerText = message;
    h1Tag.style.backgroundColor = color;
    h1Tag.style.color = 'white';
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
}

// display Message for Second H1 element
function displayNewMessage(message,color) {
    let h1Tag = document.querySelector('#message_2');
    h1Tag.innerText = message;
    h1Tag.style.backgroundColor = color;
    h1Tag.style.color = 'white';
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
}

// Event Listeners
// Good Morning Button
let goodMorningButton = document.querySelector('#gm');
goodMorningButton.addEventListener('click',function() {
    displayNewMessage('Good Morning','limegreen');
});

// Good Afternoon Button
let goodAfternoonButton = document.querySelector('#ga');
goodAfternoonButton.addEventListener('click',function() {
    displayNewMessage('Good Afternoon','orangered');
});

// Good Evening Button
let goodEveningButton = document.querySelector('#ge');
goodEveningButton.addEventListener('click',function() {
    displayNewMessage('Good Evening','purple');
});

// Good night Button
let goodNightButton = document.querySelector('#gn');
goodNightButton.addEventListener('click',function() {
    displayNewMessage('Good Night','black');
});

// Change Image
let changeImage = function(imageName) {
    let imageTag = document.querySelector('#food-image');
    let imageAddress = `../img/${imageName}`;
    imageTag.setAttribute('src',imageAddress);
};