var waitTime = 30000;
var intervalTime = 100;
var percentage = 0;
var current = 0;
function updatePercentage(percent){
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`${percent}%`);

}
var interval = setInterval(function(){
	current += intervalTime;
	percentage = Math.floor((current/waitTime) * 100);
	updatePercentage(percentage);

}, intervalTime);

setTimeout(function(){
	clearInterval(interval);
	updatePercentage(100);
	process.stdout.write("done");
}, waitTime);

updatePercentage(percentage);
