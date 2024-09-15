document.addEventListener('DOMContentLoaded', function() {
    const photo = document.getElementById('profilePhoto');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const close = document.querySelector('.close');

    photo.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImage.src = this.src;
    });

    close.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});