document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-blur-container .nav-link');
  const main = document.querySelector('main');
  const overlayLinks = document.querySelectorAll('#nav-overlay .nav-overlay-link');
  const homeContent = `
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 text-center px-4 sm:px-6">Welcome to My Portfolio!</h1>
        <p class="text-lg md:text-xl text-white max-w-xl text-center px-4 sm:px-6">I am a passionate developer dedicated to building creative and innovative solutions. Discover my works, experiences, and stories on this page.</p>
      `;
  const aboutContent = `
        <div class="about-content flex flex-col md:flex-row items-center justify-center gap-10 px-4 sm:px-6">
          <img src="images/me.jpg" alt="My Photo" class="w-40 h-56 object-cover rounded-lg about-photo mb-4 md:mb-0" style="aspect-ratio:3/4;" />
          <div class="flex flex-col items-center md:items-start">
            <h1 class="text-2xl md:text-3xl font-bold text-white mb-3 text-center md:text-left no-hover">About Me</h1>
            <p class="text-base md:text-lg text-white max-w-xl text-center md:text-left no-hover">Hello! My name is Valentino, and I am a student at Depok 2 Vocational High School in Yogyakarta, Indonesia. I am currently in class XII and specializing in technology. I also enjoy photography and creative design.</p>
          </div>
        </div>
      `;
  const skillsContent = `
        <div class="skills-content flex flex-col items-center justify-center gap-10 px-4 sm:px-6">
          <div class="flex flex-col items-center md:items-start w-full">
            <h1 class="text-2xl md:text-3xl font-bold text-white mb-3 text-center md:text-left no-hover">Skills</h1>
            <p class="text-base md:text-lg text-white max-w-xl text-center md:text-left no-hover mb-4">Here are some of my main skills that I have and am currently developing:</p>
            <ul class="skills-list grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <li class="skill-item bg-white bg-opacity-10 rounded-lg p-4 text-white text-center shadow-md">Frontend Development</li>
              <li class="skill-item bg-white bg-opacity-10 rounded-lg p-4 text-white text-center shadow-md">Backend Development</li>
              <li class="skill-item bg-white bg-opacity-10 rounded-lg p-4 text-white text-center shadow-md">IoT Development</li>
              <li class="skill-item bg-white bg-opacity-10 rounded-lg p-4 text-white text-center shadow-md">Linux Management</li>
              <li class="skill-item bg-white bg-opacity-10 rounded-lg p-4 text-white text-center shadow-md">Network Administration</li>
              <li class="skill-item bg-white bg-opacity-10 rounded-lg p-4 text-white text-center shadow-md">Project Management</li>
            </ul>
          </div>
        </div>
      `;
  const certificatesContent = `
        <div class="certificates-content flex flex-col items-center justify-center gap-10 px-4 sm:px-6 max-w-6xl mx-auto">
          <div class="flex flex-col items-center w-full">
            <h1 class="text-2xl md:text-3xl font-bold text-white mb-3 text-center no-hover">Certificates</h1>
            <p class="text-base md:text-lg text-white max-w-xl text-center no-hover mb-8">Professional certifications and achievements that showcase my expertise and commitment to continuous learning.</p>
            <div class="certificates-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            </div>
          </div>
        </div>
      `;
  const projectsContent = `
        <div class="projects-content flex flex-col items-center justify-center gap-10 px-4 sm:px-6 max-w-6xl mx-auto">
          <div class="flex flex-col items-center w-full">
            <h1 class="text-2xl md:text-3xl font-bold text-white mb-3 text-center no-hover">Projects</h1>
            <p class="text-base md:text-lg text-white max-w-xl text-center no-hover mb-8">A showcase of my recent projects demonstrating various skills and technologies I've worked with.</p>
            <div class="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <div class="project-item bg-white bg-opacity-10 rounded-lg p-6 text-white shadow-md">
                <div class="mb-4">
                  <div class="w-full h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">Portfolio</div>
                </div>
                <h3 class="font-semibold text-lg mb-2">Personal Portfolio Website</h3>
                <p class="text-sm opacity-90 mb-4">A responsive portfolio website built with HTML, CSS, and JavaScript featuring dark/light theme toggle and smooth animations.</p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-blue-500 text-xs rounded">HTML</span>
                  <span class="px-2 py-1 bg-green-500 text-xs rounded">CSS</span>
                  <span class="px-2 py-1 bg-yellow-500 text-xs rounded">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
  const contactContent = `
        <div class="contact-content flex flex-col items-center justify-center gap-10 px-4 sm:px-6 max-w-4xl mx-auto">
          <div class="flex flex-col items-center w-full">
            <h1 class="text-2xl md:text-3xl font-bold text-white mb-3 text-center no-hover">Contact Me</h1>
            <p class="text-base md:text-lg text-white max-w-xl text-center no-hover mb-8">Let's connect! Feel free to reach out for collaborations, projects, or just to say hello.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-8">
              <div class="contact-info">
                <h3 class="text-xl font-semibold text-white mb-4">Get in Touch</h3>
                <div class="space-y-4">
                  <div class="flex items-center text-white">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <span>lrv94451@gmail.com</span>
                  </div>
                  <div class="flex items-center text-white">
                    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <span>+62 819 1873 4049</span>
                  </div>
                  <div class="flex items-center text-white">
                    <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <span>Yogyakarta, Indonesia</span>
                  </div>
                </div>
              </div>
              
              <div class="contact-form">
                <h3 class="text-xl font-semibold text-white mb-4">Send a Message</h3>
                <form class="space-y-4" onsubmit="handleFormSubmit(event)">
                  <div>
                    <input type="text" name="name" placeholder="Your Name" required 
                           class="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500">
                  </div>
                  <div>
                    <input type="email" name="email" placeholder="Your Email" required 
                           class="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500">
                  </div>
                  <div>
                    <textarea name="message" rows="5" placeholder="Your Message" required 
                              class="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
                  </div>
                  <button type="submit" class="btn-primary w-full">Send Message</button>
                </form>
              </div>
            </div>
            
            <div class="social-links flex space-x-6">
              <a href="https://instagram.com" target="_blank" class="text-white hover:text-pink-400 transition-colors">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" class="text-white hover:text-blue-400 transition-colors">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://discord.com" target="_blank" class="text-white hover:text-indigo-400 transition-colors">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      `;
  const blogContent = `
        <div class="blog-content flex flex-col items-center justify-center gap-10 px-4 sm:px-6 max-w-6xl mx-auto">
          <div class="flex flex-col items-center w-full">
            <h1 class="text-2xl md:text-3xl font-bold text-white mb-3 text-center no-hover">Blog</h1>
            <p class="text-base md:text-lg text-white max-w-xl text-center no-hover mb-8">Thoughts, tutorials, and insights about technology, development, and my learning journey.</p>
            <div class="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            </div>
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
        }, 1000);
      }, 20);
    }, 400);
  }
  if (navLinks.length >= 7) {
    navLinks[0].addEventListener('click', function (e) {
      e.preventDefault();
      fadeContent(homeContent);
      document.dispatchEvent(new CustomEvent('homePageActive'));
    });
    navLinks[1].addEventListener('click', function (e) {
      e.preventDefault();
      fadeContent(aboutContent);
      document.dispatchEvent(new CustomEvent('aboutPageActive'));
    });
    navLinks[2].addEventListener('click', function (e) {
      e.preventDefault();
      fadeContent(skillsContent);
      document.dispatchEvent(new CustomEvent('skillsPageActive'));
    });
    navLinks[3].addEventListener('click', function (e) {
      e.preventDefault();
      fadeContent(certificatesContent);
      document.dispatchEvent(new CustomEvent('certificatesPageActive'));
    });
    navLinks[4].addEventListener('click', function (e) {
      e.preventDefault();
      fadeContent(projectsContent);
      document.dispatchEvent(new CustomEvent('projectsPageActive'));
    });
    navLinks[5].addEventListener('click', function (e) {
      e.preventDefault();
      fadeContent(contactContent);
      document.dispatchEvent(new CustomEvent('contactPageActive'));
    });
    navLinks[6].addEventListener('click', function (e) {
      e.preventDefault();
      fadeContent(blogContent);
      document.dispatchEvent(new CustomEvent('blogPageActive'));
    });
  }
  if (overlayLinks.length >= 7) {
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
    overlayLinks[2].addEventListener('click', function (e) {
      e.preventDefault();
      fadeContent(skillsContent);
      document.dispatchEvent(new CustomEvent('skillsPageActive'));
      closeOverlay();
    });
    overlayLinks[3].addEventListener('click', function (e) {
      e.preventDefault();
      fadeContent(certificatesContent);
      document.dispatchEvent(new CustomEvent('certificatesPageActive'));
      closeOverlay();
    });
    overlayLinks[4].addEventListener('click', function (e) {
      e.preventDefault();
      fadeContent(projectsContent);
      document.dispatchEvent(new CustomEvent('projectsPageActive'));
      closeOverlay();
    });
    overlayLinks[5].addEventListener('click', function (e) {
      e.preventDefault();
      fadeContent(contactContent);
      document.dispatchEvent(new CustomEvent('contactPageActive'));
      closeOverlay();
    });
    overlayLinks[6].addEventListener('click', function (e) {
      e.preventDefault();
      fadeContent(blogContent);
      document.dispatchEvent(new CustomEvent('blogPageActive'));
      closeOverlay();
    });
  }
  main.style.opacity = '1';
});