# Student Project Server
A simple node.js server that shows student work full screen, and auto advances through their projects. 

## Requirements
[Node.js](https://nodejs.org/en/) ver. 8.6.0++

All modules are included in the repo. 

I know I know, I should do these all as sub modules...

## Usage
Enter fullscreen URLs of student work in the info.csv file, as well as the names of the students for each project. The rest is magic.

## What Types of Things Can Be Shown
Anything! The beauty of this method is that you can show any type of documentation that you want: a P5.js sketch, a video, a shader posted on Shader Toy, etc. All that is needed is a URL of the video/photo/GIF/sketch/track/etc.

## Scrolling Through Projects
Currently each project will be shown for a minute before auto advancing to the next project. You can change this interval in timer.js. There are also small arrow buttons on the bottom right of the screen to manually go to the next/previous project.


