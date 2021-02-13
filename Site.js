async function play(src) {

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    var audio = document.getElementsByClassName(src);
    console.log(count);
    for (let item of audio) {
        item.play();
        item.muted = true;
    }
    while(count<4){}
    if (count >= 4) {
        console.log("hier");
            for (let item of audio) {
                item.currentTime = 0;
                item.muted = false;
            }

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