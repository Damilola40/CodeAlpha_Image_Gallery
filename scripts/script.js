const image = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const prevBtn = document.querySelector('#nav-prev');
const nextBtn = document.querySelector('#nav-next');
const slideshowBtn = document.querySelector('.slideshow-btn')

let currentIndex = 0;

// Open lightbox
image.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
    });
});

// Close lightbox
const closeButton = () => {
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
}
image.forEach((img) => {
    closeButton();
});

// Navigate to previous image
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = image.length - 1; // Loop to last image
    }
    lightboxImg.src = image[currentIndex].src;
});

// Navigate to next image
nextBtn.addEventListener("click", () => {
    if (currentIndex <= image.length) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop to first image
    }
    lightboxImg.src = image[currentIndex].src
})

// SlideShow
const playIcon = slideshowBtn.querySelector(".slideshow-btn i");
let isPlaying = false;
let interval;

slideshowBtn.addEventListener("click", () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
        console.log("slideshow started")
        interval = setInterval(() => {
            lightboxImg.classList.add("fade");
            setTimeout(() => {
                if (currentIndex < image.length - 1) {
                    currentIndex++;
                } else {
                    currentIndex = 0; // Loop to first image
                }
                lightboxImg.src = image[currentIndex].src;
                lightboxImg.classList.remove("fade");
            }, 500);
        }, 5000);
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
    } else {
        clearInterval(interval);
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
    }
});

