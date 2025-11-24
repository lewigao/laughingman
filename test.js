squareArray.forEach(function (element, index) {
        var dx = SPEED * Math.random() * 2 - 1;
        var dy = SPEED * Math.random() * 2 - 1;
        setInterval(() => {
            let currentLeft = parseInt(element.style.left) || 225;
            let currentTop = parseInt(element.style.top) || 175;
            if (currentLeft >= 450 || currentLeft <= 0) {
                dx *= -1;
                element.style.borderColor = getRandomColor();
            }
            if (currentTop >= 350 || currentTop <= 0) {
                dy *= -1;
                element.style.borderColor = getRandomColor();
            }
            element.style.left = (currentLeft + dx) + "px";
            element.style.top = (currentTop + dy) + "px";
        }, TIMER_SPEED);
    });