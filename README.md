# Student Project Server
A quick node.js server to serve student work full screen in a presentation/exhibition type of way ([http://decodingnaturestudentwork.herokuapp.com/](http://decodingnaturestudentwork.herokuapp.com/)). 

## Requirements
[Node.js](https://nodejs.org/en/) ver. 8.6.0++

All modules (as well as font) included in repo. 

I know I know, I should do these all as sub modules...

## Usage
Enter fullscreen URLs of student work in the info.csv file, as well as the names of the students for each project. The rest is magic.

Well, ok, not magic. Just, you know, do `node server.js` in the directory to start server. Or `forever start server.js` to run headless (requires [Forever](https://github.com/foreverjs/forever)).

There is also a startServer.sh script, that you can use to start the server automatically when the computer turns on. Make sure the file path in that script matches where the server.js file actually is.

## What Type of Things Can Be Shown
Anything! The beauty of this method is that you can show any type of documentation that you want: a P5.js sketch, a video, a shader posted on Shader Toy, etc. All that is needed is a URL of the video/photo/GIF/sketch/track/etc.

## Page Refresh Rate
Currently each project will be shown for a minute before advancing to the next project. To change this rate edit timer.js.
