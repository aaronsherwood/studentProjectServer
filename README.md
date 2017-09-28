# Student Project Server
A quick node.js server to serve student work full screen in a presentation/exhibition type of way. 

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

## Note
This is intended to be used as a singular deployment, in a exhibition type of setting. If multiple loads of the site are happening simultaneously certain student projects may be skipped for each user when advancing through the projects. There is a counter in the server that advances everytime a page refreshes. this counter selects which project to show. If you're looking at the website and I'm looking at the website at the same time, at the same project, and your page refreshes first, you'll see the next project. When my page refreshes it will skip that project (since you advanced the counter) and go to the next project in line.

A solution would be to use websockets instead of just refreshing the page. But I took the path of least resistance for now.
