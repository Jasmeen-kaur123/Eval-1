const carouselImages1 = [
  './assets/images/home/room1.jpg',
  './assets/images/home/room1-2.jpg'
];
let currentImageIndex1 = 0;
const carouselImgElement1 = document.getElementById('carousel-img');
function changeImageRoom1() {
  currentImageIndex1 = (currentImageIndex1 + 1) % carouselImages1.length;
  carouselImgElement1.src = carouselImages1[currentImageIndex1];
}
setInterval(changeImageRoom1,2000);
// Room 2 carousel
const carouselImages2 = [
  './assets/images/home/room2.jpg',
  './assets/images/home/room2-2.jpg',
];
let currentImageIndex2 = 0;
const carouselImgElement2 = document.getElementById('carousel-img2');
function changeImageRoom2() {
  currentImageIndex2 = (currentImageIndex2 + 1) % carouselImages2.length;
  carouselImgElement2.src = carouselImages2[currentImageIndex2];
}
setInterval(changeImageRoom2, 2000);
// Room 3 carousel
const carouselImages3 = [
  './assets/images/home/room3.jpg',
  './assets/images/home/room3-2.jpg'
];
let currentImageIndex3 = 0;
const carouselImgElement3 = document.getElementById('carousel-img3');
function changeImageRoom3() {
  currentImageIndex3 = (currentImageIndex3 + 1) % carouselImages3.length;
  carouselImgElement3.src = carouselImages3[currentImageIndex3];
}
setInterval(changeImageRoom3, 2000);

