

const cardData = {
  "slider1": {
    html: `        <div class="slider-container">
            <div class="slider-header">
                <h2>Center Mode</h2>
                <button>Show Code</button>
            </div>
            <div class="center-slider">
                <div class="slider-track">
                    <div class="slide">
                        <img src="https://picsum.photos/800/500?random=1" alt="Slide 1">
                    </div>
                    <div class="slide">
                        <img src="https://picsum.photos/800/500?random=2" alt="Slide 2">
                    </div>
                    <div class="slide">
                        <img src="https://picsum.photos/800/500?random=3" alt="Slide 3">
                    </div>
                    <div class="slide">
                        <img src="https://picsum.photos/800/500?random=4" alt="Slide 4">
                    </div>
                    <div class="slide">
                        <img src="https://picsum.photos/800/500?random=5" alt="Slide 5">
                    </div>
                </div>
                <div class="slider-nav">
                    <button class="prev-center-mode-btn"><i class="fas fa-chevron-left"></i></button>
                    <button class="next-center-mode-btn"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </div>`,
    css: `
    .center-slider {
    position: relative;
    max-width: 1200px;
    margin: 20px auto;
    overflow: hidden;
    padding: 20px 0;
}

.slider-track {
    display: flex;
    transition: transform 0.5s ease;
}

.slide {
    min-width: calc(33.333% - 20px);
    margin: 0 10px;
    transition: all 0.5s ease;
    transform: scale(0.8);
    opacity: 0.5;
}

.slide.active {
    transform: scale(1);
    opacity: 1;
}

.slide img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.slider-nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
}

.prev-center-mode-btn, .next-center-mode-btn {
    background: #fff;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.prev-center-mode-btn:hover, .next-center-mode-btn:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
}
    `,
    js: `
        (function(){
        const track = document.querySelector('.slider-track');
        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.prev-center-mode-btn');
        const nextBtn = document.querySelector('.next-center-mode-btn');
        
        let currentIndex = Math.floor(slides.length / 2);
        
        function updateSlider() {
            const slideWidth = slides[0].offsetWidth + 20;
            const centerOffset = (window.innerWidth - slideWidth) / 2;
            const offset = -currentIndex * slideWidth + centerOffset;
            
            track.style.transform = \`translateX(\${offset}px)\`;
            
            slides.forEach((slide, index) => {
                if (index === currentIndex) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        }
        
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
                updateSlider();
            }
        });
        
        window.addEventListener('resize', updateSlider);
        updateSlider();
    })();
    `
  },
  "slider2":{
    html:`
    
        <div class="slider-container">
    <div class="slider-header">
        <h2>Basic Dots Slider</h2>
        <button class="code-btn">Show Code</button>
    </div>
    <div class="slider2">
        <div class="slides2">
            <img src="https://picsum.photos/800/500?random=1" alt="Slide 1" class="active">
            <img src="https://picsum.photos/800/500?random=2" alt="Slide 2">
            <img src="https://picsum.photos/800/500?random=3" alt="Slide 3">
        </div>
    </div>
    <div class="dots">
        <button class="dot active" data-slide="0"></button>
        <button class="dot" data-slide="1"></button>
        <button class="dot" data-slide="2"></button>
    </div>
        </div>

    `,
    css:`
    .slider2 {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: auto;
    overflow: hidden;
}
.slides2 {
    display: flex;
    padding: 20px 0;
    margin: 10px 0;
    transition: transform 0.5s ease-in-out;
}
.slides2 img {
    width: 100%;
    border: none;
}
.dots {
    text-align: center;
    margin-top: 10px;
}

.dots .dot {
    width: 15px;
    height: 15px;
    margin: 5px;
    border: none;
    border-radius: 50%;
    background: #ccc;
    cursor: pointer;
    transition: background 0.3s ease;
}

.dots .dot.active {
    background: #333;
}

.slides2 img {
    width: 100%;
    display: none;
}

.slides2 img.active {
    display: block;
}


    `,
    js:`
    (function () {
  
const dots = document.querySelectorAll('.dots .dot');
const slides = document.querySelectorAll('.slider2 img');

function moveToSlide(slideIndex) {
  dots.forEach(dot => dot.classList.remove('active'));
  slides.forEach(slide => slide.classList.remove('active'));

  dots[slideIndex].classList.add('active');
  slides[slideIndex].classList.add('active');
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.getAttribute('data-slide'), 10);
      moveToSlide(slideIndex);
  });
});

  })();
    `
  },
  "slider3":{
    html:`
            <div class="slider-container">
            <div class="slider-header">
                <h2>Vertical Sliderr</h2>
                <button  class="code-btn">Show Code</button>
            </div>

            <div class="vertical-slider-container">
                <button class="vertical-prev-btn">↑</button>
                <button class="vertical-next-btn">↓</button>
                <div class="vertical-slider-track">
                    <div class="vertical-slide1">
                        <img src="https://picsum.photos/800/500?random=1" alt="Slide 1">
                    </div>
                    <div class="vertical-slide1">
                        <img src="https://picsum.photos/800/500?random=2" alt="Slide 2">
                    </div>
                    <div class="vertical-slide1">
                        <img src="https://picsum.photos/800/500?random=3" alt="Slide 3">
                    </div>
                </div>
            </div>    
        </div>
    `,
    css:`
    .vertical-slider-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.vertical-slider-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding: 0 100px;
    height: 350px;
}

.vertical-slider-track {
    gap: 20px;
    width: 100%;
    text-align: center;
    transition: transform 0.5s ease;
}

.vertical-slide1 {
    width: 100%;
    height: 100%;
}

.vertical-slide1 img {
    width: 100%;
    object-fit: cover;
}

.vertical-prev-btn, .vertical-next-btn {
    position: absolute;
    left: 20px;
    z-index: 10;
    padding: 10px 15px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.8);
    color: #141414;
    font-weight: 600;
    border: none;
    border-radius: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.vertical-next-btn {
    left: 20px;
    top: 60%;
}

.vertical-prev-btn {
    left: 20px;
    top: 40%;
}

.vertical-prev-btn:hover, .vertical-next-btn:hover {
    background: rgba(255, 255, 255, 1);
}
@media screen and (max-width: 768px) {
    .vertical-slider-wrapper {
        max-width: 100%;
        gap: 10px;
    }

    .vertical-slider-container {
        height: 300px;
        padding: 0 40px;
    }

    .vertical-prev-btn, .vertical-next-btn {
        width: 40px;
        height: 40px;
        padding: 8px 12px;
    }
}

/* Mobile (480px and below) */
@media screen and (max-width: 480px) {
    .vertical-slider-container {
        height: 250px;
        padding: 0 30px;
    }

    .vertical-slider-track {
        gap: 15px;
    }

    .vertical-prev-btn, .vertical-next-btn {
        width: 35px;
        height: 35px;
        padding: 6px 10px;
        left: 10px;
    }

    .vertical-next-btn {
        top: 65%;
    }

    .vertical-prev-btn {
        top: 35%;
    }
}

/* Small Mobile (320px and below) */
@media screen and (max-width: 320px) {
    .vertical-slider-container {
        height: 200px;
        padding: 0 25px;
    }

    .vertical-slider-track {
        gap: 10px;
    }

    .vertical-prev-btn, .vertical-next-btn {
        width: 30px;
        height: 30px;
        padding: 5px 8px;
        left: 5px;
    }
}
    `,
    js:`

    
    `
  },
  "slider4": {
    html :`
    <div class="slider-container">
            <div class="slider-header">
              <h2>Split Vertical Slider</h2>
              <button class="code-btn">Show Code</button>
            </div>
          
            <div class="split-slider">
              <div class="image-wrapper4">
                <img src="https://picsum.photos/600/400?random=1" alt="Image 1" class="top">
                <img src="https://picsum.photos/600/400?random=2" alt="Image 2">
                <img src="https://picsum.photos/600/400?random=3" alt="Image 3">
                <img src="https://picsum.photos/600/400?random=4" alt="Image 4">
              </div>
          
              <div class="carousel-buttons">
                <button id="prev4" aria-label="Previous">
                <i class="fas fa-chevron-left"></i>
                </button>
                <button id="next4" aria-label="Next">
                <i class="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
        </div>   
    ` ,
    css :`
    .slider-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.carousel-buttons {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    z-index: 99999;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
}

.split-slider img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: clip-path 0.6s ease-in-out;
    z-index: 1; 
}

.split-slider img.top {
    clip-path: inset(0 0 0 0);
    z-index: 999; 
}

.carousel-buttons {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    z-index: 99999;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
}

.carousel-buttons button {
    background-color: rgba(255, 255, 255, 0.8);
    color: #000000;
    border-radius: 50%;
    border: none;
    width: 50px;
    height: 50px;
    cursor: pointer;
    font-size: 16px;
}

.carousel-buttons button:hover {
    background-color: rgba(255, 255, 255, 1);
}

.split-slider {
    position: relative;
    width: 100%;
    padding: 20px 100px;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 16/9;
    overflow: hidden;
}

.image-wrapper4 {
    position: relative;
    width: 100%;
    height: 100%;
}
    
    ` ,
    js: `
  (function(){
    const images = document.querySelectorAll('.image-wrapper4 img');
const nextButton = document.getElementById('next4');
const prevButton = document.getElementById('prev4');
let currentIndex = 0;

const updateCarousel = (direction) => {
const currentImage = images[currentIndex];
currentIndex = (currentIndex + direction + images.length) % images.length;
const nextImage = images[currentIndex];


currentImage.style.clipPath = 'inset(0 100% 0 100%)';


setTimeout(() => {

  currentImage.style.clipPath = 'inset(0 0 0 0)';
}, 300);


setTimeout(() => {
  currentImage.classList.remove('top');
  nextImage.classList.add('top');
  nextImage.style.clipPath = 'inset(0 0 0 0)';
}, 600); 
};

nextButton.addEventListener('click', () => updateCarousel(1));
prevButton.addEventListener('click', () => updateCarousel(-1));



  })();

    `
  },
  "slider5" : {
    html :`
    
        <div class="slider-container">
            <div class="slider-header">
                <h2>Cards Rotate</h2>
                <button class="code-btn">Show Code</button>
            </div>


            <div class="slider5-cards">
                <div class="card card1">
                    <h3 class="card-title">Mountain View</h3>
                </div>
                <div class="card card2">
                    <h3 class="card-title">Ocean Sunset</h3>
                </div>
                <div class="card card3">
                    <h3 class="card-title">Forest Path</h3>
                </div>
            </div>

        </div>

    
    `, 
    css :`
    .slider5 {
    padding: 40px;
    width: 100%;
    position: relative;
}

/* Cards container */
.slider5-cards {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    position: relative;  /* Ensure that absolute positioning works inside this container */
}

/* Card styling */
.slider5-cards .card {
    position: absolute;   
    width: 200px;
    height: 400px;
    left: 50%;            
    border: white 2px solid;
    cursor: pointer;
    transform: translateX(-50%); 
    opacity: 1;
    transition: opacity 0.3s ease;
    box-shadow: rgba(0,0,0,0.2) #333 inset;
}
.card-title {
    position: absolute;
    bottom: 30px;
    left: 20px;
    color: white;
    font-size: 24px;
    font-weight: bold;
    z-index: 2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.slider5-cards  .card1 {
    transform:rotate(5deg) ;

    background-image:url('https://picsum.photos/600/400?random=1');
}

.slider5-cards .card2 {
    background-image:url('https://picsum.photos/600/400?random=2');
    z-index: 99999;
    
}

.slider5-cards .card3 {
    background-image:url('https://picsum.photos/600/400?random=3');
    transform:translateX(-100%) rotate(-5deg) ;


}

.slider5-cards .card {
    transition: all 0.3s ease;
}

.slider5-cards .card.center-card {
    transform: translateX(-50%) !important;
    z-index: 99999;
}

.slider5-cards .card.prev-card {
    transform: translateX(-100%) rotate(-5deg) !important;
    z-index: 1;
}

}
    
    `,
    js :`
      (function(){
    const cards = document.querySelectorAll('.slider5-cards .card');

cards.forEach(card => {
  card.addEventListener('click', () => {
      // Find current center card
      const currentCenter = document.querySelector('.center-card');
      
      if (currentCenter && currentCenter !== card) {
          // Move current center card to left position
          currentCenter.classList.remove('center-card');
          currentCenter.classList.add('prev-card');
          currentCenter.style.transform = 'translateX(-100%) rotate(-5deg)';
          currentCenter.style.zIndex = '1';
          
          // Remove prev-card class from others
          cards.forEach(c => {
              if (c !== currentCenter && c !== card) {
                  c.classList.remove('prev-card');
                  c.style.transform = 'rotate(5deg)';
              }
          });
      }
      
      // Center the clicked card
      card.classList.remove('prev-card');
      card.classList.add('center-card');
      card.style.transform = 'translateX(-50%)';
      card.style.zIndex = '99999';
  });
});







  })();
    
    `
  }
};


