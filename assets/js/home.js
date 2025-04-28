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
  const additionalCards = document.querySelectorAll('.additional-card');
  const moreButton = document.getElementById('more-button');

  // Function to toggle additional cards
  function toggleAdditionalCards() {
    additionalCards.forEach(card => {
      card.classList.toggle('show');
    });

    // Update button text
    if (moreButton.textContent === 'Show More') {
      moreButton.textContent = 'Show Less';
    } else {
      moreButton.textContent = 'Show More';
    }
  }

  // Add event listener to the "More" button
  moreButton.addEventListener('click', toggleAdditionalCards);

  // Trigger animations when the section is in view
  const expertiseSection = document.querySelector('.expertise-section');
  const expertiseCards = document.querySelectorAll('.expertise-card');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          expertiseCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate');
            }, index * 200); // Stagger delay (200ms per card)
          });
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
  );

  observer.observe(expertiseSection);
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


