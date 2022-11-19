start_Flag = false;
const scoreText = document.getElementById("current_points");
const answerDisplay = document.getElementById("answer display");
state = "California";

current_points = 0;

document.addEventListener("click", (e) => {
    if (start_Flag) {
        let question = document.getElementById("question_container");
        if (e.target.tagName == "path") {
            let answer = e.target.dataset.name;
            if (answer === state) {
                current_points++;
                scoreText.innerHTML = current_points;
                console.log("correct");
                answerDisplay.innerText = "Correct!!";
            } else {
                console.log("incorrect");
                answerDisplay.innerText = "Wrong!!";
            }
            state = newQuestion();
            question.innerHTML = "Click on: " + state;
        }
    }
});

// prettier-ignore
var stateNames = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
                'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts',
                'Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York',
                'North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
                'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

function newQuestion() {
    if (stateNames.length == 0) {
        clearInterval(int);
        time = ` ${h} : ${m} : ${s} : ${ms}`;
    }
    var randomNumber = Math.floor(Math.random() * stateNames.length);
    var randState = stateNames[randomNumber];
    for (var i = 0; i < stateNames.length; i++) {
        if (stateNames[i] === randState) {
            stateNames.splice(i, 1);
            i--;
        }
    }
    return randState;
}

function startButton() {
    let question = document.getElementById("question_container");
    start_Flag = true;
    state = newQuestion();
    question.innerHTML = "Click on: " + state;
}

function resetButton() {
    start_Flag = false;
    let question = (document.getElementById("question_container").innerHTML =
        "");
    // Add states back to the array
    // prettier-ignore
    stateNames = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
    'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts',
    'Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York',
    'North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
    'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

    // Resets timer
    let timerRef = document.querySelector(".timerDisplay");
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerRef.innerHTML = "00 : 00 : 00 : 000 ";

    // Resets score
    scoreText.innerText = 0;
}

function skipButton() {}
