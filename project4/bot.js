// this builds off of class-18-demo
// we are adding the fetch request in our interval function

require("dotenv").config();

const m = require("masto");

const masto = m.createRestAPIClient({
  url: "https://networked-media.itp.io/",
  accessToken: process.env.TOKEN,
});

async function makeStatus(text) {
  const status = await masto.v1.statuses.create({
    status: text,
    // TODO: change visability to public when project ready to run
    visibility: "public",
  });
}

let name = [
  // it would be funny and really scary if i used people's full names instead of just their first
  "Sam Heckle",
  "Mae Torres",
  "Wing Huen Shing",
  "Jennifer Huang",
  "Kiki Ye",
  "Jocelyn Fan",
  "Tommy Liang",
  "Tess Wang",
  "Anna Feng",
  "Anita Yan",
  "Lisa Liu",
  "Yatong Lyu",
  "Lam Qiu",
  "Mike Huang",
  "Elena Fang",
  "Caitlyn Cui",
];

let verbs = [
  "uses",
  "creates",
  "builds",
  "explodes",
  "worships",
  "destroys",
  "remembers",
  "eats",
  "conjures",
  "bakes",
  "obtains",
  "vanquishes",
  "spoils",
];

let verbs2 = [
  "kill",
  "throw",
  "create",
  "curse",
  "save",
  "explode",
  "undermine",
  "destroy",
  "hug",
  "clean",
  "forget",
  "buy",
  "boil",
  "investigate",
  "disturb",
  "eliminate",
  "forgive",
];

setInterval(
  async () => {
    console.log("go interval");

    let hour = new Date().getHours();

    if (hour >= 4 && hour < 8) {
      console.log("bot sleeps");
      return;
    }
    // TODO: ADD API REQUEST
    // change localhost to your partner's droplet IP (their server must be running)
    // if needed, change the port (6003) to match your partner's app.listen in *their* server.js
    let url = "http://67.207.83.79:6003/get-data";

    let response = await fetch(url);
    let json = await response.json();

    // what do you want to do with your partner's data?
    //     it will use the json variable for any manipulation
    // console.log(json)
    // TODO: SELECT ITEM FROM JSON AND MANIPULATE IT FOR YOUR BOT
    //    the json is an array, so you will need to select a specific item from it
    //    and whatever property you would like to access.

    let randomTextIndex = Math.floor(Math.random() * json.length);
    let randomNameIndex = Math.floor(Math.random() * name.length);
    let randomNameIndex2 = Math.floor(Math.random() * name.length);
    let randomVerbIndex = Math.floor(Math.random() * verbs.length);
    let randomVerb2Index = Math.floor(Math.random() * verbs2.length);
    let words = json[randomTextIndex].text.split(" ");
    let randomName = name[randomNameIndex];
    let randomName2 = name[randomNameIndex2];
    let randomVerb = verbs[randomVerbIndex];
    let randomVerb2 = verbs2[randomVerb2Index];

    function randomWord() {
      let availableWords = words.filter((word) => word.toLowerCase() !== "is");
      return availableWords[Math.floor(Math.random() * availableWords.length)];
    }

    let firstPart = words.slice(0).join(" ");
    let secondPart = words.slice(0, 2).join(" ");
    secondPart = secondPart.replace("is", " " + randomWord() + " ");
    secondPart = secondPart.replace("are", " " + randomWord() + " ");
    secondPart = secondPart.replace("that", randomWord());
    secondPart = secondPart.replace("That", randomWord());
    secondPart = secondPart.replace("in", randomWord());
    secondPart = secondPart.replace("where", randomWord());
    secondPart = secondPart.replace("of", randomWord());
    secondPart = secondPart.replace("this", randomWord());
    secondPart = secondPart.replace("about", randomWord());
    secondPart = secondPart.replace("about", randomWord());
    secondPart = secondPart.replace("We", randomWord());
    secondPart = secondPart.replace("can", randomWord());
    secondPart = secondPart.replace("or", randomWord());
    secondPart = secondPart.replace("or", randomWord());
    let thirdPart = words.slice(-1).join("");

    let post =
      randomName +
      " " +
      randomVerb +
      " " +
      secondPart +
      " " +
      "to" +
      " " +
      randomVerb2 +
      " " +
      randomName2 +
      "'s" +
      " " +
      thirdPart;
    await makeStatus(post);

    // TODO: CHANGE 5000ms TO YOUR SPECIFIC INTERVAL
  },

  //   want it to run every 12 minutes
  12 * 60 * 1000,
);
