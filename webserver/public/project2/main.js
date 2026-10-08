const insides = document.querySelector(".insides");

const message = document.querySelector(".message");


const transition = document.querySelector(".transition");

// was considering making each letter its own class in html so make each of them shake for a more intricate animation
// decided maybe not...maybe another time. 

const messages = [
  "Hey there",
  "Please, make yourself comfortable",
  "I see you're comfortable. Good",
  "Feel free to help yourself to some snacks",
  "Those are my insides",
  "No, you're not an inconvenience. Stay as long as you want.",
  "I welcome parasites",
  "Your breathing is very loud and very big",
  "I inhale your spoils",
  "In fact, I'm starting to feel rather faint...",
  "No, no, it's okay! Don't feel bad",
  "It's cold out there. Stay here, where it's warm",
  "...",
  "I don't feel so good",
  "No, don't leave now. It wouldn't make a difference",
  "It's too late to save me",
  "It's not your fault. You didn't ask to be born a parasite",
  "...",
  "I must look pretty bad right now",
  "You don't want to see me like this",
  "...",
  "Or maybe you do...since you're still here",
  "If you leave now, I will die alone",
];

let timer;
let currentMessage = 0;
const interval = 5000; 

transition.addEventListener("mouseenter", () => {
  if (currentMessage >= messages.length) return;
message.style.opacity = "1";

  message.textContent = messages[currentMessage];


  timer = setInterval(() => {
    currentMessage++;

    // front end web dev prof tsught me this trick about keeping display:none in css then changing to display:block in js
    if(currentMessage == 4 || currentMessage == 6){
       transition.classList.add("deepFried");
        insides.style.display = "block";
        message.classList.add("loud");
    
    } else {
        transition.classList.remove("deepFried");
        insides.style.display = "none";
        message.classList.remove("loud");
        
    }
    // got rid of the else and removing here because this is ali's POINT OF NO RETURN in their death

if(currentMessage == 13){
       transition.classList.add("dying01");
        message.classList.add("loud");

        
    }

    if(currentMessage == 18){
       transition.classList.add("dying02");
        message.classList.add("loud");
    
    }

    
    if(currentMessage == 22){
       transition.classList.add("dying03");
        message.classList.add("loud");
    
        
    }



    if (currentMessage >= messages.length) {
      clearInterval(timer);
      return;
    }

    message.textContent = messages[currentMessage];
  }, interval);

});

transition.addEventListener("mouseleave", () => {
  clearInterval(timer);

  message.style.opacity = "0";
});

