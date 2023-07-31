import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const LOCAL_STORAGE = "videoplayer-current-time";
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) { 
    localStorage.setItem(LOCAL_STORAGE, data.seconds);
}

const currentTime = localStorage.getItem(LOCAL_STORAGE) || 0;

player.setCurrentTime(currentTime);

