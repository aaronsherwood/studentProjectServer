var counter = 0;
var minutesUntilSwitchProject = 1;
var timer;

var load = function(){
	setUrl();
	setText();
	//millis * seconds * minutes (minutes is imporant part, change that above)
	timer = setInterval(switchProject, 1000*60*minutesUntilSwitchProject);
}

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    if (charCode == 13){//code for return key
    	switchProject()
		window.clearInterval(timer);
		//millis * seconds * minutes (minutes is imporant part, change that above)
		timer = setInterval(switchProject, 1000*60*minutesUntilSwitchProject);
	 }  
};

var switchProject = function(){
	counter = (counter+1) % urls.length;
	setUrl();
	setText();	
}

var setUrl = function(){
	document.getElementById('frame').src = urls[counter];
}

var setText = function(){
	var text = "Decoding Nature Class Work: ";
	text += names[counter];
	document.getElementById('text').innerHTML = text;
}