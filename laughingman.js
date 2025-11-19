var SQUARE_COUNT = 3;
var SPEED = 5;
var TIMER_SPEED = 100;

document.addEventListener('DOMContentLoaded', () => {
    let squareElement = document.getElementById('square');
    // or let squareCount = document.querySelector('#square');

    squareElement.addEventListener('click', () => {
        alert("touch me'RE COMING");
    });

    let box = document.querySelector('#box');

    for (let i=0; i<SQUARE_COUNT; i++){
        //square creation
        let square = document.createElement('img');
        square.src='laughing_man.jpg';
        square.alt='Catch the lauging man!';
        square.className='square';
        //adds it to the screen
        box.appendChild(square);
    }

    let allSquares = box.children;
    // or let allSquares = box.querySelector('box');
    let squareArray = Array.from(allSquares);
    squareArray.forEach(function(element, index){
        var dx = SPEED * (Math.random()*2 - 1);
        var dy = SPEED * (Math.random()*2 - 1);
    });
});