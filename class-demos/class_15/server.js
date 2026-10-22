// all of the libraries that we are importing
// npm install express nunjucks

const express = require("express");
/************
 * import our templating library
 ************/
const nunjucks = require("nunjucks");

// app is express server that uses express library variable
const app = express();

// all css and front end javascript will go in public folder
app.use(express.static("public"));
// allows us to use express.body
app.use(express.urlencoded({ extended: true }));
// app.use is middleware
// these are settings for our server that happen between when the server runs and when it receives a request
// these are SETTINGS
// all css, assets etc will go into public folder
// express.url encoded allows us to process post requests
// if we have app.post we NEED this line
// allows us to use request.body
/************
 * add our nunjucks settings under our middleware
 * this links our express application to the templating tool
 ************/
// nunjucks needs to talk to express and express needs to talk to njks
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

let allData = [];
// store data on our server using an array variable
// render always goes inside an app.get OR an app.post

app.get("/", (request, response) => {
  // regular home page rendering
  response.render("home.njk");
});
app.get("/form", (request, response) => {
  response.render("form.njk");
});

app.get("/view-all", (request, response) => {
  // optional second param in response.render: data from the server
  // it is always an object
  response.render("view-all.njk", { messagesArrayFromServer: allData });
});

app.post("/send-message", (request, response) => {
  console.log(request.body);
  allData.push(request.body);
  response.redirect("/view-all");
});
// this action will handle:
// storing the data from the form on thr server in the data array
// redirect to where we want the data to be displayed
// ALWAYS goes last
// start our server to run
// app.listen is now listening for requests
app.listen(8080, () => {
  console.log("http://localhost:8080");
});
