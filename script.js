document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.carousel img');
    let index = 0;

    function carousel() {
        images.forEach(img => img.style.display = "none");
        index = (index + 1) % images.length;
        images[index].style.display = "block";
        setTimeout(carousel, 3000); // Change image every 3 seconds
    }

    carousel();
});
