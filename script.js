// Function to add the 'visible' class to elements when they are in the viewport
const fadeInOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing after fade-in
        }
    });
};

// Create an intersection observer
const observer = new IntersectionObserver(fadeInOnScroll);

// Observe each element with the 'fade' class
document.querySelectorAll('.fade').forEach(element => {
    observer.observe(element);
});

