# Decoding Nature Server
A quick node.js server to serve student work from the class.

## Requirements
[Node.js](https://nodejs.org/en/)

[Forever](https://github.com/foreverjs/forever) (in order to run the server headless)

All other modules (as well as font) included in repo. 

I know I know, I should do these all as sub modules...

## Usage
Enter fullscreen URLs of student work in the info.csv file, as well as the names of the students for each project. The rest is magic.

Well, ok, not magic. Just, you know, do `node server.js` in the directory to start server. Or `forever start server.js` to run in the background continuously.

There is also a startServer.sh script, that you can use to start the server automatically when the computer turns on. Make sure the file path in that script matches where the server.js file actually is.
