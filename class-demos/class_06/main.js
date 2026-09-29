// this is a comment
// syntax is //
alert("javascript!");

console.log("log this into the console");

// global variables
let colors = ["#1B2A4A", "#FF6F59", " #FFE5D9", "#7785ac"];

// shorthand for waiting for webpage to load

window.onload = () => {
  //window.onload is similar to the setup/draw
  //all of our code should go inside the window.onload

  console.log("page has loaded");

  // get element by id
  //retrieves a single javascript element using an id
  let mainElement = document.getElementbyId("main");
  mainElement.style.color = "white";
  //js has highest priority and will overwrite any css rules
  console.log(mainElement);
  //query selector
  //this retrieves a single element using the css selector
  let firstParagraph = document.querySelector("p");
  let blueParagraph = document.querySelector(".blue");
  document.querySelector("#main");

  firstParagraph.textContent = "I have updated the text with java script";
  blueParagraph.style.backgroundColor = "navy";

  //query selector for ID works the same as getElementByID
  let containerDiv = pdcument.querySelector("#blue-div");
  for (let i = 0; i < 60; i++) {
    //creating an element on a webpage:
    //1. declare what type of element we are creating
    let newSpan = document.createElement("span");
    //2. modify that element / content
    newSpan.textContent = "new span";
    newSpan.classList.add(allSpan)
    // generate a random color
    let c = Math.floor(Math.random() * colors.length);
    newSpan.style.background.color = colors[c];
    //3. add the created element to the page s
    //anywhere on the bottom of the html: document.body
    //in a specific container: select that element
    containerDiv.appendChild(newSpan);
  }

//setInterval is built into javaScript
//2 params
// 1. callback 
//2. amount of time in ms
  setInterval(()=>{
console.log('2 seconds have passed')
//two ways to retrieve all the elements of a class
//document.getElementsByClassName('all-spans')
let allSpans = document.querySelectorAll('.all-spans')
console.log(allSpans)
//shorthand for(let s=0; s<allSpans.length; s++)
for(let s of allSpans) {
    s.style.transform = 'rotate(${rotation}deg)'
    rotation++
console.log(s.style.transform)




}

  }, 2000);

  setInterval(intervalFunction () {}, 2000);


  //helper functions go after window.unload {}

function intervalFunction(){


}

};
