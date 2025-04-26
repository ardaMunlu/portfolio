// --- Particle.js Config ---
particlesJS('particles-js', {
  particles: {
      number: { value: 80 },
      size: { value: 3 },
      move: { speed: 2 },
      line_linked: {
          enable: true,
          distance: 150,
          color: "#00ffe7"
      },
      color: { value: "#00ffe7" }
  }
});

// --- Typing Animation ---
const typingText = document.getElementById('typing-text');
const textArray = ["Hi, I'm Arda Ünlü.", "Software Developer.", "Tech Enthusiast.", "Futurist."];
let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < textArray[textIndex].length) {
      typingText.textContent += textArray[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 100);
  } else {
      setTimeout(eraseText, 2000);
  }
}

function eraseText() {
  if (charIndex > 0) {
      typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, 50);
  } else {
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(typeText, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(typeText, 1000);
});

// --- Section Animation ---
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
          section.classList.add('show');
      } else {
          section.classList.remove('show');
      }
  });
});

// --- Dark/Light Mode Toggle ---
const toggleBtn = document.getElementById('toggle-mode');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// --- Music Player ---
const music = document.getElementById('background-music');
const musicToggle = document.getElementById('music-toggle');

let musicStarted = false;

function fadeInMusic() {
  music.volume = 0;
  const interval = setInterval(() => {
      if (music.volume < 0.5) {
          music.volume += 0.01;
      } else {
          clearInterval(interval);
      }
  }, 100);
}

function startMusic() {
  if (!musicStarted) {
      music.muted = false;
      music.play()
          .then(() => {
              fadeInMusic();
              musicToggle.textContent = '🔊';
          })
          .catch(err => console.error('Autoplay blocked:', err));
      musicStarted = true;
  }
}

['click', 'scroll', 'keydown', 'touchstart'].forEach(event => {
  window.addEventListener(event, startMusic, { once: true });
});

musicToggle.addEventListener('click', () => {
  if (music.paused) {
      music.play();
      musicToggle.textContent = '🔊';
  } else {
      music.pause();
      musicToggle.textContent = '🔇';
  }
});
