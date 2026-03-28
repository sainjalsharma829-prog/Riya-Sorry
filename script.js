// Typing Effect
const text = "I'm So Sorry, Riya 💔";
const typingElement = document.getElementById('typingText');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
    }
}

const audio = new Audio('C:/Users/Dell/Downloads/WhatsApp Video 2026-03-28 at 6.46.16 PM.mp3');
audio.loop = false;
audio.volume = 0.5;
let playCount = 0;
const maxPlays = 3;

function playSong() {
    audio.play();
    playCount++;
    if (playCount < maxPlays) {
        audio.onended = () => setTimeout(playSong, 100);
    }
}

document.addEventListener('click', () => {
    if (playCount === 0) playSong();
}, { once: true });

window.onload = () => {
    typeWriter();
    createHearts();
    observeFadeIns();
    // setTimeout(() => document.getElementById('riyaImage').src = 'YOUR_IMAGE_PATH_HERE.jpg', 2000); // Image already set in HTML
};

// Floating Hearts
function createHearts() {
    const container = document.getElementById('heartsContainer');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        heart.style.zIndex = '0';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}

// Fade-in Observer
function observeFadeIns() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Surprise Button
document.getElementById('surpriseBtn').addEventListener('click', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    document.getElementById('surprisePopup').classList.remove('hidden');
});

function closePopup() {
    document.getElementById('surprisePopup').classList.add('hidden');
}

// Smooth Scroll
document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
