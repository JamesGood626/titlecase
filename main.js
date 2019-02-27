window.onload = init;

function init() {
    document.querySelector('#input')
        .addEventListener('keydown', handleTyping);
}

function handleTyping(event) {
    let userInput = event.target.value;
    let answer = " "
    console.log("THE USER INPUT: ", userInput)
    let i = 0
    while (i < userInput.length) {
        if (i === 0 || userInput[i - 1] === " ") {

            answer = answer + userInput[i].toUpperCase();
        } else {
            answer = answer + userInput[i];
        }
        i++;
    }



    document.querySelector('#output').innerText = answer;
}