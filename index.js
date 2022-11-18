var tooltipSpan = document.getElementById('details-box');
const scoreText = document.getElementById('current_points');
const answerDisplay = document.getElementById('answer display');

let current_points = 0;

document.addEventListener('click', (e) => {
    let question = document.getElementById('question display').innerHTML
    if (e.target.tagName == 'path') {
        let answer = e.target.dataset.name;
        if (answer === question) {
            current_points++;
            scoreText.innerText = current_points;
            answerDisplay.innerText = "Correct!!";
        }
        else {
            answerDisplay.innerText = "Wrong!!";
        }
    }
})

var stateNames = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
                'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts',
                'Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York',
                'North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
                'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

  
function newQuestion() {
    if (stateNames.length == 0){
            clearInterval(int);
            time = ` ${h} : ${m} : ${s} : ${ms}`;
    }
    var randomNumber = Math.floor(Math.random()*(stateNames.length));
    var randState = stateNames[randomNumber];
    document.getElementById('question display').innerHTML = randState;
    //stateNames.remove(randState);
    for( var i = 0; i < stateNames.length; i++){                                 
        if ( stateNames[i] === randState) { 
            stateNames.splice(i, 1); 
            i--; 
        }
    }
    document.getElementById('enterName').style.display = "block";
}


function startButton() {
    let question = document.getElementById("question_container");
    question.innerHTML = 'Click on California';
}