document.addEventListener('DOMContentLoaded', () => {

  (function(){
      const track = document.querySelector('.slider-track');
      const slides = document.querySelectorAll('.slide');
      const prevBtn = document.querySelector('.prev-center-mode-btn');
      const nextBtn = document.querySelector('.next-center-mode-btn');
      
      let currentIndex = Math.floor(slides.length / 2);
      
      function updateSlider() {
          const slideWidth = slides[0].offsetWidth + 20;
          const centerOffset = (window.innerWidth - slideWidth) / 2;
          const offset = -currentIndex * slideWidth + centerOffset;
          
          track.style.transform = `translateX(${offset}px)`;
          
          slides.forEach((slide, index) => {
              if (index === currentIndex) {
                  slide.classList.add('active');
              } else {
                  slide.classList.remove('active');
              }
          });
      }
      
      prevBtn.addEventListener('click', () => {
          if (currentIndex > 0) {
              currentIndex--;
              updateSlider();
          }
      });
      
      nextBtn.addEventListener('click', () => {
          if (currentIndex < slides.length - 1) {
              currentIndex++;
              updateSlider();
          }
      });
      
      window.addEventListener('resize', updateSlider);
      updateSlider();

  })();

  // slider 2


  (function () {
  
const dots = document.querySelectorAll('.dots .dot');
const slides = document.querySelectorAll('.slider2 img');

function moveToSlide(slideIndex) {
  dots.forEach(dot => dot.classList.remove('active'));
  slides.forEach(slide => slide.classList.remove('active'));

  dots[slideIndex].classList.add('active');
  slides[slideIndex].classList.add('active');
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.getAttribute('data-slide'), 10);
      moveToSlide(slideIndex);
  });
});

  })();


  //slider 3 

  (function() {
    const verticalTrack = document.querySelector('.vertical-slider-track');
    const verticalSlides = document.querySelectorAll('.vertical-slide1');
    const prevBtn = document.querySelector('.vertical-prev-btn');
    const nextBtn = document.querySelector('.vertical-next-btn');
    const sliderWrapper = document.querySelector('.vertical-slider-wrapper');
    
    let currentVerticalIndex = 0;
    
    function updateVerticalSlider() {
        const slideHeight = verticalSlides[0].offsetHeight + 20;
        const offset = -currentVerticalIndex * slideHeight;
        
        // Smooth transition
        verticalTrack.style.transform = `translateY(${offset}px)`;
        verticalTrack.style.transition = 'transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        
        // Fun animations for active/inactive slides
        verticalSlides.forEach((slide, index) => {
            if (index === currentVerticalIndex) {
                slide.style.opacity = '1';
            } else {
                slide.style.opacity = '0.7';
            }
            slide.style.transition = 'all 0.5s ease-in-out';
        });
    }
    
    function goToNextSlide() {
        currentVerticalIndex = (currentVerticalIndex + 1) % verticalSlides.length;
        updateVerticalSlider();
    }
    
    function goToPrevSlide() {
        currentVerticalIndex = currentVerticalIndex <= 0 ? verticalSlides.length - 1 : currentVerticalIndex - 1;
        updateVerticalSlider();
    }
    
    prevBtn.addEventListener('click', goToPrevSlide);
    nextBtn.addEventListener('click', goToNextSlide);
    
    window.addEventListener('resize', updateVerticalSlider);
    updateVerticalSlider();
  })();

  // slider 4

  (function(){
    const images = document.querySelectorAll('.image-wrapper4 img');
const nextButton = document.getElementById('next4');
const prevButton = document.getElementById('prev4');
let currentIndex = 0;

const updateCarousel = (direction) => {
const currentImage = images[currentIndex];
currentIndex = (currentIndex + direction + images.length) % images.length;
const nextImage = images[currentIndex];


currentImage.style.clipPath = 'inset(0 100% 0 100%)';


setTimeout(() => {

  currentImage.style.clipPath = 'inset(0 0 0 0)';
}, 300);


setTimeout(() => {
  currentImage.classList.remove('top');
  nextImage.classList.add('top');
  nextImage.style.clipPath = 'inset(0 0 0 0)';
}, 600); 
};

nextButton.addEventListener('click', () => updateCarousel(1));
prevButton.addEventListener('click', () => updateCarousel(-1));



  })();


  // slider 5 
  (function(){
    const cards = document.querySelectorAll('.slider5-cards .card');

cards.forEach(card => {
  card.addEventListener('click', () => {
      // Find current center card
      const currentCenter = document.querySelector('.center-card');
      
      if (currentCenter && currentCenter !== card) {
          // Move current center card to left position
          currentCenter.classList.remove('center-card');
          currentCenter.classList.add('prev-card');
          currentCenter.style.transform = 'translateX(-100%) rotate(-5deg)';
          currentCenter.style.zIndex = '1';
          
          // Remove prev-card class from others
          cards.forEach(c => {
              if (c !== currentCenter && c !== card) {
                  c.classList.remove('prev-card');
                  c.style.transform = 'rotate(5deg)';
              }
          });
      }
      
      // Center the clicked card
      card.classList.remove('prev-card');
      card.classList.add('center-card');
      card.style.transform = 'translateX(-50%)';
      card.style.zIndex = '3';
  });
});







  })();



});



    






