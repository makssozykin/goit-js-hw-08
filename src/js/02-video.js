import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const LOCAL_STORAGE = "videoplayer-current-time";
const player = new Player(iframe, {
    loop: true,
    fullscreen: true,
    quality: '720p'
});

const onPlay = function (data) { 
    localStorage.setItem(LOCAL_STORAGE, data.seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE));

