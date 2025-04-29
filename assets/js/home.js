window.onload = function() {
  const heroImage = document.querySelector('.hero-image');
  const heroText = document.querySelector('.hero-text');

  // Add class to trigger image animation after 2 seconds
  setTimeout(() => {
    heroImage.classList.add('loaded');
  }, 1000);

  // Fade in hero text after image expands
  setTimeout(() => {
    heroText.classList.add('visible');
  }, 1000); // Fade-in text after the image expansion is complete
}




document.addEventListener('DOMContentLoaded', function () {
  // Initialize carousel
  const carousel = document.querySelector('.carousel');
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.product-card');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const dotsContainer = document.querySelector('.carousel-dots');

  const cardWidth = cards[0].offsetWidth + 25; // width + gap
  let currentPosition = 0;
  let maxPosition = track.scrollWidth - carousel.offsetWidth;
  let visibleCards = Math.floor(carousel.offsetWidth / cardWidth);

  // Create dots
  function createDots() {
    dotsContainer.innerHTML = '';
    const dotCount = Math.ceil(track.scrollWidth / carousel.offsetWidth);

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement('div');
      dot.classList.add('carousel-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentPosition = i * carousel.offsetWidth;
        track.style.transform = `translateX(-${currentPosition}px)`;
        updateDots();
        updateButtons();
      });
      dotsContainer.appendChild(dot);
    }
  }

  // Update active dot
  function updateDots() {
    const dots = document.querySelectorAll('.carousel-dot');
    const activeDotIndex = Math.round(currentPosition / carousel.offsetWidth);

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeDotIndex);
    });
  }

  // Function to update button states
  function updateButtons() {
    prevButton.disabled = currentPosition === 0;
    nextButton.disabled = currentPosition >= maxPosition - 10; // small buffer for rounding
  }

  // Function to move carousel
  function moveCarousel(amount) {
    currentPosition += amount;

    // Ensure we don't scroll past the beginning or end
    currentPosition = Math.max(0, Math.min(currentPosition, maxPosition));

    track.style.transform = `translateX(-${currentPosition}px)`;
    updateButtons();
    updateDots();
  }

  // Button event listeners
  prevButton.addEventListener('click', () => {
    moveCarousel(-cardWidth * visibleCards);
  });

  nextButton.addEventListener('click', () => {
    moveCarousel(cardWidth * visibleCards);
  });

  // Touch and drag functionality
  let isDragging = false;
  let startX, startScrollLeft;

  track.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    startScrollLeft = currentPosition;
    carousel.style.cursor = 'grabbing';
    carousel.style.userSelect = 'none';
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX;
    const walk = (x - startX) * 2; // Multiply for faster dragging
    currentPosition = startScrollLeft - walk;
    track.style.transform = `translateX(-${currentPosition}px)`;
    updateButtons();
    updateDots();
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    carousel.style.cursor = 'grab';
    carousel.style.userSelect = '';
  });

  // Initialize dots and buttons
  createDots();
  updateButtons();

  // Trigger animations when the section is in view
  const productsSection = document.querySelector('.products-section');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate');
            }, index * 100);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(productsSection);

  // Recalculate on resize
  window.addEventListener('resize', () => {
    maxPosition = track.scrollWidth - carousel.offsetWidth;
    visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
    updateButtons();
    updateDots();
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project-card");
  const popup = document.getElementById("projects-popup");
  const popupTitle = document.querySelector(".popup-title");
  const popupGallery = document.querySelector(".popup-gallery");

  // Function to open popup
  function openProjectsPopup(title, galleryImages) {
    popupTitle.textContent = title;

    // Clear existing gallery images
    popupGallery.innerHTML = "";

    // Dynamically generate images for the gallery
    galleryImages.forEach((image) => {
      const imgDiv = document.createElement("div");
      imgDiv.classList.add("popup-image");
      imgDiv.style.backgroundImage = `url('${image}')`;
      imgDiv.addEventListener("click", () => openLightbox(image));
      popupGallery.appendChild(imgDiv);
    });

    popup.style.display = "flex";
  }

  // Function to open lightbox
  function openLightbox(imageSrc) {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    const lightboxImage = document.createElement("img");
    lightboxImage.src = imageSrc;
    lightboxImage.classList.add("lightbox-image");

    const closeLightboxBtn = document.createElement("span");
    closeLightboxBtn.classList.add("close-lightbox-btn");
    closeLightboxBtn.innerHTML = "&times;";
    closeLightboxBtn.addEventListener("click", () => closeLightbox(lightbox));

    lightbox.appendChild(lightboxImage);
    lightbox.appendChild(closeLightboxBtn);
    document.body.appendChild(lightbox);
  }

  // Function to close lightbox
  function closeLightbox(lightbox) {
    lightbox.remove();
  }

  // Assign click event to each project card
  projects.forEach((project) => {
    project.addEventListener("click", function () {
      const projectTitle = project.getAttribute("data-title");
      const galleryImages = JSON.parse(project.getAttribute("data-gallery"));
      openProjectsPopup(projectTitle, galleryImages);
    });
  });

  // Close popup function
  function closeProjectsPopup() {
    popup.style.display = "none";
  }

  // Close popup when clicking outside
  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      closeProjectsPopup();
    }
  });

  // Attach close function globally
  window.closeProjectsPopup = closeProjectsPopup;
});


 gsap.from(".partner-logo", {
        duration: 1,
        opacity: 0,
        y: -50,
        stagger: 0.3, // Adds stagger effect to the logos and names
        ease: "power3.out"
    });

    gsap.from(".partner-name", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: "power3.out",
        delay: 0.5 // Slight delay to make the text appear after the logo animation
    });



    // GSAP Animation for Blog Section
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".blog-card", {
      opacity: 0,
      y: 100,
      stagger: 0.3,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: ".blog-section",
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none none",
      }
    });


function openPopup(title, image, content) {
    const popup = document.querySelector('.popup');
    const popupContent = popup.querySelector('.popup-content');
    const popupTitle = popupContent.querySelector('h2');
    const popupImage = popupContent.querySelector('img');
    const popupText = popupContent.querySelector('p');

    // Set content dynamically
    popupTitle.textContent = title;
    popupImage.src = image;
    popupText.textContent = content;

    // Display the popup
    popup.style.display = 'flex';
    setTimeout(() => {
        popup.classList.add('show');
    }, 50); // Small delay to ensure the transition works

    // Close the popup when clicking outside the content area
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            closePopup();
        }
    });
}

// Close popup function
function closePopup() {
    const popup = document.querySelector('.popup');
    popup.classList.remove('show');
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300); // Match the transition time
}

// Close button click event
document.querySelector('.close').addEventListener('click', closePopup);

document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.querySelector('.image-container');
  const containerWidth = imageContainer.scrollWidth / 2; // Adjusted to ensure it's based on the total content width
  const speed = 100; // Adjust this value to control speed (higher = slower)

  // Set animation duration based on the content width and desired speed
  const duration = containerWidth / speed; // Make sure the duration is based on the content width
  imageContainer.style.animationDuration = `${duration}s`;
});


