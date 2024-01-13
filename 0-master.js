// VARIABLE DEFINITION
var variable = "variable"; // var
let letVariable = "letVariable"; // let
const constVariable = "constVariable"; // const

// DATA TYPES
// String
let string = "string";
// Number
let number = 1;
// Boolean
let boolean = true;
// Array
let array = [1, 2, 3];
// Object
let object = { key: "value" };
// Null
let nullVariable = null;
// Undefined
let undefinedVariable = undefined;

// FUNCTIONS
// Function Declaration
function functionDeclaration() {
  return "functionDeclaration";
}
// Function Expression
const functionExpression = function () {
  return "functionExpression";
};
// Arrow Function
const arrowFunction = () => {
  return "arrowFunction";
};

// CONDITIONALS
// If Statement
if (true) {
  console.log("if statement");
}
// Else If Statement
if (false) {
  console.log("if statement");
} else if (true) {
  console.log("else if statement");
}
// Else Statement
if (false) {
  console.log("if statement");
} else if (false) {
  console.log("else if statement");
} else {
  console.log("else statement");
}

// LOOPS
// For Loop
for (let i = 0; i < 5; i++) {
  console.log("for loop");
}
// While Loop
let i = 0;
while (i < 5) {
  console.log("while loop");
  i++;
}
// Do While Loop
let j = 0;
do {
  console.log("do while loop");
  j++;
} while (j < 5);

// ARRAY METHODS
// Push
let pushArray = [1, 2, 3];
pushArray.push(4);
// Pop
let popArray = [1, 2, 3];
popArray.pop();
// Shift
let shiftArray = [1, 2, 3];
shiftArray.shift();
// Unshift
let unshiftArray = [1, 2, 3];
unshiftArray.unshift(0);
// Concat
let concatArray = [1, 2, 3];
let concatArray2 = [4, 5, 6];
let concatArray3 = concatArray.concat(concatArray2);
// Includes
let includesArray = [1, 2, 3];
includesArray.includes(1);
// Index Of
let indexOfArray = [1, 2, 3];
indexOfArray.indexOf(1);
// Join
let joinArray = [1, 2, 3];
joinArray.join();
// Reverse
let reverseArray = [1, 2, 3];
reverseArray.reverse();
// Slice
let sliceArray = [1, 2, 3];
sliceArray.slice(0, 1);
// Splice
let spliceArray = [1, 2, 3];
spliceArray.splice(0, 1);
// Sort
let sortArray = [3, 2, 1];
sortArray.sort();
// Map
let mapArray = [1, 2, 3];
mapArray.map((item) => {
  return item;
});
// Filter
let filterArray = [1, 2, 3];
filterArray.filter((item) => {
  return item;
});
// Reduce
let reduceArray = [1, 2, 3];
reduceArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
// For Each
let forEachArray = [1, 2, 3];
forEachArray.forEach((item) => {
  console.log(item);
});

// OBJECT METHODS
// Object.keys
let keysObject = { key: "value" };
Object.keys(keysObject);
// Object.values
let valuesObject = { key: "value" };
Object.values(valuesObject);
// Object.entries
let entriesObject = { key: "value" };
Object.entries(entriesObject);
// Object.assign
let assignObject = { key: "value" };
Object.assign(assignObject, { key2: "value2" });
// Object.freeze
let freezeObject = { key: "value" };
Object.freeze(freezeObject);
// Object.seal
let sealObject = { key: "value" };
Object.seal(sealObject);
// Object.hasOwnProperty
let hasOwnPropertyObject = { key: "value" };
hasOwnPropertyObject.hasOwnProperty("key");

// STRING METHODS
// Length
let lengthString = "string";
lengthString.length;
// Includes
let includesString = "string";
includesString.includes("s");
// Index Of
let indexOfString = "string";
indexOfString.indexOf("s");
// Slice
let sliceString = "string";
sliceString.slice(0, 1);
// Split
let splitString = "string";
splitString.split("");
// Replace
let replaceString = "string";
replaceString.replace("s", "S");
// To Upper Case
let toUpperCaseString = "string";
toUpperCaseString.toUpperCase();
// To Lower Case
let toLowerCaseString = "string";
toLowerCaseString.toLowerCase();
// Trim
let trimString = "string";
trimString.trim();
// Repeat
let repeatString = "string";
repeatString.repeat(2);
// Substring
let substringString = "string";
substringString.substring(0, 1);
// Substr
let substrString = "string";
substrString.substr(0, 1);
// Char At
let charAtString = "string";
charAtString.charAt(0);
// Char Code At
let charCodeAtString = "string";
charCodeAtString.charCodeAt(0);
// Concat
let concatString = "string";
concatString.concat("string2");
// Match
let matchString = "string";
matchString.match("s");
// Search
let searchString = "string";
searchString.search("s");
// Trim
let trimString = "string";
trimString.trim();
// Trim Start
let trimStartString = "string";
trimStartString.trimStart();
// Trim End
let trimEndString = "string";
trimEndString.trimEnd();
// Pad Start
let padStartString = "string";
padStartString.padStart(10, "0");
// Pad End
let padEndString = "string";
padEndString.padEnd(10, "0");

