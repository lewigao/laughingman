document.addEventListener('DOMContentLoaded', () => {
    let squareElement = document.getElementById('square');
    // or let squareCount = document.querySelector('#square');

    squareElement.addEventListener('click', () => {
        alert("THEY'RE COMING");
    });

});