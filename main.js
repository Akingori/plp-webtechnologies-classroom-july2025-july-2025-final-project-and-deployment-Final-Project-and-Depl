let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

// Show the current slide based on index
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

// Move to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Initialize slider if slides exist
if (slides.length > 0) {
  showSlide(currentSlide);           // Show the first slide initially
  setInterval(nextSlide, 3000);      // Change slide every 3 seconds
}