// MATH METHODS
// Round
let roundMath = 1.5;
Math.round(roundMath);
// Floor
let floorMath = 1.5;
Math.floor(floorMath);
// Ceil
let ceilMath = 1.5;
Math.ceil(ceilMath);
// Min
let minMath = 1;
Math.min(minMath);
// Max
let maxMath = 1;
Math.max(maxMath);
// Random
Math.random();

// DATE METHODS
// Date
let dateDate = new Date();
// Get Date
let getDateDate = new Date();
getDateDate.getDate();
// Get Day
let getDayDate = new Date();
getDayDate.getDay();
// Get Full Year
let getFullYearDate = new Date();
getFullYearDate.getFullYear();
// Get Hours
let getHoursDate = new Date();
getHoursDate.getHours();
// Get Milliseconds
let getMillisecondsDate = new Date();
getMillisecondsDate.getMilliseconds();
// Get Minutes
let getMinutesDate = new Date();
getMinutesDate.getMinutes();
// Get Month
let getMonthDate = new Date();
getMonthDate.getMonth();
// Get Seconds
let getSecondsDate = new Date();
getSecondsDate.getSeconds();
// Get Time
let getTimeDate = new Date();
getTimeDate.getTime();
// Get Timezone Offset
let getTimezoneOffsetDate = new Date();
getTimezoneOffsetDate.getTimezoneOffset();
// Set Date
let setDateDate = new Date();
setDateDate.setDate(1);
// Set Full Year
let setFullYearDate = new Date();
setFullYearDate.setFullYear(2021);
// Set Hours
let setHoursDate = new Date();
setHoursDate.setHours(0);
// Set Milliseconds
let setMillisecondsDate = new Date();
setMillisecondsDate.setMilliseconds(0);
// Set Minutes
let setMinutesDate = new Date();
setMinutesDate.setMinutes(0);
// Set Month
let setMonthDate = new Date();
setMonthDate.setMonth(0);
// Set Seconds
let setSecondsDate = new Date();
setSecondsDate.setSeconds(0);
// Set Time
let setTimeDate = new Date();
setTimeDate.setTime(0);
// To Date String
let toDateStringDate = new Date();
toDateStringDate.toDateString();
// To ISO String
let toISOStringDate = new Date();
toISOStringDate.toISOString();
// To JSON
let toJSONDate = new Date();
toJSONDate.toJSON();
// To Locale Date String
let toLocaleDateStringDate = new Date();
toLocaleDateStringDate.toLocaleDateString();
// To Locale String
let toLocaleStringDate = new Date();
toLocaleStringDate.toLocaleString();
// To Locale Time String
let toLocaleTimeStringDate = new Date();
toLocaleTimeStringDate.toLocaleTimeString();
// To String
let toStringDate = new Date();
toStringDate.toString();
// To Time String
let toTimeStringDate = new Date();
toTimeStringDate.toTimeString();
// To UTC String
let toUTCStringDate = new Date();
toUTCStringDate.toUTCString();
// UTC
let utcDate = new Date();

// REGULAR EXPRESSION METHODS
// Test
let testRegExp = /s/;
testRegExp.test("string");
// Exec
let execRegExp = /s/;
execRegExp.exec("string");
// Match
let matchRegExp = /s/;
"string".match(matchRegExp);
// Search
let searchRegExp = /s/;
"string".search(searchRegExp);
// Replace
let replaceRegExp = /s/;
"string".replace(replaceRegExp, "S");
// Split
let splitRegExp = /s/;
"string".split(splitRegExp);

// ERROR METHODS
// Throw
throw new Error("error");
// Try Catch
try {
  throw new Error("error");
} catch (error) {
  console.log(error);
}

// DOM METHODS
// Query Selector
document.querySelector("div");
// Query Selector All
document.querySelectorAll("div");
// Get Element By Id
document.getElementById("div");
// Get Elements By Class Name
document.getElementsByClassName("div");
// Get Elements By Tag Name
document.getElementsByTagName("div");
// Get Elements By Name
document.getElementsByName("div");
// Get Elements By Tag Name
document.getElementsByTagName("div");

