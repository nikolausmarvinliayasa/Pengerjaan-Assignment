document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    fadeElements.forEach(fadeElement => {
        observer.observe(fadeElement);
    });
});
