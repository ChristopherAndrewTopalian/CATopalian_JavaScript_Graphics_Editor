// whenLoaded.js

function whenLoaded()
{
    makeCanvas();
    makeToolbox();
    menuBrushOptions();
    makeImageInputButton();

    canvas = ge('drawingCanvas');
    ctx = canvas.getContext('2d');

    canvas.addEventListener('mousedown', handleMouseDown);

    canvas.addEventListener('mouseup', handleMouseUp);

    canvas.addEventListener('mousemove', handleMouseMove);

    let imageInput = ge('imageInput');

    if (imageInput)
    {
        imageInput.addEventListener('change', handleImageUpload);
    }
    else
    {
        console.error("Element with id 'imageInput' not found.");
    }


    canvas = ge('drawingCanvas');
    canvas.width = 775;
    canvas.height = 450;

    ctx = canvas.getContext('2d');

    canvas.addEventListener('mousedown', handleMouseDown);

    canvas.addEventListener('mouseup', handleMouseUp);

    canvas.addEventListener('mousemove', handleMouseMove);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

