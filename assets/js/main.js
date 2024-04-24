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
    const weddingDate = new Date("2050-04-06T12:00:00");

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

    // Número de corações
const numberOfHearts = 35;

// Função para gerar um número aleatório entre dois valores
function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

// Função para criar corações
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${randomBetween(0, window.innerWidth)}px`; // Posição horizontal aleatória
    heart.style.animationDuration = `${randomBetween(2, 5)}s`; // Duração da animação aleatória
    document.getElementById('heart-container').appendChild(heart);

    // Remover o coração do DOM após a animação terminar
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Criar corações
for (let i = 0; i < numberOfHearts; i++) {
    createHeart();
}

var audio = document.getElementById("audio");
var playButton = document.getElementById("playButton");
var stopButton = document.getElementById("stopButton");
var volumeRange = document.getElementById("volumeRange");

playButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    playButton.textContent = "⏸";
  } else {
    audio.pause();
    playButton.textContent = "▶";
  }
});

stopButton.addEventListener("click", function () {
  audio.pause();
  audio.currentTime = 0;
  playButton.textContent = "▶";
});

volumeRange.addEventListener("input", function () {
  audio.volume = volumeRange.value;
});



