// makeImageInputButton.js

function makeImageInputButton()
{
    let theInputButton = ce('input');
    theInputButton.type = 'file';
    theInputButton.id = 'imageInput';
    theInputButton.className = 'imageInput';
    theInputButton.accept = 'image/*';
    ba(theInputButton);

    // <input type = 'file' id = 'imageInput' class = 'imageInput' accept = 'image/*'>

}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

