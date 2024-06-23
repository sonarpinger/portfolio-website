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
    document.body.style.backgroundImage = `url('../static/images/backgrounds/${randomImage}')`;
});