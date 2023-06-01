// reverse String
let reverseString = function(str){
  let tempString = '';
  for(let i = str.length-1; i>=0 ; i--){
        tempString += str.charAt(i);
  }
  return tempString;
};

// change username
let textBox = document.querySelector('#text-box');
let displayText = document.querySelector('#display-text');
let palResult = document.querySelector('#pal-result');
let textLen = document.querySelector('#text-len');
textBox.addEventListener('keyup',function() {
    let textEntered = textBox.value;
    displayText.innerText = reverseString(textEntered);
    // even odd Logic
    if(textEntered.length % 2 === 0){
        displayText.style.color = 'orange';
    }
    else{
        displayText.style.color = 'lightblue';
    }

    // correct username logic
    if(textEntered === 'naveen'){
        textBox.style.backgroundColor = 'lightgreen';
    }
    else{
        textBox.style.backgroundColor = 'lightsalmon';
    }

    // palindrome or not
    if(textEntered === reverseString(textEntered)){
        palResult.innerText = 'true';
    }
    else{
        palResult.innerText = 'false';
    }

    // display text length
    textLen.innerText = textEntered.length;
});

// Change Event on Select Box
let selectBox = document.querySelector('#tech-select');
let displayOption = document.querySelector('#display-option');
selectBox.addEventListener('change',function() {
   let selectedValue = selectBox.value;
    displayOption.innerText = selectedValue;
});

// change Password
let passwordBox = document.querySelector('#password-box');
let checkBox = document.querySelector('#check-box');
checkBox.addEventListener('change',function() {
   let theType = passwordBox.getAttribute('type');
   if(theType === 'password'){
       passwordBox.setAttribute('type','text');
   }
   else{
       passwordBox.setAttribute('type','password');
   }
});

// sms app
let textAreaBox = document.querySelector('#text-area');
let charCount = document.querySelector('#char-count');
textAreaBox.addEventListener('keyup',function() {
   let textEnteredLength = textAreaBox.value.length;
   charCount.innerText = textEnteredLength;
});


// copy address from current to permanent
let currentAddress = document.querySelector('#current-address');
let permanentAddress = document.querySelector('#permanent-address');
let theCheck = document.querySelector('#add-check');
let count = 0;
theCheck.addEventListener('change',function(e) {
    if(count %2 === 0){
        permanentAddress.value = currentAddress.value;
        count++;
    }
    else{
        permanentAddress.value = '';
        count++;
    }
});

// inner Text , inner HTML
let htmlSnippet = `<h1>
                        <span style="color: red">Good</span>
                        <span style="color: limegreen">Morning</span>
                   </h1>`;
let divElement = document.querySelector('#message-div');
divElement.innerHTML = htmlSnippet;

// Create Tags using Javascript
let spanTag1 = document.createElement('span');
spanTag1.innerText = "Good";
spanTag1.style.color = 'red';

let spanTag2 = document.createElement('span');
spanTag2.innerText = "Morning";
spanTag2.style.color = 'limegreen';

let h1Tag = document.createElement('h1');
h1Tag.appendChild(spanTag1);
h1Tag.appendChild(spanTag2);

let divTag = document.createElement('div');
divTag.appendChild(h1Tag);

document.body.appendChild(divTag);

// usage of inner HTML
let colors = ['white','black','blue','purple','orange'];
let colorsHtml = `<ul>\n`;
for(let i=0; i<colors.length; i++){
    colorsHtml += `<li>${colors[i]}</li>\n`;
}
colorsHtml+= `</ul>`;
document.querySelector('#colors-div').innerHTML = colorsHtml;