function showCode(className) {
  const data = cardData[className];
  if (data) {
      document.getElementById('htmlCode').innerHTML = escapeHtml(data.html.trim());
      document.getElementById('cssCode').innerHTML = escapeHtml(data.css.trim());
      document.getElementById('jsCode').innerHTML = escapeHtml(data.js.trim());

      const modal = new bootstrap.Modal(document.getElementById('codeModal'));
      modal.show();
  }
}

function copyCode(elementId) {
  const element = document.getElementById(elementId);
  const text = element.textContent;
  
  navigator.clipboard.writeText(text).then(() => {
      showPopup('Code copied successfully!');
  }).catch(() => {
      showPopup('Failed to copy code', true);
  });
}

function showPopup(message, isError = false) {
  const popup = document.createElement("div");
  popup.textContent = message;
  popup.className = "popup";
  popup.style.backgroundColor = isError ? "#dc3545" : "#28a745";

  document.body.appendChild(popup);

  setTimeout(() => {
      popup.classList.add("fade-out");
      popup.addEventListener("animationend", () => popup.remove());
  }, 3000);
}
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}



function filterSliders() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const sliderContainers = document.querySelectorAll('.slider-container');

  sliderContainers.forEach(container => {
      const title = container.querySelector('.slider-header h2').textContent.toLowerCase();
      
      if (title.includes(input)) {
          container.style.display = "block";
      } else {
          container.style.display = "none";
      }
  });
}