// DOM ELEMENT METHODS
// Get Attribute
document.querySelector("div").getAttribute("id");
// Set Attribute
document.querySelector("div").setAttribute("id", "div");
// Remove Attribute
document.querySelector("div").removeAttribute("id");
// Append Child
document.querySelector("div").appendChild(document.createElement("div"));
// Append
document.querySelector("div").append(document.createElement("div"));
// Prepend
document.querySelector("div").prepend(document.createElement("div"));
// Replace Child
document
  .querySelector("div")
  .replaceChild(document.createElement("div"), document.createElement("div"));
// Remove Child
document.querySelector("div").removeChild(document.createElement("div"));
// Clone Node
document.querySelector("div").cloneNode();
// Contains
document.querySelector("div").contains(document.createElement("div"));

// DOM ELEMENT PROPERTIES
// Inner HTML
document.querySelector("div").innerHTML;
// Outer HTML
document.querySelector("div").outerHTML;
// Inner Text
document.querySelector("div").innerText;
// Outer Text
document.querySelector("div").outerText;
// Text Content
document.querySelector("div").textContent;
// Class List
document.querySelector("div").classList;
// Class Name
document.querySelector("div").className;
// Tag Name
document.querySelector("div").tagName;
// Child Element Count
document.querySelector("div").childElementCount;
// First Child
document.querySelector("div").firstChild;
// Last Child
document.querySelector("div").lastChild;
// Next Sibling
document.querySelector("div").nextSibling;
// Previous Sibling
document.querySelector("div").previousSibling;
// Parent Element
document.querySelector("div").parentElement;
// Parent Node
document.querySelector("div").parentNode;
// Style
document.querySelector("div").style;
// Value
document.querySelector("div").value;
// Type
document.querySelector("div").type;
// Name
document.querySelector("div").name;
// Id
document.querySelector("div").id;
// Class Name
document.querySelector("div").className;
// Href
document.querySelector("div").href;
// Src
document.querySelector("div").src;
// Alt
document.querySelector("div").alt;
// For
document.querySelector("div").for;
// Checked
document.querySelector("div").checked;
// Disabled
document.querySelector("div").disabled;
// Selected Index
document.querySelector("div").selectedIndex;
// Length
document.querySelector("div").length;
// Action
document.querySelector("div").action;
// Method
document.querySelector("div").method;
// Target
document.querySelector("div").target;
// Default Value
document.querySelector("div").defaultValue;
// Default Checked
document.querySelector("div").defaultChecked;
// Default Selected Index
document.querySelector("div").defaultSelectedIndex;
// Default Selected
document.querySelector("div").defaultSelected;
// Default Disabled
document.querySelector("div").defaultDisabled;
// Default Value
document.querySelector("div").defaultValue;

