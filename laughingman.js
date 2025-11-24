var SQUARE_COUNT = 3;
var SPEED = 5;
var TIMER_SPEED = 1;

document.addEventListener('DOMContentLoaded', () => {
    let squareElement = document.getElementById('square');
    // or let squareCount = document.querySelector('#square');

    squareElement.addEventListener('click', () => {
        alert("OMG you CAUGHT me");
    });

    let box = document.querySelector('#box');

    for (let i = 0; i < SQUARE_COUNT; i++) {
        //square creation
        let square = document.createElement('img');
        square.src = 'laughing_man.jpg';
        square.alt = 'Catch the laughing man!';
        square.className = 'square';
        //adds it to the screen
        box.appendChild(square);
    }

    let allSquares = box.children;
    // or let allSquares = box.querySelector('box');
    let squareArray = Array.from(allSquares);
    squareArray.forEach(function (element, index) {
        var dx = SPEED * (Math.random() * 2 - 1);
        var dy = SPEED * (Math.random() * 2 - 1);

        setInterval(() => {
            // changed parseInt to parseFloat: fixes rubberbanding issue
            let currentLeft = parseFloat(element.style.left) || 225;
            let currentTop = parseFloat(element.style.top) || 175;
            
            if (currentTop >= 350 || currentTop <= 0){
                dy = -dy;
                element.style.borderColor = getRandomColor();
            }
            if (currentLeft >= 450 || currentLeft <= 0){
                dx = -dx;
                element.style.borderColor = getRandomColor();

            }
            element.style.left = currentLeft+dx+"px";
            element.style.top = currentTop+dy+"px";
        }, TIMER_SPEED);
    });
});

function getRandomColor(){
    let r = parseInt(Math.random()*256);
    let g = parseInt(Math.random()*256);
    let b = parseInt(Math.random()*256);
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}