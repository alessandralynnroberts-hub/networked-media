// [video, duration]
const videos = [
  ["l0LvSdBwUmM", 330], // https://www.youtube.com/watch?v=l0LvSdBwUmM
  ["q2TZAfSx2JE", 130], // https://www.youtube.com/watch?v=q2TZAfSx2JE
  ["TyJgQaRop2Y", 120], // https://www.youtube.com/watch?v=TyJgQaRop2Y
  ["3q8WdhQO9bU", 208], // https://www.youtube.com/watch?v=3q8WdhQO9bU
  ["j5ExlQevZCc", 366], // https://www.youtube.com/watch?v=j5ExlQevZCc
  ["-kCauthc8Ow", 600], // https://www.youtube.com/watch?v=-kCauthc8Ow
];

var player0, player1;
let video_index = -1;
const interval = 5000; //ms
let intervals_passed = 0;

window.onYouTubeIframeAPIReady = function () {
  player0 = createPlayer("video0");
  player1 = createPlayer("video1");
};

function createPlayer(div_id) {
  return new YT.Player(div_id, {
    height: "112%",
    width: "112%",
    videoId: getNewVideoId(),
    playerVars: {
      autoplay: 1,
      controls: 0,
      mute: 1,
      showinfo: 0,
      start: getRandomTime(),
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    event.target.unloadModule("captions");
    event.target.unloadModule("cc");
  }
}

function getNewVideoId() {
  let new_video_index;
  do {
    new_video_index = Math.floor(Math.random() * videos.length);
  } while (new_video_index == video_index); //ensure new video is not the current video
  video_index = new_video_index;
  return videos[video_index][0];
}

// max start time is (interval / 500) seconds before the end of the video,
// so a video never gets loaded in such a way where it will end halfway through
// each video lasts interval * 2 seconds because of the double buffer design
function getRandomTime() {
  return Math.floor(Math.random() * (videos[video_index][1] - interval / 500));
}

setTimeout(() => {
  document.getElementById("video0").style.opacity = 1;
  document.getElementById("video1").style.opacity = 1;

  document.getElementById("video0").style.zIndex = 1;
  document.getElementById("video1").style.zIndex = 2;
}, 5500); //hide first loading process and pause button

setInterval(switchVideo, interval);
function switchVideo() {
  if (intervals_passed % 2) {
    document.getElementById("video0").style.zIndex = 2;
    document.getElementById("video1").style.zIndex = 1;
    player1.loadVideoById(getNewVideoId(), getRandomTime());
  } else {
    document.getElementById("video0").style.zIndex = 1;
    document.getElementById("video1").style.zIndex = 2;
    player0.loadVideoById(getNewVideoId(), getRandomTime());
  }
  intervals_passed++;
}
