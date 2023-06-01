let lessonsArray = ["Let us now look deep into what are objects. If we consider the real-world, we can find many objects around us, cars, dogs, humans, etc. All these objects have a state and a behavior.","If we consider a dog, then its state is - name, breed, color, and the behavior is - barking, wagging the tail, running.","If you compare the software object with a real-world object, they have very similar characteristics.","Software objects also have a state and a behavior. A software object's state is stored in fields and behavior is shown via methods.","So in software development, methods operate on the internal state of an object and the object-to-object communication is done via methods.","A class can have any number of methods to access the value of various kinds of methods. In the above example, barking(), hungry() and sleeping() are methods.","Following are some of the important topics that need to be discussed when looking into classes of the Java Language.","A collections framework is a unified architecture for representing and manipulating collections. All collections frameworks contain the following","In addition to collections, the framework defines several map interfaces and classes. Maps store key/value pairs. Although maps are not collections in the proper use of the term, but they are fully integrated with collections.","A constructor initializes an object when it is created. It has the same name as its class and is syntactically similar to a method. However, constructors have no explicit return type."];
let clapSound = document.querySelector('#clap-sound');
let congratsSound = document.querySelector('#congrats-sound');
let originalTextElement = document.querySelector('#original-text');
let textAreaBox = document.querySelector('#text-area');
let minutesElement = document.querySelector('#minutes');
let secondsElement = document.querySelector('#seconds');
let milliSecondsElement = document.querySelector('#m-seconds');
let resetButton = document.querySelector('#reset');
let congratsSection = document.querySelector('.cong-section');
let timer = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let timerRunning = false;
let interval = 0;

// keyup event on textarea
textAreaBox.addEventListener('keyup',function () {
    let textEnteredLength = textAreaBox.value.length;
    // for the first char entered
    if(textEnteredLength === 1 && !timerRunning){
        // start timer
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
    let originalText = originalTextElement.innerText;
    let textEntered = textAreaBox.value;
    let partialText = originalText.substr(0,textEntered.length);
    evaluateText(originalText,textEntered,partialText);
});

// click on Reset Button
resetButton.addEventListener('click',function() {
    clearInterval(interval); // to stop the timer
    clearStyles();
});


// evaluate Text
let evaluateText = (originalText,textEntered,partialText) => {
    if(textEntered === ''){
        applyColors('gray');
    }
    else{
        if(textEntered === originalText){
            applyColors('limegreen'); // to apply green color border
            clearInterval(interval); // to stop the timer
            congratsSection.style.display = 'block'; // display congrats message
            congratsSound.play(); // to play the congrats sound
        }
        else{
            if(textEntered === partialText){
                applyColors('blueviolet');
            }
            else{
                applyColors('orangered');
                clapSound.play(); // to play the clap sound
            }
        }
    }
};


// start Timer
let startTimer = () => {
    timer++;

    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));

    minutesElement.innerText = leadingZero(minutes);
    secondsElement.innerText = leadingZero(seconds);
    milliSecondsElement.innerText = leadingZero(milliSeconds);

};

// leadingZero
let leadingZero = (time) => {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
};

// applyColors
let applyColors = (color) => {
    textAreaBox.style.borderColor = color;
    textAreaBox.style.boxShadow = `0 0 10px ${color}`;
};

// change Text
let changeText = (index) => {
    let lesson = lessonsArray[index];
    originalTextElement.innerText = lesson;
};

// clearStyles
let clearStyles = () => {
    timer = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    timerRunning = false; // set the timer back to false
    interval = 0; // reset the interval value
    applyColors('gray'); // apply the border color to gray
    textAreaBox.value = ''; // clear the text entered
    congratsSection.style.display= 'none'; // hide the congrats message
    minutesElement.innerText = '00'; // reset the frontend / DOM values
    secondsElement.innerText = '00';
    milliSecondsElement.innerText = '00';
};
