# Student Project Server
A quick node.js server to serve student work full screen in a presentation/exhibition type of way. Example deployed to Heroku: [http://decodingnaturestudentwork.herokuapp.com/](http://decodingnaturestudentwork.herokuapp.com/) 

## Requirements
[Node.js](https://nodejs.org/en/) ver. 8.6.0++

All modules (as well as font) included in repo. 

I know I know, I should do these all as sub modules...

## Usage
Enter fullscreen URLs of student work in the info.csv file, as well as the names of the students for each project. The rest is magic.

## What Type of Things Can Be Shown
Anything! The beauty of this method is that you can show any type of documentation that you want: a P5.js sketch, a video, a shader posted on Shader Toy, etc. All that is needed is a URL of the video/photo/GIF/sketch/track/etc.

## Page Refresh Rate
Currently each project will be shown for a minute before advancing to the next project. To change this rate edit timer.js.
