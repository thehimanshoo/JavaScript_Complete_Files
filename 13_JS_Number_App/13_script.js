// convert to Word Number
let convertToWord = (str) => {
    let numbersArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
    let tempStr = '';
    for(let i=0; i<str.length; i++){ // '123'
        let char = str.charAt(i);
        let digit = Number.parseInt(char);
        tempStr += `${numbersArray[digit]} `;
    }
    return tempStr;
};

let numberBox = document.querySelector('#number');
let displayText = document.querySelector('#text-number');
numberBox.addEventListener('keyup',function() {
   let numberString = numberBox.value.toString();
   displayText.innerText = convertToWord(numberString);
});