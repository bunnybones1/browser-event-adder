var EventUtil = require('./');
var label = document.createTextNode("Hello World");
document.body.appendChild(label);

EventUtil.addEvent(window, 'mousemove', function(event) {
	console.log('mouse', event);
	label.replaceWholeText(event);
});

EventUtil.addEvent(window, 'touchmove', function(event) {
	console.log('touch', event);
	label.replaceWholeText(event);
});

EventUtil.addEvent(window, 'resize', function(event) {
	console.log('resize', event);
	label.replaceWholeText(event);
});
