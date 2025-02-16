// handleMouseDown.js

function handleMouseDown(e)
{
    if (selectedTool === 'draw')
    {
        drawing = true;

        startDrawing(e);
    }
    else if (selectedTool === 'erase')
    {
        erasing = true;

        startErasing(e);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

