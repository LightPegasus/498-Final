var tooltipSpan = document.getElementById('details-box');

document.addEventListener('mouseover', function (e) {
    if (e.target.tagName == 'path') {
        var content = e.target.dataset.name;
        document.getElementById("details-box").innerHTML = content;
        document.getElementById("details-box").style.opacity = "100%";
    }
    else {
        document.getElementById("details-box").style.opacity = "0%";
    }
});

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
}

// window.onload = function() {
//     //when the document is finished loading, replace everything
//     //between the <a ...> </a> tags with the value of splitText
// document.getElementById("destination").innerHTML = time;
// } 
