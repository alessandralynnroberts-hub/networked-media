const express = require("express");
/************
 * import our templating library
 ************/
const nunjucks = require("nunjucks");

const app = express();

// all css and front end javascript will go in public folder
app.use(express.static("public"));
// allows us to use express.body
app.use(express.urlencoded({ extended: true }));

/************
 * add our nunjucks settings under our middleware
 * this links our express application to the templating tool
 ************/
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

app.get("/", (request, response) => {
  response.render("baselayout.njk", {
    serverData: "this is text from my server!!!",
  });
});

app.listen(8080, () => {
  console.log("http://localhost:8080");
});