// DOM ELEMENT EVENTS
// On Click
document.querySelector("div").onclick = () => {
  console.log("onclick");
};
// On Change
document.querySelector("div").onchange = () => {
  console.log("onchange");
};
// On Submit
document.querySelector("div").onsubmit = () => {
  console.log("onsubmit");
};
// On Key Down
document.querySelector("div").onkeydown = () => {
  console.log("onkeydown");
};
// On Key Press
document.querySelector("div").onkeypress = () => {
  console.log("onkeypress");
};
// On Key Up
document.querySelector("div").onkeyup = () => {
  console.log("onkeyup");
};
// On Mouse Down
document.querySelector("div").onmousedown = () => {
  console.log("onmousedown");
};
// On Mouse Move
document.querySelector("div").onmousemove = () => {
  console.log("onmousemove");
};
// On Mouse Over
document.querySelector("div").onmouseover = () => {
  console.log("onmouseover");
};
// On Mouse Out
document.querySelector("div").onmouseout = () => {
  console.log("onmouseout");
};
// On Mouse Up
document.querySelector("div").onmouseup = () => {
  console.log("onmouseup");
};
// On Mouse Wheel
document.querySelector("div").onmousewheel = () => {
  console.log("onmousewheel");
};
// On Drag
document.querySelector("div").ondrag = () => {
  console.log("ondrag");
};
// On Drag End
document.querySelector("div").ondragend = () => {
  console.log("ondragend");
};
// On Drag Enter
document.querySelector("div").ondragenter = () => {
  console.log("ondragenter");
};
// On Drag Leave
document.querySelector("div").ondragleave = () => {
  console.log("ondragleave");
};
// On Drag Over
document.querySelector("div").ondragover = () => {
  console.log("ondragover");
};
// On Drag Start
document.querySelector("div").ondragstart = () => {
  console.log("ondragstart");
};
// On Drop
document.querySelector("div").ondrop = () => {
  console.log("ondrop");
};
// On Scroll
document.querySelector("div").onscroll = () => {
  console.log("onscroll");
};
// On Focus
document.querySelector("div").onfocus = () => {
  console.log("onfocus");
};
// On Blur
document.querySelector("div").onblur = () => {
  console.log("onblur");
};
// On Resize
document.querySelector("div").onresize = () => {
  console.log("onresize");
};
// On Select
document.querySelector("div").onselect = () => {
  console.log("onselect");
};
// On Load
document.querySelector("div").onload = () => {
  console.log("onload");
};
// On Unload
document.querySelector("div").onunload = () => {
  console.log("onunload");
};
// On Error
document.querySelector("div").onerror = () => {
  console.log("onerror");
};
// On Hash Change
document.querySelector("div").onhashchange = () => {
  console.log("onhashchange");
};
// On Page Hide
document.querySelector("div").onpagehide = () => {
  console.log("onpagehide");
};
// On Page Show
document.querySelector("div").onpageshow = () => {
  console.log("onpageshow");
};
// On Pop State
document.querySelector("div").onpopstate = () => {
  console.log("onpopstate");
};
// On Storage
document.querySelector("div").onstorage = () => {
  console.log("onstorage");
};
// On Online
document.querySelector("div").ononline = () => {
  console.log("ononline");
};
// On Offline
document.querySelector("div").onoffline = () => {
  console.log("onoffline");
};
// On Message
document.querySelector("div").onmessage = () => {
  console.log("onmessage");
};
// On Close
document.querySelector("div").onclose = () => {
  console.log("onclose");
};
// On Open
document.querySelector("div").onopen = () => {
  console.log("onopen");
};
// On Input
document.querySelector("div").oninput = () => {
  console.log("oninput");
};
// On Invalid
document.querySelector("div").oninvalid = () => {
  console.log("oninvalid");
};
// On Can Play
document.querySelector("div").oncanplay = () => {
  console.log("oncanplay");
};
// On Can Play Through
document.querySelector("div").oncanplaythrough = () => {
  console.log("oncanplaythrough");
};
// On Cue Change
document.querySelector("div").oncuechange = () => {
  console.log("oncuechange");
};
// On Duration Change
document.querySelector("div").ondurationchange = () => {
  console.log("ondurationchange");
};
// On Emptied
document.querySelector("div").onemptied = () => {
  console.log("onemptied");
};
// On Ended
document.querySelector("div").onended = () => {
  console.log("onended");
};
// On Loaded Data
document.querySelector("div").onloadeddata = () => {
  console.log("onloadeddata");
};
// On Loaded Metadata
document.querySelector("div").onloadedmetadata = () => {
  console.log("onloadedmetadata");
};
// On Load Start
document.querySelector("div").onloadstart = () => {
  console.log("onloadstart");
};
// On Pause
document.querySelector("div").onpause = () => {
  console.log("onpause");
};
// On Play
document.querySelector("div").onplay = () => {
  console.log("onplay");
};
// On Playing
document.querySelector("div").onplaying = () => {
  console.log("onplaying");
};
// On Progress
document.querySelector("div").onprogress = () => {
  console.log("onprogress");
};
// On Rate Change
document.querySelector("div").onratechange = () => {
  console.log("onratechange");
};
// On Seeked
document.querySelector("div").onseeked = () => {
  console.log("onseeked");
};
// On Seeking
document.querySelector("div").onseeking = () => {
  console.log("onseeking");
};
// On Stalled
document.querySelector("div").onstalled = () => {
  console.log("onstalled");
};
// On Suspend
document.querySelector("div").onsuspend = () => {
  console.log("onsuspend");
};
// On Time Update
document.querySelector("div").ontimeupdate = () => {
  console.log("ontimeupdate");
};
// On Volume Change
document.querySelector("div").onvolumechange = () => {
  console.log("onvolumechange");
};
// On Waiting
document.querySelector("div").onwaiting = () => {
  console.log("onwaiting");
};
// On Animation End
document.querySelector("div").onanimationend = () => {
  console.log("onanimationend");
};
// On Animation Iteration
document.querySelector("div").onanimationiteration = () => {
  console.log("onanimationiteration");
};
// On Animation Start
document.querySelector("div").onanimationstart = () => {
  console.log("onanimationstart");
};
// On Transition End
document.querySelector("div").ontransitionend = () => {
  console.log("ontransitionend");
};
// On Transition Run
document.querySelector("div").ontransitionrun = () => {
  console.log("ontransitionrun");
};
// On Transition Start
document.querySelector("div").ontransitionstart = () => {
  console.log("ontransitionstart");
};
// On Abort
document.querySelector("div").onabort = () => {
  console.log("onabort");
};
// On Can Play
document.querySelector("div").oncanplay = () => {
  console.log("oncanplay");
};
// On Can Play Through
document.querySelector("div").oncanplaythrough = () => {
  console.log("oncanplaythrough");
};
// On Cue Change
document.querySelector("div").oncuechange = () => {
  console.log("oncuechange");
};
// On Duration Change
document.querySelector("div").ondurationchange = () => {
  console.log("ondurationchange");
};
// On Emptied
document.querySelector("div").onemptied = () => {
  console.log("onemptied");
};
// On Ended
document.querySelector("div").onended = () => {
  console.log("onended");
};
// On Error
document.querySelector("div").onerror = () => {
  console.log("onerror");
};
// On Loaded Data
document.querySelector("div").onloadeddata = () => {
  console.log("onloadeddata");
};
// On Loaded Metadata
document.querySelector("div").onloadedmetadata = () => {
  console.log("onloadedmetadata");
};
// On Load Start
document.querySelector("div").onloadstart = () => {
  console.log("onloadstart");
};
// On Pause
document.querySelector("div").onpause = () => {
  console.log("onpause");
};
// On Play
document.querySelector("div").onplay = () => {
  console.log("onplay");
};
// On Playing
document.querySelector("div").onplaying = () => {
  console.log("onplaying");
};
// On Progress
document.querySelector("div").onprogress = () => {
  console.log("onprogress");
};
// On Rate Change
document.querySelector("div").onratechange = () => {
  console.log("onratechange");
};
// On Seeked
document.querySelector("div").onseeked = () => {
  console.log("onseeked");
};

