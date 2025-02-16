// menuBrushOptions.js

function menuBrushOptions()
{
    if (ge('mainLineWidthDiv'))
    {
        ge('mainLineWidthDiv').remove();
    }

    let mainDiv = ce('div');
    mainDiv.id = 'mainLineWidthDiv';
    mainDiv.style.position = 'fixed';
    mainDiv.style.right = '3px';
    mainDiv.style.top = '30px';
    ba(mainDiv);

    //-//

    let brushOptions = ce('div');
    mainDiv.append(brushOptions);

    //-//

    let lineWidthText = ce('span');
    lineWidthText.innerHTML = 'Line Width';
    lineWidthText.style.fontSize = '15px';
    brushOptions.append(lineWidthText);

    //-//

    let linebreakUnderLineWidthText = ce('br');
    brushOptions.append(linebreakUnderLineWidthText);

    //-//

    let lineWidthTextbox = ce('input');
    lineWidthTextbox.type = 'text';
    lineWidthTextbox.id = 'lineWidthTextbox';
    lineWidthTextbox.className = 'inputStyle001';
    lineWidthTextbox.onkeyup = function()
    {
        lineWidth = lineWidthTextbox.value;
    };
    brushOptions.append(lineWidthTextbox);

    //-//

    let brushForceLabel = ce('div');
    brushForceLabel.innerHTML = 'Force N/A';
    brushForceLabel.id = 'brushForceLabel';
    brushForceLabel.style.fontSize = '15px';
    brushOptions.append(brushForceLabel);

    //-//

    let brushForceTextbox = ce("input");
    brushForceTextbox.type = "text";
    brushForceTextbox.id = "brushForceTextbox";
    brushForceTextbox.className = 'inputStyle001';
    brushForceTextbox.title = "brushForceTextbox";
    brushForceTextbox.placeholder = 'N/A';
    brushForceTextbox.onkeyup = function()
    {
        brushForce = brushForceTextbox.value;
    };
    brushOptions.append(brushForceTextbox);

    //-//

    brushOptions.append(ce('br'));
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

