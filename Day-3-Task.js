//Question 1 :

//For Loop

var numbers = [ 10, 20, 30, 40, 50] 
for (var i=0; i < numbers.length; i++) {
console.log(numbers[i])
}

//For in

const population = {
male: 4,
female: 93,
others: 10
};
for (const key in population) {
if (population.hasOwnProperty(key)) {
console.log(`${key}: ${population[key]}`);
}
}

//For Each

const population = {
male: 4,
female: 93,
others: 10
};
let totalPopulation = 0;
let genders = Object.keys(population);
genders.forEach((gender) => {
totalPopulation += population[gender];
});  
console.log(totalPopulation);

  //For of

const population = {
male: 4,
female: 93,
others: 10
};
let populationArr = Object.entries(population);
for (array of populationArr){
console.log(array);
}  
console.log(populationArr);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Question 2 :

let myResume={
"basics": {
"name": "SRIMONICAA.T",
"email": "srimonicaaarul1995@gamil.com",
"phone": 9875643912,
"degree": "B.E",
"location": {
"address": "5A, IInd Cross Street",
"postalCode": 638001,
"city": "Erode",
"state": "Tamilnadu",
"country": "India"
},
"profiles": [
{
"github":"https://github.com/srimonicaa"
}
]
},
"work": [
{
"company": "SKP Title Search Pvt Ltd",
"position": "Process Associate",
"startDate": "17-08-2020",
"endDate": "20-10-2022",
},
],
"education": [
{
"institution": "Sengunthar Engineering College",
"department": "ECE",
"studyType": "fulltime",
"batch start year": 2013,
"batch end year": 2017,
"cgpa": 7.0,
}
],
"skills": [
{
"name": "HTML, cSS, Javascript",
"level": "beginer",
}
],
"languages": [
{
"language": "Tamil, Enlish",
}
],
"interests": [
{
"name": "Drawing, Sloving Sudoko",
}
]
}
console.log(myResume);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Quesion 3:
/*
Window:

    The JavaScript window object sits at the top of the JavaScript Object hierarchy and represents the browser 
window. 
    The window object is supported by all browsers. 
    All global JavaScript objects, functions, and variables automatically become members of the window object. 
    The window is the first thing that gets loaded into the browser.
    This window object has the majority of the properties like length, inner Width, inner Height, name, 
if it has been closed, its parents, and more.
    The window object represents the current browsing context . 
    It holds things like window.location, window.history, window.screen, window.status, or the window.document . 
    Each browser tab has its own top-level window object. Each of these windows gets 
its own separate global object. window.window always refers to window, but window.parent and window.top 
might refer to enclosing windows, giving access to other execution contexts.
    Moreover, the window property of a window object points to the window object itself.

So the following statements all return the same window object:

window.window
window.window.window
window.window.window.window

Document:

The Document interface represents any web page loaded in the browser and serves as an entry point into 
the web page’s content, which is the DOM tree. When an HTML document is loaded into a web browser , 
it becomes a document object. It is the root node of the HTML document. The document actually gets 
loaded inside the window object and has properties available to it like title, URL, cookie, etc.
HTML documents, served with the “text/html” content type, also implement the HTMLDocument interface, 
whereas XML and SVG documents implement the XMLDocument interface.

Screen: 

Screen is a small information object about physical screen dimensions . It can be used to display 
screen width, height, colorDepth, pixelDepth etc. It is not mandatory to write window prefix with 
screen object. It can be written without window prefix.

Properties:
screen.width
screen.height
screen.availWidth
screen.availHeight
screen.colorDepth
screen.pixelDepth

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////