// DOM ELEMENT STYLE PROPERTIES
// Background
document.querySelector("div").style.background;
// Background Attachment
document.querySelector("div").style.backgroundAttachment;
// Background Blend Mode
document.querySelector("div").style.backgroundBlendMode;
// Background Clip
document.querySelector("div").style.backgroundClip;
// Background Color
document.querySelector("div").style.backgroundColor;
// Background Image
document.querySelector("div").style.backgroundImage;
// Background Origin
document.querySelector("div").style.backgroundOrigin;
// Background Position
document.querySelector("div").style.backgroundPosition;
// Background Repeat
document.querySelector("div").style.backgroundRepeat;
// Background Size
document.querySelector("div").style.backgroundSize;
// Border
document.querySelector("div").style.border;
// Border Bottom
document.querySelector("div").style.borderBottom;
// Border Bottom Color
document.querySelector("div").style.borderBottomColor;
// Border Bottom Left Radius
document.querySelector("div").style.borderBottomLeftRadius;
// Border Bottom Right Radius
document.querySelector("div").style.borderBottomRightRadius;
// Border Bottom Style
document.querySelector("div").style.borderBottomStyle;
// Border Bottom Width
document.querySelector("div").style.borderBottomWidth;
// Border Collapse
document.querySelector("div").style.borderCollapse;
// Border Color
document.querySelector("div").style.borderColor;
// Border Image
document.querySelector("div").style.borderImage;
// Border Image Outset
document.querySelector("div").style.borderImageOutset;
// Border Image Repeat
document.querySelector("div").style.borderImageRepeat;
// Border Image Slice
document.querySelector("div").style.borderImageSlice;
// Border Image Source
document.querySelector("div").style.borderImageSource;
// Border Image Width
document.querySelector("div").style.borderImageWidth;
// Border Left
document.querySelector("div").style.borderLeft;
// Border Left Color
document.querySelector("div").style.borderLeftColor;
// Border Left Style
document.querySelector("div").style.borderLeftStyle;
// Border Left Width
document.querySelector("div").style.borderLeftWidth;
// Border Radius
document.querySelector("div").style.borderRadius;
// Border Right
document.querySelector("div").style.borderRight;
// Border Right Color
document.querySelector("div").style.borderRightColor;
// Border Right Style
document.querySelector("div").style.borderRightStyle;
// Border Right Width
document.querySelector("div").style.borderRightWidth;
// Border Spacing
document.querySelector("div").style.borderSpacing;
// Border Style
document.querySelector("div").style.borderStyle;
// Border Top
document.querySelector("div").style.borderTop;
// Border Top Color
document.querySelector("div").style.borderTopColor;
// Border Top Left Radius
document.querySelector("div").style.borderTopLeftRadius;
// Border Top Right Radius
document.querySelector("div").style.borderTopRightRadius;
// Border Top Style
document.querySelector("div").style.borderTopStyle;
// Border Top Width
document.querySelector("div").style.borderTopWidth;
// Border Width
document.querySelector("div").style.borderWidth;
// Bottom
document.querySelector("div").style.bottom;
// Box Shadow
document.querySelector("div").style.boxShadow;
// Box Sizing
document.querySelector("div").style.boxSizing;
// Caption Side
document.querySelector("div").style.captionSide;
// Clear
document.querySelector("div").style.clear;
// Clip
document.querySelector("div").style.clip;
// Color
document.querySelector("div").style.color;
// Column Count
document.querySelector("div").style.columnCount;
// Column Fill
document.querySelector("div").style.columnFill;
// Column Gap
document.querySelector("div").style.columnGap;
// Column Rule
document.querySelector("div").style.columnRule;
// Column Rule Color
document.querySelector("div").style.columnRuleColor;
// Column Rule Style
document.querySelector("div").style.columnRuleStyle;
// Column Rule Width
document.querySelector("div").style.columnRuleWidth;
// Column Span
document.querySelector("div").style.columnSpan;
// Column Width
document.querySelector("div").style.columnWidth;
// Columns
document.querySelector("div").style.columns;
// Content
document.querySelector("div").style.content;
// Counter Increment
document.querySelector("div").style.counterIncrement;
// Counter Reset
document.querySelector("div").style.counterReset;
// Cursor
document.querySelector("div").style.cursor;
// Direction
document.querySelector("div").style.direction;
// Display
document.querySelector("div").style.display;
// Empty Cells
document.querySelector("div").style.emptyCells;
// Filter
document.querySelector("div").style.filter;
// Flex
document.querySelector("div").style.flex;
// Flex Basis
document.querySelector("div").style.flexBasis;
// Flex Direction
document.querySelector("div").style.flexDirection;
// Flex Flow
document.querySelector("div").style.flexFlow;
// Flex Grow
document.querySelector("div").style.flexGrow;
// Flex Shrink
document.querySelector("div").style.flexShrink;
// Flex Wrap
document.querySelector("div").style.flexWrap;
// Float
document.querySelector("div").style.float;
// Font
document.querySelector("div").style.font;
// Font Family
document.querySelector("div").style.fontFamily;
// Font Feature Settings
document.querySelector("div").style.fontFeatureSettings;
// Font Kerning
document.querySelector("div").style.fontKerning;
// Font Language Override
document.querySelector("div").style.fontLanguageOverride;
// Font Size
document.querySelector("div").style.fontSize;
// Font Size Adjust
document.querySelector("div").style.fontSizeAdjust;
// Font Stretch
document.querySelector("div").style.fontStretch;
// Font Style
document.querySelector("div").style.fontStyle;
// Font Synthesis
document.querySelector("div").style.fontSynthesis;
// Font Variant
document.querySelector("div").style.fontVariant;
// Font Variant Alternates
document.querySelector("div").style.fontVariantAlternates;
// Font Variant Caps
document.querySelector("div").style.fontVariantCaps;
// Font Variant East Asian
document.querySelector("div").style.fontVariantEastAsian;
// Font Variant Ligatures
document.querySelector("div").style.fontVariantLigatures;
// Font Variant Numeric
document.querySelector("div").style.fontVariantNumeric;
// Font Variant Position
document.querySelector("div").style.fontVariantPosition;
// Font Weight
document.querySelector("div").style.fontWeight;
// Grid
document.querySelector("div").style.grid;
// Grid Area
document.querySelector("div").style.gridArea;
// Grid Auto Columns
document.querySelector("div").style.gridAutoColumns;
// Grid Auto Flow
document.querySelector("div").style.gridAutoFlow;
// Grid Auto Rows
document.querySelector("div").style.gridAutoRows;
// Grid Column
document.querySelector("div").style.gridColumn;
// Grid Column End
document.querySelector("div").style.gridColumnEnd;
// Grid Column Gap
document.querySelector("div").style.gridColumnGap;
// Grid Column Start
document.querySelector("div").style.gridColumnStart;
// Grid Gap
document.querySelector("div").style.gridGap;
// Grid Row
document.querySelector("div").style.gridRow;
// Grid Row End
document.querySelector("div").style.gridRowEnd;
// Grid Row Gap
document.querySelector("div").style.gridRowGap;
// Grid Row Start
document.querySelector("div").style.gridRowStart;
// Grid Template
document.querySelector("div").style.gridTemplate;
// Grid Template Areas
document.querySelector("div").style.gridTemplateAreas;
// Grid Template Columns
document.querySelector("div").style.gridTemplateColumns;
// Grid Template Rows
document.querySelector("div").style.gridTemplateRows;
// Hanging Punctuation
document.querySelector("div").style.hangingPunctuation;
// Height
document.querySelector("div").style.height;
// Hyphens
document.querySelector("div").style.hyphens;
// Image Orientation
document.querySelector("div").style.imageOrientation;
// Image Rendering
document.querySelector("div").style.imageRendering;
// Image Resolution
document.querySelector("div").style.imageResolution;
// Justify Content
document.querySelector("div").style.justifyContent;
// Left
document.querySelector("div").style.left;
// Letter Spacing
document.querySelector("div").style.letterSpacing;
// Line Break
document.querySelector("div").style.lineBreak;
// Line Height
document.querySelector("div").style.lineHeight;
// List Style
document.querySelector("div").style.listStyle;
// List Style Image
document.querySelector("div").style.listStyleImage;
// List Style Position
document.querySelector("div").style.listStylePosition;
// List Style Type
document.querySelector("div").style.listStyleType;
// Margin
document.querySelector("div").style.margin;
// Margin Bottom
document.querySelector("div").style.marginBottom;
// Margin Left
document.querySelector("div").style.marginLeft;
// Margin Right
document.querySelector("div").style.marginRight;
// Margin Top
document.querySelector("div").style.marginTop;
// Max Height
document.querySelector("div").style.maxHeight;
// Max Width
document.querySelector("div").style.maxWidth;
// Min Height
document.querySelector("div").style.minHeight;
// Min Width
document.querySelector("div").style.minWidth;
// Object Fit
document.querySelector("div").style.objectFit;
// Object Position
document.querySelector("div").style.objectPosition;
// Opacity
document.querySelector("div").style.opacity;
// Order
document.querySelector("div").style.order;
// Orphans
document.querySelector("div").style.orphans;
// Outline
document.querySelector("div").style.outline;
// Outline Color
document.querySelector("div").style.outlineColor;
// Outline Offset
document.querySelector("div").style.outlineOffset;
// Outline Style
document.querySelector("div").style.outlineStyle;
// Outline Width
document.querySelector("div").style.outlineWidth;
// Overflow
document.querySelector("div").style.overflow;
// Overflow Wrap
document.querySelector("div").style.overflowWrap;
// Overflow X
document.querySelector("div").style.overflowX;
// Overflow Y
document.querySelector("div").style.overflowY;
// Padding
document.querySelector("div").style.padding;
// Padding Bottom
document.querySelector("div").style.paddingBottom;
// Padding Left
document.querySelector("div").style.paddingLeft;
// Padding Right
document.querySelector("div").style.paddingRight;
// Padding Top
document.querySelector("div").style.paddingTop;
// Page Break After
document.querySelector("div").style.pageBreakAfter;
// Page Break Before
document.querySelector("div").style.pageBreakBefore;
// Page Break Inside
document.querySelector("div").style.pageBreakInside;
// Perspective
document.querySelector("div").style.perspective;
// Perspective Origin
document.querySelector("div").style.perspectiveOrigin;
// Pointer Events
document.querySelector("div").style.pointerEvents;
// Position
document.querySelector("div").style.position;
// Quotes
document.querySelector("div").style.quotes;
// Resize
document.querySelector("div").style.resize;
// Right
document.querySelector("div").style.right;
// Scroll Behavior
document.querySelector("div").style.scrollBehavior;
// Tab Size
document.querySelector("div").style.tabSize;
// Table Layout
document.querySelector("div").style.tableLayout;
// Text Align
document.querySelector("div").style.textAlign;
// Text Align Last
document.querySelector("div").style.textAlignLast;
// Text Decoration
document.querySelector("div").style.textDecoration;
// Text Decoration Color
document.querySelector("div").style.textDecorationColor;
// Text Decoration Line
document.querySelector("div").style.textDecorationLine;
// Text Decoration Style
document.querySelector("div").style.textDecorationStyle;
// Text Indent
document.querySelector("div").style.textIndent;
// Text Justify
document.querySelector("div").style.textJustify;
// Text Overflow
document.querySelector("div").style.textOverflow;
// Text Shadow
document.querySelector("div").style.textShadow;
// Text Transform
document.querySelector("div").style.textTransform;
// Text Underline Position
document.querySelector("div").style.textUnderlinePosition;
// Top
document.querySelector("div").style.top;
// Transform
document.querySelector("div").style.transform;
// Transform Origin
document.querySelector("div").style.transformOrigin;
// Transform Style
document.querySelector("div").style.transformStyle;
// Transition
document.querySelector("div").style.transition;
// Transition Delay
document.querySelector("div").style.transitionDelay;
// Transition Duration
document.querySelector("div").style.transitionDuration;
// Transition Property
document.querySelector("div").style.transitionProperty;
// Transition Timing Function
document.querySelector("div").style.transitionTimingFunction;
// Unicode Bidi
document.querySelector("div").style.unicodeBidi;
// User Select
document.querySelector("div").style.userSelect;
// Vertical Align
document.querySelector("div").style.verticalAlign;
// Visibility
document.querySelector("div").style.visibility;
// White Space
document.querySelector("div").style.whiteSpace;
// Widows
document.querySelector("div").style.widows;
// Width
document.querySelector("div").style.width;
// Word Break
document.querySelector("div").style.wordBreak;
// Word Spacing
document.querySelector("div").style.wordSpacing;
// Word Wrap
document.querySelector("div").style.wordWrap;
// Writing Mode
document.querySelector("div").style.writingMode;
// Z Index
document.querySelector("div").style.zIndex;

