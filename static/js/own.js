document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('#testimonials .items');
    const prevBtn = document.querySelector('#testimonials .prev');
    const nextBtn = document.querySelector('#testimonials .next');

    nextBtn.addEventListener('click', () => {
        container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        container.scrollBy({ left: -container.offsetWidth, behavior: 'smooth' });
    });
});

