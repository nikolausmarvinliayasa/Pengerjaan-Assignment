document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const carSliders = document.querySelectorAll('.car-slider');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const className = this.getAttribute('data-class');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            carSliders.forEach(slider => {
                if (className === 'all' || slider.getAttribute('data-class') === className) {
                    slider.style.display = 'flex';
                } else {
                    slider.style.display = 'none';
                }
            });
        });
    });

    document.querySelector('.filter-btn[data-class="all"]').click();
});