// DOM ELEMENT STYLE METHODS
// Get Property Value
document.querySelector("div").style.getPropertyValue("background");
// Set Property
document.querySelector("div").style.setProperty("background", "red");
// Remove Property
document.querySelector("div").style.removeProperty("background");

// DOM ELEMENT CLASS LIST METHODS
// Add
document.querySelector("div").classList.add("class");
// Remove
document.querySelector("div").classList.remove("class");
// Toggle
document.querySelector("div").classList.toggle("class");
// Contains
document.querySelector("div").classList.contains("class");
// Replace
document.querySelector("div").classList.replace("class", "class2");
// Item
document.querySelector("div").classList.item(0);
// Length
document.querySelector("div").classList.length;

// DOM ELEMENT CHILD NODE METHODS
// Append Child
document.querySelector("div").appendChild(document.createElement("div"));
// Append
document.querySelector("div").append(document.createElement("div"));
// Prepend
document.querySelector("div").prepend(document.createElement("div"));
// Replace Child
document
  .querySelector("div")
  .replaceChild(document.createElement("div"), document.createElement("div"));
// Remove Child
document.querySelector("div").removeChild(document.createElement("div"));
// Clone Node
document.querySelector("div").cloneNode();
// Contains
document.querySelector("div").contains(document.createElement("div"));

