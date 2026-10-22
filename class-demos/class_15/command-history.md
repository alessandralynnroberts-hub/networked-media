Way we opened terminal

1. Navigate to Finder / File Explore

- Windows: show more options -> open in git bash

2.  pwd
3.  npm init -y
4.  npm install express nunjucks

Ways in which we ran our server.js file is

1.  node server.js -> this requires a restart every time we make changes to the file
2.  node --watch server.js -> this watches our server.js file for changes and automatically will restart the server
3.  node --watch --watch--path=views server.js -> this watches both our server.js files and our .njk files in our views folder
