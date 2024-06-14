document.addEventListener('DOMContentLoaded', () => {
    updateCounter()
});

document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('continue-counting')) {
        const popupId = event.target.getAttribute('data-popup-id');
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.classList.remove('active');
        }
    }
});

document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('reset-counting')) {
        document.querySelectorAll('.popup').forEach(popup => {
            popup.style.display = 'none';
        });
        counter = 0;
        currentCounter.innerHTML = counter
        resizeDisplay()
    }
})