// makeImageInputButton.js

function makeImageInputButton()
{
    let theInput = ce('input');
    theInput.type = 'file';
    theInput.id = 'imageInput';
    theInput.accept = 'image/*';
    theInput.style.display = 'none';
    ba(theInput);

    //-//

    let inputBtn = ce('button');
    inputBtn.style.position = 'fixed';
    inputBtn.style.right = '0px';
    inputBtn.style.top = '0px';
    inputBtn.textContent = 'Load';
    inputBtn.onclick = function()
    {
        theInput.click();
    };
    ba(inputBtn);

    //-//

    // <input type = 'file' id = 'imageInput' class = 'imageInput' accept = 'image/*'>

}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

