// Array of images
const images = [
  './assets/images/home/banner.webp',
  './assets/images/home/slide3.webp',
  './assets/images/home/paraleximg123.webp'
];

let currentIndex = 0; // Start with the first image

// Get the carousel image element
const carouselImage = document.getElementById('carousel-image');

// Function to change the image
function changeImage() {
  currentIndex = (currentIndex + 1) % images.length; // Loop through images
  carouselImage.src = images[currentIndex];
}

if (currentIndex === 0) {
  carouselImage.style.height = '550px'; // First image height
} else if (currentIndex === 1) {
  carouselImage.style.height = '550px'; // Second image height
} else {
  carouselImage.style.height = '550px'; // Third image height
}


// Change image every 3 seconds
setInterval(changeImage, 3000);
