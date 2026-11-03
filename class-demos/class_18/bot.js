// imports .env variables so we dont put passwords in our javascript files

require("dotenv").config();

// set up the mastodon library
const m = require("masto");

// setting up the masto variable to connect to:
//  1) url: our mastodon server
// 2) token: our password to our account
const masto = m.createRestAPIClient({
  url: "https://networked-media.itp.io/",
  accessToken: process.env.TOKEN,
});

// async function to make a request to our mastodon server
async function makeStatus(text) {
  // await ensures that it creates the status before we do anything else in our code
  const status = await masto.v1.statuses.create({
    status: text,
    // change visibility to public when the project ready to run
    visibility: "private",
  });
}

setInterval(() => {
  // array of emojis to select
  let emoji = ["😭", "🤩", "💖"];

  //   randomly generate a number within the array lsit
  let rand = Math.floor(Math.random() * emoji.length);

  //   select an emoji from the array usiong a random index
  let post = emoji[rand];

  //   make our status with an emoji
  makeStatus(post);
  //   this interval will happen every five seconds
}, 5000);
