// on page load...
moveProgressBar();
// on browser resize...
$(window).resize(function() {
    moveProgressBar();
});

// SIGNATURE PROGRESS
function moveProgressBar() {
  console.log("moveProgressBar");
    for(var i=0; i<$('.progress-wrap').length; i++){
        var elem = $('.progress-wrap')[i];
        var getPercent = (elem.getAttribute('data-progress-percent') / 100);
        console.log(getPercent);
        if(getPercent <= 0.30 && (elem.className.indexOf('good') === -1 || elem.className.indexOf('warn') === -1 || elem.className.indexOf('danger') === -1)){
            elem.className = "progress-wrap progress good";
        } else if (getPercent <= 0.7 && getPercent > 0.3 && (elem.className.indexOf('good') === -1 || elem.className.indexOf('warn') === -1 || elem.className.indexOf('danger') === -1)){
            elem.className = "progress-wrap progress warn";
        } else if (getPercent > 0.7 && (elem.className.indexOf('good') === -1 || elem.className.indexOf('warn') === -1 || elem.className.indexOf('danger') === -1)){
            elem.className = "progress-wrap progress danger";
        } else if(getPercent > 1){
            elem.getElementsByClassName('progress-bar').innerHTML = "Over Budget!"
        }
        var getProgressWrapWidth = elem.offsetWidth;
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2500;
        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        var child = elem.getElementsByClassName('progress-bar');
        $(child).stop().animate({
            left: progressTotal
        }, animationLength);
    }
}
