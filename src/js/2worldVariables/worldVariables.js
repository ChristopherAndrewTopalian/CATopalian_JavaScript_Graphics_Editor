// worldVariables.js

let canvas;
let ctx;
let colorPicker;

let paths = [];
let selectedTool = 'draw';
let drawing = false;
let erasing = false;
let lastPos;
let brushForce = 1.0;
let lineColor = `rgba(0, 0, 0, ${brushForce})`;
let lineWidth = 5;
colorPicker = ge('colorPicker');

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

