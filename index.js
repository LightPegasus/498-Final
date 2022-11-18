// var tooltipSpan = document.getElementById('details-box');

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

// window.onmousemove = function (e) {
//     var x = e.clientX, y = e.clientY;
//     tooltipSpan.style.top = (y + 20) + 'px';
//     tooltipSpan.style.left = (x) + 'px';
// };


let count = 0;

var stateNames = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
                'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts',
                'Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York',
                'North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
                'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


function newQuestion() {
    var randomNumber = Math.floor(Math.random()*(stateNames.length));
    document.getElementById('question').innerHTML = "Click on: " + stateNames[randomNumber];
    count += 1;
    if (count == 5){
        document.getElementById('enterName').style.display = "block";
    }
}


