function play(src) {
    var audio = document.getElementsByClassName(src);
    for (let item of audio) {
        item.play();
    }
    audio[0].currentTime=audio[3].currentTime;
    audio[1].currentTime=audio[3].currentTime;
    audio[2].currentTime=audio[3].currentTime;
    audio[3].currentTime=audio[3].currentTime;
}

function stop(src) {
    var audio = document.getElementsByClassName(src);

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