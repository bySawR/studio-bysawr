document.addEventListener("DOMContentLoaded", function() {
    var fadeElements = document.querySelectorAll(".fade-in-bottom");

    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, options);

    fadeElements.forEach(function(element) {
        observer.observe(element);
    });
});
