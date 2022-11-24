start_Flag = false;
const scoreText = document.getElementById("current_points");
const answerDisplay = document.getElementById("answer display");
state = "California";

current_points = 0;
state_count = 1;

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
                e.target.style.setProperty("fill", "green", "important");
                // Make the user not able to click again on a previous correct state
                e.target.style.setProperty("pointer-events", "none");
            } else {
                console.log("incorrect");
                answerDisplay.innerText = "Wrong!!";
                e.target.style.setProperty("fill", "red", "important");
            }
            state_count++;
            if (state_count < 51) {
                state = newQuestion();
                question.innerHTML = "Click on: " + state;
            } else {
                question.innerHTML = "Finished!!";
                start_Flag = false;
                clearInterval(int);
                document.getElementById("enterName").style.display = "block";
            }
        }
    }
});

// prettier-ignore
var stateNames = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 
 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 
 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 
 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 
 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 
 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 
 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 
 'Washington', 'West Virginia', 'Wisconsin','Wyoming']

function newQuestion() {
    if (stateNames.length === 0) {
        start_Flag = false;
        clearInterval(int);
        document.getElementById("enterName").style.display = "block";
        return "";
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
    document.getElementById("question_container").innerHTML = "";
    // Add states back to the array
    // prettier-ignore
    stateNames = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 
    'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 
    'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 
    'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 
    'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 
    'Wyoming']

    // Resets the map
    state_count = 0;
    let id_state = document.getElementsByTagName("path");
    for (i = 0; i < 51; i++) {
        id_state[i].style.setProperty("fill", "#f9f9f9");
        id_state[i].style.setProperty("pointer-events", "");
    }

    // Resets timer
    let timerRef = document.querySelector(".timerDisplay");
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerRef.innerHTML = "00 : 00 : 00 : 000 ";

    // Resets score
    current_points = 0;
    scoreText.innerText = 0;
}

function skipButton() {
    if (start_Flag) {
        let question = document.getElementById("question_container");
        state = newQuestion();
        question.innerHTML = "Click on: " + state;
    }
}
