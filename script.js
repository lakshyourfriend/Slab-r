// Smoother, high-performance cursor logic using transforms
const cursor = document.getElementById('cursor');

// Update cursor position using translate3d for hardware acceleration
document.addEventListener('mousemove', (e) => {
    // Using requestAnimationFrame would be even better for very high refresh rates,
    // but direct transform update is performant enough for this use case
    // and avoids the "lag" of transition properties on position.
    cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
});

// Add hover effect scaling
const links = document.querySelectorAll('a, button, .service-card');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovered');
    });
});

// Ensure cursor is visible when mouse moves (sometimes browser hides it initially)
document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
});
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
});
