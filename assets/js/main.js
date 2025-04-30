
// Bootstrap tooltip initialization
const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltips.forEach(el => new bootstrap.Tooltip(el));

// Scroll reveal animation (optional if AOS is added later)

AOS.init({
    once: true,
    duration: 800,
    offset: 100
  });
  