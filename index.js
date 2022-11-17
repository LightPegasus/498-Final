var tooltipSpan = document.getElementById('details-box');
const scoreText = document.getElementById('current_points');
const answerDisplay = document.getElementById('answer display');

let current_points = 0;


// document.addEventListener('mouseover', function (e) {
//     if (e.target.tagName == 'path') {
//         var content = e.target.dataset.name;
//         document.getElementById("details-box").innerHTML = content;
//         document.getElementById("details-box").style.opacity = "100%";
//     }
//     else {
//         document.getElementById("details-box").style.opacity = "0%";
//     }
// });

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

window.onmousemove = function (e) {
    var x = e.clientX, y = e.clientY;
    tooltipSpan.style.top = (y + 20) + 'px';
    tooltipSpan.style.left = (x) + 'px';
};

var stateNames = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
                'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts',
                'Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York',
                'North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
                'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming,']

  
function newQuestion() {
    var randomNumber = Math.floor(Math.random()*(stateNames.length));
    document.getElementById('question display').innerHTML = stateNames[randomNumber];
}


