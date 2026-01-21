// White City Background Media Controller
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.createElement("audio");
  audio.src = "assets/audio/background.mp3"; // replace with your audio
  audio.loop = true;
  audio.volume = 0.5;
  audio.autoplay = true;
  audio.muted = false;

  const video = document.getElementById("bg-video");
  if (video) {
    video.muted = true;
    video.play();
  }

  document.body.appendChild(audio);

  const muteBtn = document.getElementById("mute-toggle");
  if (muteBtn) {
    muteBtn.addEventListener("click", () => {
      audio.muted = !audio.muted;
      muteBtn.innerText = audio.muted ? "Unmute" : "Mute";
    });
  }
});
