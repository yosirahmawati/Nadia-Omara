// Scroll animation for the congratulations section
window.addEventListener('scroll', function() {
    const congratsSection = document.getElementById('congratulations-section');
    const sectionPos = congratsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionPos < windowHeight - 100) {
        congratsSection.classList.add('visible');
    }
});

// Sparkling diamond effect
setInterval(() => {
    const diamond = document.querySelector('.diamond');
    const sparkle = Math.random() * 10;
    diamond.style.boxShadow = `0 0 ${sparkle}px 10px rgba(255, 255, 255, 0.7)`;
}, 300);
