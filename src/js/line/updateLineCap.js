// updateLineCap.js

function updateLineCap()
{
    if (ge('roundCap').checked)
    {
        ctx.lineCap = 'round';
    }
    else if (ge('squareCap').checked)
    {
        ctx.lineCap = 'square';
    }
    else if (ge('buttCap').checked)
    {
        ctx.lineCap = 'butt';
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

