// 1. square count variable
var SQUARE_COUNT = 3;
var SPEED = 5;
var TIMER_SPEED = 10;

document.addEventListener('DOMContentLoaded', () => {
    let squareElement = document.getElementById('square');
    // or let squareCount = document.querySelector('#square');

    squareElement.addEventListener('click', () => {
        alert("OMG you CAUGHT me");
    });
    let box = document.querySelector('#box');

    // 2. square creation loop
    for (let i = 0; i < SQUARE_COUNT; i++) {
        //square creation
        let square = document.createElement('img');
        // 3. laughing man image
        square.src = 'laughing_man.jpg';
        square.alt = 'Catch the laughing man!';
        square.className = 'square';
        // 5. mouseover orochimaru/mouseout reversion
        square.addEventListener('mouseover', e => {
            square.src = 'Orochimaru.jpg';
        });
        square.addEventListener('mouseout', e => {
            square.src = 'z';
        });
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

            // 4. border color change on boundary hit
            if (currentTop >= 350 || currentTop <= 0) {
                dy = -dy;
                element.style.borderColor = getRandomColor();
                element.style.backgroundColor = getRandomColor();
            }
            if (currentLeft >= 450 || currentLeft <= 0) {
                dx = -dx;
                element.style.borderColor = getRandomColor();
                element.style.backgroundColor = getRandomColor();
            }
            element.style.left = currentLeft + dx + "px";
            element.style.top = currentTop + dy + "px";
        }, TIMER_SPEED);
    });

    // 6. mouseover #square color change 
    let coloredSquare = document.querySelector('#square');
    coloredSquare.addEventListener('mouseover', e => {
        square.style.backgroundColor = getRandomColor();
    });

});

function getRandomColor() {
    let r = parseInt(Math.random() * 256);
    let g = parseInt(Math.random() * 256);
    let b = parseInt(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}