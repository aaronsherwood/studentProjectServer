# Student Project Server
A quick node.js server to serve student work.

## Requirements
[Node.js](https://nodejs.org/en/)

[Forever](https://github.com/foreverjs/forever) (in order to run the server headless)

All other modules (as well as font) included in repo. 

I know I know, I should do these all as sub modules...

## Usage
Enter fullscreen URLs of student work in the info.csv file, as well as the names of the students for each project. The rest is magic.

Well, ok, not magic. Just, you know, do `node server.js` in the directory to start server. Or `forever start server.js` to run in the background continuously.

There is also a startServer.sh script, that you can use to start the server automatically when the computer turns on. Make sure the file path in that script matches where the server.js file actually is.

## What Type of Things Can Be Shown
Anything! The beauty of this method is that you can show any type of documentation that you want: a P5.js sketch, a video, a shader posted on Shader Toy, etc. All that is needed is a URL of the video/photo/GIF/sketch/track/etc.

## Loading from CSV
It's currently set to load the URLs and student info from the raw CSV online at Github. If you make changes locally in the CSV on the server it won't have any effect. I set it up this way so I could easily add more projects on my computer, push the additions to Github, and then, when the server reboots (set to do so daily), it will be updated with the new projects. 

If you'd like to use a similar workflow, fork this project and be sure to clear out all the existing student project information from info.csv. Otherwise just clone and be happy.
