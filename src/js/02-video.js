import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const LOCAL_STORAGE_KEY = "videoplayer-current-time";
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) { 
    localStorage.setItem(LOCAL_STORAGE_KEY, data.seconds);
}

const currentTime = localStorage.getItem(LOCAL_STORAGE_KEY) || 0;

player.setCurrentTime(currentTime);