// DOM ELEMENT CHILD NODE PROPERTIES
// Child Element Count
document.querySelector("div").childElementCount;
// First Child
document.querySelector("div").firstChild;
// Last Child
document.querySelector("div").lastChild;
// Next Sibling
document.querySelector("div").nextSibling;
// Previous Sibling
document.querySelector("div").previousSibling;
// Parent Element
document.querySelector("div").parentElement;
// Parent Node
document.querySelector("div").parentNode;

// DOM ELEMENT CHILD NODES
// Child Nodes
document.querySelector("div").childNodes;
// First Child
document.querySelector("div").firstChild;
// Last Child
document.querySelector("div").lastChild;
// Next Sibling
document.querySelector("div").nextSibling;
// Previous Sibling
document.querySelector("div").previousSibling;
// Parent Node

// DOM ELEMENT CHILDREN
// Children
document.querySelector("div").children;
// First Element Child
document.querySelector("div").firstElementChild;
// Last Element Child
document.querySelector("div").lastElementChild;
// Next Element Sibling
document.querySelector("div").nextElementSibling;
// Previous Element Sibling
document.querySelector("div").previousElementSibling;
// Parent Element
document.querySelector("div").parentElement;

// DOM ELEMENT PARENT NODE
// Parent Node
document.querySelector("div").parentNode;
// Parent Element
document.querySelector("div").parentElement;

// DOM ELEMENT PARENT NODE PROPERTIES
// Child Element Count
document.querySelector("div").childElementCount;
// First Child
document.querySelector("div").firstChild;
// Last Child
document.querySelector("div").lastChild;
// Next Sibling
document.querySelector("div").nextSibling;
// Previous Sibling
document.querySelector("div").previousSibling;
// Parent Element
document.querySelector("div").parentElement;
// Parent Node
document.querySelector("div").parentNode;

// DOM ELEMENT PARENT NODE METHODS
// Append Child
document.querySelector("div").appendChild(document.createElement("div"));
// Append
document.querySelector("div").append(document.createElement("div"));
// Prepend
document.querySelector("div").prepend(document.createElement("div"));
// Replace Child
document
  .querySelector("div")
  .replaceChild(document.createElement("div"), document.createElement("div"));
// Remove Child
document.querySelector("div").removeChild(document.createElement("div"));
// Clone Node
document.querySelector("div").cloneNode();
// Contains
document.querySelector("div").contains(document.createElement("div"));
