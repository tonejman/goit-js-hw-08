import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function saveCurrentPlayTime(time) {
  const { seconds } = time;
  console.log(`${seconds}s`);
  localStorage.setItem('videoplayer-current-time', seconds);
}

const throttleUpdateTime = throttle(saveCurrentPlayTime, 1000);
player.on('timeupdate', throttleUpdateTime);
const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}
