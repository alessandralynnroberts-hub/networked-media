
//window.onload is shorthand for this
window.addEventListener("load", ()=>{
    //document.body is the selector to retrieve the body html element


    //function mousePressed()
    //    print(mouseX, mouseY);
    // } 
    // e is a parameter in the anonymous arrow function
    // it is populated by javascript and contains
    // all of the information about an event 

    document.body.addEventListener("click", (e)=>{
console.log(e)
console.log('document.body was clicked')
// console.log(e.clientX + " " + e.clientY);
console.log('${e.clientX}, ${e.clientY}')


    })

    let textDiv = document.getElementById('text')
    textDiv.addEventListener("keydown", (e)=>{
//  key preses need to be on the document itself
// if you want to use a specific key, use e parameter
console.log('key pressed!')
console.log(e.key)

// adding the key that was typed to the div on my page
textDiv.textContent += e.key

if(e.key == ''){

    text.DivContent += 'g'
}
    })
})

//said TypeError: cannot read properties of null in console??!