// makeToolbox.js

function makeToolbox()
{
    let mainDivToolBox = ce('div');
    mainDivToolBox.id = 'toolbox';
    mainDivToolBox.className = 'mainDivToolBox';
    ba(mainDivToolBox);

    //-//

    // saveButton
    let saveButton = ce('button');
    saveButton.textContent = 'Save';
    saveButton.id = 'saveButton';
    saveButton.className = 'toolboxButton';
    saveButton.onclick = function()
    {
        saveDrawing();
    };
    mainDivToolBox.append(saveButton);

    //-//

    let linebreakUnderSaveButton = ce('br');
    mainDivToolBox.append(linebreakUnderSaveButton);

    //-//

    // drawButton
    let drawButton = ce('button');
    drawButton.textContent = 'Draw';
    drawButton.id = 'drawButton';
    drawButton.className = 'toolboxButton';
    drawButton.onclick = function()
    {
        selectTool('draw');
    };
    mainDivToolBox.append(drawButton);

    //-//

    let linebreakUnderDrawButton = ce('br');
    mainDivToolBox.append(linebreakUnderDrawButton);

    //-//

    // eraseButton
    let eraseButton = ce('button');
    eraseButton.textContent = 'Erase';
    eraseButton.id = 'eraseButton';
    eraseButton.className = 'toolboxButton';
    eraseButton.onclick = function()
    {
        selectTool('erase');
    };
    mainDivToolBox.append(eraseButton);

    //-//

    let linebreakUnderEraseButton = ce('br');
    mainDivToolBox.append(linebreakUnderEraseButton);

    //-//

    let colorChooser = ce('input');
    colorChooser.id = 'colorChooser';
    colorChooser.type = 'color';
    colorChooser.oninput = function()
    {
        lineColor = colorChooser.value;
    };
    mainDivToolBox.append(colorChooser);

    //-//

    mainDivToolBox.append(ce('hr'));

    //-//

    let lineCapContainer = ce('div');
    mainDivToolBox.append(lineCapContainer);

    //-//

    let capText = ce('label');
    capText.textContent = 'Line Cap';
    capText.style.fontSize = '13px';
    capText.style.fontWeight = 'bold';
    lineCapContainer.append(capText);

    //-//

    lineCapContainer.append(ce('br'));

    //-//

    let roundCapCheckbox = ce('input');
    roundCapCheckbox.type = 'radio';
    roundCapCheckbox.id = 'roundCap';
    roundCapCheckbox.name = 'lineCapChoice';
    roundCapCheckbox.onchange = function()
    {
        updateLineCap();
    };
    lineCapContainer.append(roundCapCheckbox);

    //-//

    let labelRound = ce('label');
    labelRound.id = 'labelRound';
    labelRound.textContent = 'Round';
    labelRound.className = 'labels';
    lineCapContainer.append(labelRound);

    //-//

    lineCapContainer.append(ce('br'));

    //-//

    let squareCapCheckbox = ce('input');
    squareCapCheckbox.type = 'radio';
    squareCapCheckbox.textContent = 'Square';
    squareCapCheckbox.id = 'squareCap';
    squareCapCheckbox.name = 'lineCapChoice';
    squareCapCheckbox.className = 'labels';
    squareCapCheckbox.onchange = function()
    {
        updateLineCap();
    };
    lineCapContainer.append(squareCapCheckbox);

    //-//

    let labelSquare = ce('label');
    labelSquare.id = 'labelSquare';
    labelSquare.textContent = 'Square';
    labelSquare.className = 'labels';
    lineCapContainer.append(labelSquare);

    //-//

    lineCapContainer.append(ce('br'));

    //-//

    let buttCapCheckbox = ce('input');
    buttCapCheckbox.type = 'radio';
    buttCapCheckbox.textContent = 'Butt';
    buttCapCheckbox.id = 'buttCap';
    buttCapCheckbox.name = 'lineCapChoice';
    buttCapCheckbox.className = 'labels';
    buttCapCheckbox.onchange = function()
    {
        updateLineCap();
    };
    lineCapContainer.append(buttCapCheckbox);

    //-//

    let labelButt = ce("label");
    labelButt.textContent = 'Butt';
    labelButt.id = 'labelButt';
    labelButt.className = 'labels';
    lineCapContainer.append(labelButt);

    //-//

    lineCapContainer.append(ce('hr'));

    //-//

    // clear button
    let clearButton = ce('button');
    clearButton.textContent = 'Clear';
    clearButton.className = 'toolboxButton';
    clearButton.onclick = function()
    {
        let choice = confirm('Erase All');

        if (choice)
        {
            clearCanvas();
        }
        else
        {
            return;
        }
    };

    mainDivToolBox.append(clearButton);

    //-//

    mainDivToolBox.append(ce('hr'));

    //-//

    let githubLink = ce('a');
    githubLink.textContent = 'CODE';
    githubLink.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Graphics_Editor';
    githubLink.target = '_blank';
    githubLink.style.fontSize = 13 + 'px';
    mainDivToolBox.append(githubLink);

    //-//

    let info = ce('div');
    info.textContent = 'CATopalian JavaScript Graphics Editor';
    info.style.fontSize = 12 + 'px';
    mainDivToolBox.append(info);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

