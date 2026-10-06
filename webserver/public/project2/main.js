const message = document.querySelector(".message");
const el = document.querySelector(".transition");
const disappear = 


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
  "...ss",
  "If you leave now, I will die alone",
  "I must look pretty bad right now",
  "You don't want to see me like this",
  "...",
  "Or maybe you do...since you're still here",
  "I am dead now. You will have to find another host."
];

let timer;
let currentMessage = 0;
const interval = 2000; // 2 seconds per message

el.addEventListener("mouseenter", () => {
  if (currentMessage >= messages.length) return;

  message.textContent = messages[currentMessage];

  timer = setInterval(() => {
    currentMessage++;

    if (currentMessage >= messages.length) {
      clearInterval(timer);
      return;
    }

    message.textContent = messages[currentMessage];
  }, interval);

});

el.addEventListener("mouseleave", () => {
  clearInterval(timer);

  document.getElementByID(messages).style.opacity = "0";
});

