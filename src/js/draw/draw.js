// draw.js

function draw(e)
{
    if (!drawing)
    {
        return;
    }

    let currentPos = getMousePos(e);

    ctx.lineTo(currentPos.x, currentPos.y);

    ctx.strokeStyle = lineColor;

    ctx.lineWidth = lineWidth;

    ctx.stroke();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

