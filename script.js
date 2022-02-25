var count = 15;
var timer = setInterval(function() {
    console.log(count);
    if(count === 0) {
        stopInterval()
    }
}, 1000);

var stopInterval = function() {
    console.log('time is up');
    clearInterval(timer);
}
