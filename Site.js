async function play(src) {

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    var audio = document.getElementsByClassName(src);
    console.log(count);
    for (let item of audio) {
        item.play();
        item.muted = true;
    }
    if (count >= 4) {
        stop(src);
        console.log("hier");
        setTimeout(function () {
            for (let item of audio) {
                item.muted = false;
                item.play();
            }
        }, 2000)
    }
    count = 0;
}
var count = 0;
function myOnCanPlayFunction(nmb) {
    console.log('Can play' + nmb);
    count++;
}


function stop(src) {
    var audio = document.getElementsByClassName(src);
    console.log("stop")
    for (let item of audio) {
        item.pause();
        item.currentTime = 0;
    }
}



function mute(src, btn) {
    var audio = document.getElementById(src);
    var button = document.getElementById(btn);
    if (audio.muted === false) {
        audio.muted = true;
        button.style.height = '150px';
        button.style.width = '150px';
    } else {
        audio.muted = false;
        button.style.height = '300px';
        button.style.width = '300px';
    }
}