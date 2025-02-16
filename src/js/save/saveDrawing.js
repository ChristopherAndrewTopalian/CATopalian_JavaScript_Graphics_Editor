// saveDrawing.js

function saveDrawing()
{
    let dataUrl = canvas.toDataURL('image/png');

    let link = ce('a');

    link.href = dataUrl;

    link.download = 'drawing.png';

    link.click();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

