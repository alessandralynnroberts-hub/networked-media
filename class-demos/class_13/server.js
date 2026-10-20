// Importing the express library we've installed; This library allows us to create a simple web server.
let express = require('express');

// Create the web server.
let app = express();

// Tell the web server to use the "public" folder for serving static files (html, css, javascript, media.)
app.use(express.static('public'));

// Create a test endpoint; This is not required, but it allows us to verify whether the server is working.
app.get('/test', function (req, res) {
  res.send('Hello World!')
});

// And finally start the server. We start the server on port 80, which is the default port for http.
// If you want to learn more about ports, read this: https://www.cloudflare.com/learning/network-layer/what-is-a-computer-port/
app.listen(80, function () {
  console.log('Example app listening on port 80!')
});
// 1. npm init --> initialized environment
// node.js
// created package.json
// 2. npm install express
//  installed extern library
// node-modules created
// 3. create server.js
// 4. run server : node.server.js
// cant get /
// client (my computer)
// request = question for data
// request is the url
// http://(my url)
// server is looking for app.get the route which is ('/)
// routes -- ALL THE URL PAGES W EWANT ACCESSIBLE
// syntax for GET: app.get(route, anonymous function)
// app.get('/', ()=>{})
// GET /first-server, callback function
// similar to .addEventListener("eventName", (e)=>{})
app.get('/', (request, response)=>{
// response will contain all the information we send back from the server to the client
console.log("received a request at / route!")
// we ALWAYS need to have a response
response.send('this is <em>some</em> data')
})
response.send('this is my first server!')
app.listen(8080, ()=>{
  console.log('started or restarted the server ')
  

})

// POST looks exactly the same and will handle the form data
app.post('/form-upload', (request, response)=>{


console.log(request.body)
// send the client to a different route

})

