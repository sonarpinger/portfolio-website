document.addEventListener("DOMContentLoaded", function() {
    // List of image file names
    const imageFiles = [
        'back_og.webp',
        'hyperbigcloud.webp'
    ];

    // Function to get a random image file name
    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * imageFiles.length);
        return imageFiles[randomIndex];
    }

    // Set the background image URL
    const randomImage = getRandomImage();
    document.body.style.backgroundImage = `url('static/images/backgrounds/${randomImage}')`;
});

// divs with class "elipses" have an animated elipses effect
document.addEventListener("DOMContentLoaded", function() {
    const elipses = document.querySelectorAll('.elipses');
    elipses.forEach(function(elipses) {
        let count = 0;
        setInterval(function() {
            text = elipses.textContent.replaceAll('.', '');
            count++;
            append = '....'.substring(0, count % 5)
            elipses.textContent = text + append;
        }, 500);
    });
});
