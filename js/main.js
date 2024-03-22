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

    // Defina a data do casamento
    const weddingDate = new Date("2024-04-06T12:00:00");

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;

      if (distance < 0) {
        clearInterval(interval);
        document.querySelector(".countdown-container").innerHTML = "<div class='circle'><div class='countdown-item'>Já se casaram!</div></div>";
      }
    }

    // Atualize o contador a cada segundo
    const interval = setInterval(updateCountdown, 1000);

    // Atualize imediatamente ao carregar a página
    updateCountdown();