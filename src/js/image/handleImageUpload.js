// handleImageUpload.js

function handleImageUpload(event)
{
    let file = event.target.files[0];

    if (file)
    {
        let reader = new FileReader();

        reader.onload = function(e)
        {
            let img = new Image();

            img.onload = function()
            {
                let canvas = ge('drawingCanvas');

                canvas.width = img.naturalWidth;

                canvas.height = img.naturalHeight;

                ctx.clearRect(0, 0, canvas.width, canvas.height);

                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };

            img.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

