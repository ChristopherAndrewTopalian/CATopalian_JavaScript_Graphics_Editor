// erasePath.js

function erasePath(e)
{
    if (!erasing)
    {
        return;
    }

    let currentPos = getMousePos(e);

    ctx.clearRect(currentPos.x - lineWidth / 2, currentPos.y - lineWidth / 2, lineWidth, lineWidth);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

