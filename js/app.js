let fillbar = document.querySelector(".fill");
let audios = ["Audio_One.m4a", "Audio_Two.mp3", "Audio_Three.mp3"];
let covers = [
  "data:image/jpeg;base64,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",
  "cover2.jpg",
  "cover3.jpg",
];
let currentTime = document.querySelector(".time");

// Create An Object Of Audio

let audio = new Audio();
let currentSong = 0;

// whenever the window load, song should play automaticly

window.onload = playSong();

// let's play the song by this function whenever window load

function playSong() {
  audio.src = audios[currentSong];
  audio.play();
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    let playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = '<i class="fa fa-pause"></i>';
    playBtn.style.paddingLeft = "30px";
  } else {
    audio.pause();
    playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = '<i class="fa fa-play"></i>';
    playBtn.style.paddingLeft = "33px";
  }
}

audio.addEventListener("timeupdate", function () {
  let position = audio.currentTime / audio.duration;
  fillbar.style.width = position * 100 + "%";

  convertTime(Math.round(audio.currentTime));

  //let's work on the play next song when current song completes

  if (audio.ended) {
    nextAudio();
  }
});

function convertTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;

  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  currentTime.textContent = min + ":" + sec;

  totalTime(Math.round(audio.duration));
}

function totalTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;

  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  currentTime.textContent = min + ":" + sec;
}

function nextAudio() {
  currentSong++;
  if (currentSong > 2) {
    currentSong = 0;
  }
  playSong();
  playBtn = document.querySelector(".play-pause");
  playBtn.innerHTML = '<i class="fa fa-pause"></i>';
  playBtn.style.paddingLeft = "30px";
  // just one line jquery for changing the covers

  $(".img img").attr("src", covers[currentSong]);
}

function prevAudio() {
  currentSong--;
  if (currentSong < 0) {
    currentSong = 2;
  }
  playSong();
  playBtn = document.querySelector(".play-pause");
  playBtn.innerHTML = '<i class="fa fa-pause"></i>';
  playBtn.style.paddingLeft = "30px";
  // just one line jquery for changing the covers

  $(".img img").attr("src", covers[currentSong]);
}

function decreaseVolume() {
  audio.volume -= 0.25;
}

function increaseVolume() {
  audio.volume += 0.25;
}

//fixing the speaker muted button

let volumeUp = document.querySelector(".volume-up");
volumeUp.addEventListener("click", function () {
  if (audio.volume === 1) {
    audio.volume = 0;
    document.querySelector(".volume-up i").className = "fa fa-volume-mute";
  } else {
    audio.volume = 1;
    document.querySelector(".volume-up i").className = "fa fa-volume-up";
  }
});
