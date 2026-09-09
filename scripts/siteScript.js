document.addEventListener('DOMContentLoaded', () => {
  // Mobile Hamburger Toggle
 const hamburgerBtn = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-item');

  // Toggle menu when clicking the hamburger button
  hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents document click listener from firing immediately
    navLinks.classList.toggle('active');
  });

  // 1. Close menu when any navigation link is clicked
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // 2. Close menu when clicking outside of the menu or hamburger button
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = navLinks.contains(e.target);
    const isClickOnHamburger = hamburgerBtn.contains(e.target);

    if (!isClickInsideMenu && !isClickOnHamburger && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });

  // Slide-out Contact Overlay Toggle
  const sideToggleBtn = document.getElementById('side-toggle-btn');
  const contactOverlay = document.getElementById('contact-overlay');
  const closeOverlayBtn = document.getElementById('close-overlay-btn');
  const triggerOverlayLinks = document.querySelectorAll('.trigger-overlay');

  const openOverlay = () => contactOverlay.classList.add('active');
  const closeOverlay = () => contactOverlay.classList.remove('active');

  sideToggleBtn.addEventListener('click', openOverlay);
  closeOverlayBtn.addEventListener('click', closeOverlay);

  triggerOverlayLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openOverlay();
    });
  });

  // Gallery Carousel Logic
  const track = document.getElementById('carousel-track');
  const slides = Array.from(track.children);
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  let currentIndex = 0;

  const updateCarousel = (index) => {
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(currentIndex);
  });

  // Anti-Spambot Obfuscated Call & Quote Actions
  // Obfuscated email & phone details (encoded in base64 / assembled via code)
  const user = 'jonahsemail';
  const domain = 'hotmail.com';
  const phoneParts = ['+1', '519', '820', '7162'];

  const callButtons = document.querySelectorAll('.call-action-btn');
  const quoteButtons = document.querySelectorAll('.quote-action-btn');

  callButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const phoneNumber = `${phoneParts[0]}${phoneParts[1]}${phoneParts[2]}${phoneParts[3]}`;
      window.location.href = `tel:${phoneNumber}`;
    });
  });

  quoteButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const emailAddress = `${user}@${domain}`;
      const subject = encodeURIComponent('Quote Request');
      window.location.href = `mailto:${emailAddress}?subject=${subject}`;
    });
  });
});