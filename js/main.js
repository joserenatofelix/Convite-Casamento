var audio = document.getElementById("audio");

audio.currentTime = 10;
document.addEventListener("visibilitychange", handleVisibilityChange, false);

function handleVisibilityChange() {
    if (document.hidden) {
      audio.pause();
    } else {
      audio.play();
    }
}

