document.addEventListener('DOMContentLoaded', function () {
  // Ambil nav-link About (nav utama)
  const aboutLink = document.querySelector('.navbar-blur-container .nav-link:nth-child(2)');
  const homeLink = document.querySelector('.navbar-blur-container .nav-link:nth-child(1)');
  const main = document.querySelector('main');

  // Ambil nav-overlay-link (mobile)
  const overlayLinks = document.querySelectorAll('#nav-overlay .nav-overlay-link');

  // Konten Home (default)
  const homeContent = `
    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 text-center portfolio-welcome px-4 sm:px-6">Welcome to My Portfolio!</h1>
    <p class="text-lg md:text-xl text-white max-w-xl text-center portfolio-desc px-4 sm:px-6">I am a passionate developer dedicated to building creative and innovative solutions. Discover my works, experiences, and stories on this page.</p>
  `;

  // Konten About dengan gambar me.jpg dan paragraph baru 
  const aboutContent = `
    <div class="about-content flex flex-col md:flex-row items-center justify-center gap-10 px-4 sm:px-6">
      <img src="images/me.jpg" alt="Foto Saya" class="w-40 h-56 object-cover rounded-lg about-photo mb-4 md:mb-0" style="aspect-ratio:3/4;" />
      <div class="flex flex-col items-center md:items-start">
        <h1 class="text-2xl md:text-3xl font-bold text-white mb-3 text-center md:text-left no-hover">About Me</h1>
        <p class="text-base md:text-lg text-white max-w-xl text-center md:text-left no-hover">Hello! My name is Valentino, and I am a student at Depok 2 Vocational High School in Yogjakarta, Indonesia. I am currently in class XII and specializing in technology. I also enjoy photography and creative design.</p>
      </div>
    </div>
  `;

  let isTransitioning = false;
  function fadeContent(newContent) {
    if (isTransitioning) return;
    isTransitioning = true;
    main.style.transition = 'opacity 0.4s';
    main.style.opacity = '0';
    setTimeout(function () {
      main.innerHTML = newContent;
      main.style.opacity = '0';
      setTimeout(function () {
        main.style.opacity = '1';
        setTimeout(function () {
          isTransitioning = false;
        }, 1000); // Delay 1 detik sebelum bisa pindah lagi
      }, 20);
    }, 400);
  }

  // Desktop nav
  if (aboutLink && main) {
    aboutLink.addEventListener('click', function (e) {
      e.preventDefault();
      fadeContent(aboutContent);
      document.dispatchEvent(new CustomEvent('aboutPageActive'));
    });
  }
  if (homeLink && main) {
    homeLink.addEventListener('click', function (e) {
      e.preventDefault();
      fadeContent(homeContent);
      document.dispatchEvent(new CustomEvent('homePageActive'));
    });
  }

  // Mobile nav overlay
  if (overlayLinks.length > 0 && main) {
    function closeOverlay() {
      const overlay = document.getElementById('nav-overlay');
      if (overlay) {
        overlay.style.transition = 'opacity 0.5s';
        overlay.style.opacity = '0';
        setTimeout(function () {
          overlay.classList.remove('show');
          overlay.classList.add('hidden');
          overlay.style.opacity = '';
        }, 500);
      }
    }
    overlayLinks[0].addEventListener('click', function (e) {
      e.preventDefault();
      fadeContent(homeContent);
      document.dispatchEvent(new CustomEvent('homePageActive'));
      closeOverlay();
    });
    overlayLinks[1].addEventListener('click', function (e) {
      e.preventDefault();
      fadeContent(aboutContent);
      document.dispatchEvent(new CustomEvent('aboutPageActive'));
      closeOverlay();
    });
    // Anda bisa menambahkan handler untuk Skills, Projects, Contact jika ingin konten dinamis juga
  }

  // Set opacity awal agar smooth saat reload
  main.style.opacity = '1';
});
