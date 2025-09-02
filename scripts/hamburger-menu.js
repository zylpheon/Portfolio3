document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger-toggle');
  const navOverlay = document.getElementById('nav-overlay');
  const navLinks = document.querySelectorAll('.nav-overlay-link');
  let canInteract = true;
  function isOpen() {
    return navOverlay.classList.contains('show');
  }
  function animateLinksIn() {
    navLinks.forEach((link, i) => {
      link.style.transitionDelay = `${0.08 * (i + 1)}s`;
    });
  }
  function animateLinksOut() {
    navLinks.forEach((link) => {
      link.style.transitionDelay = `0s`;
    });
  }
  function setInteractDelay() {
    canInteract = false;
    setTimeout(() => {
      canInteract = true;
    }, 2000);
  }
  function closeOverlay() {
    animateLinksOut();
    navOverlay.classList.remove('show');
    setTimeout(() => {
      navOverlay.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }, 400);
    setInteractDelay();
  }
  if (hamburger && navOverlay) {
    hamburger.addEventListener('click', () => {
      if (!canInteract) return;
      if (!isOpen()) {
        navOverlay.classList.remove('hidden');
        animateLinksIn();
        setTimeout(() => navOverlay.classList.add('show'), 10);
        document.body.classList.add('overflow-hidden');
        setInteractDelay();
      } else {
        closeOverlay();
      }
    });
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (!canInteract) return;
        closeOverlay();
      });
    });
  }
});