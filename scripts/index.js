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
          <img src="images/me.webp" alt="My Photo" class="w-40 h-56 object-cover rounded-lg about-photo mb-4 md:mb-0" style="aspect-ratio:3/4;" />
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
        <li><button class="skill-item bg-white bg-opacity-10 rounded-lg p-4 text-white text-center shadow-md w-full transition-all duration-300 hover:bg-opacity-20" data-skill="frontend">Frontend Development</button></li>
        <li><button class="skill-item bg-white bg-opacity-10 rounded-lg p-4 text-white text-center shadow-md w-full transition-all duration-300 hover:bg-opacity-20" data-skill="backend">Backend Development</button></li>
        <li><button class="skill-item bg-white bg-opacity-10 rounded-lg p-4 text-white text-center shadow-md w-full transition-all duration-300 hover:bg-opacity-20" data-skill="iot">IoT Development</button></li>
        <li><button class="skill-item bg-white bg-opacity-10 rounded-lg p-4 text-white text-center shadow-md w-full transition-all duration-300 hover:bg-opacity-20" data-skill="linux">Linux Management</button></li>
        <li><button class="skill-item bg-white bg-opacity-10 rounded-lg p-4 text-white text-center shadow-md w-full transition-all duration-300 hover:bg-opacity-20" data-skill="network">Network Administration</button></li>
        <li><button class="skill-item bg-white bg-opacity-10 rounded-lg p-4 text-white text-center shadow-md w-full transition-all duration-300 hover:bg-opacity-20" data-skill="project">Project Management</button></li>
      </ul>
    </div>
  </div>
  
  <!-- Skill Modal -->
  <div id="skillModal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50 p-4">
    <div class="bg-white rounded-lg p-6 max-w-md w-full relative theme-modal">
      <button id="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl">&times;</button>
      <h3 id="modalTitle" class="text-xl font-bold mb-4 text-gray-800"></h3>
      <p id="modalDescription" class="text-gray-600 mb-4"></p>
      <div id="modalIcons" class="flex flex-wrap gap-3 justify-center"></div>
    </div>
  </div>
`;
  const certificatesContent = `
  <div class="certificates-content flex flex-col items-center justify-center gap-6 px-4 sm:px-6 max-w-6xl mx-auto h-full">
    <div class="flex flex-col items-center w-full flex-shrink-0">
      <h1 class="text-2xl md:text-3xl font-bold text-white mb-3 text-center no-hover">Certificates</h1>
      <p class="text-base md:text-lg text-white max-w-xl text-center no-hover mb-4">Professional certifications and achievements that showcase my expertise and commitment to continuous learning.</p>
    </div>
    <div class="certificates-grid-container w-full flex-1 overflow-y-auto">
      <div class="certificates-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pb-24">
        <div class="certificate-item bg-white bg-opacity-10 rounded-lg p-4 text-white shadow-md">
          <div class="mb-4">
            <img src="images/certificates/sertif10.webp" alt="Certificate 1" class="w-full h-48 object-cover rounded-lg" style="aspect-ratio: 5/7;">
          </div>
          <h3 class="font-semibold text-lg mb-2 text-center">Beginner Machine Learning</h3>
          <p class="text-sm opacity-90 text-center">I learned the fundamentals of machine learning, including classification, regression, clustering, feature engineering, and model optimization.</p>
        </div>
        <div class="certificate-item bg-white bg-opacity-10 rounded-lg p-4 text-white shadow-md">
          <div class="mb-4">
            <img src="images/certificates/sertif9.webp" alt="Certificate 2" class="w-full h-48 object-cover rounded-lg" style="aspect-ratio: 5/7;">
          </div>
          <h3 class="font-semibold text-lg mb-2 text-center">Intermediate Web Development</h3>
          <p class="text-sm opacity-90 text-center">I learned to build responsive and accessible web applications with animations, media features, digital maps, background JavaScript, progressive web apps, and deployment strategies.</p>
        </div>
        <div class="certificate-item bg-white bg-opacity-10 rounded-lg p-4 text-white shadow-md">
          <div class="mb-4">
            <img src="images/certificates/sertif8.webp" alt="Certificate 3" class="w-full h-48 object-cover rounded-lg" style="aspect-ratio: 5/7;">
          </div>
          <h3 class="font-semibold text-lg mb-2 text-center">Financial Literacy 101</h3>
          <p class="text-sm opacity-90 text-center">I learned the fundamentals of financial literacy, including daily money management, long-term financial planning, and basic investing, through the Coding Camp powered by DBS Foundation 2025.</p>
        </div>
        <div class="certificate-item bg-white bg-opacity-10 rounded-lg p-4 text-white shadow-md">
          <div class="mb-4">
            <img src="images/certificates/sertif7.webp" alt="Certificate 4" class="w-full h-48 object-cover rounded-lg" style="aspect-ratio: 5/7;">
          </div>
          <h3 class="font-semibold text-lg mb-2 text-center">Python Basics</h3>
          <p class="text-sm opacity-90 text-center">I learned the basics of Python programming, including data handling, control flow, arrays, functions, OOP, unit testing, and popular libraries, using IDEs like VS Code, Jupyter Notebook, and Google Colab.</p>
        </div>
        <div class="certificate-item bg-white bg-opacity-10 rounded-lg p-4 text-white shadow-md">
          <div class="mb-4">
            <img src="images/certificates/sertif6.webp" alt="Certificate 5" class="w-full h-48 object-cover rounded-lg" style="aspect-ratio: 5/7;">
          </div>
          <h3 class="font-semibold text-lg mb-2 text-center">Data Visualization Basics</h3>
          <p class="text-sm opacity-90 text-center">I learned to create effective data visualizations using Google Sheets by applying industry best practices through a beginner-friendly course in data processing.</p>
        </div>
        <div class="certificate-item bg-white bg-opacity-10 rounded-lg p-4 text-white shadow-md">
          <div class="mb-4">
            <img src="images/certificates/sertif5.webp" alt="Certificate 6" class="w-full h-48 object-cover rounded-lg" style="aspect-ratio: 5/7;">
          </div>
          <h3 class="font-semibold text-lg mb-2 text-center">Fundamental Web Development</h3>
          <p class="text-sm opacity-90 text-center">I learned to build front-end web applications using advanced HTML forms, CSS grid, web components, module bundlers, and asynchronous JavaScript requests.</p>
        </div>
        <div class="certificate-item bg-white bg-opacity-10 rounded-lg p-4 text-white shadow-md">
          <div class="mb-4">
            <img src="images/certificates/sertif4.webp" alt="Certificate 7" class="w-full h-48 object-cover rounded-lg" style="aspect-ratio: 5/7;">
          </div>
          <h3 class="font-semibold text-lg mb-2 text-center">JavaScript Basics</h3>
          <p class="text-sm opacity-90 text-center">I learned the basics of JavaScript for web development with Node.js, including syntax, functions, data structures, OOP, functional programming, and asynchronous processes, through an AWS-validated course.</p>
        </div>
        <div class="certificate-item bg-white bg-opacity-10 rounded-lg p-4 text-white shadow-md">
          <div class="mb-4">
            <img src="images/certificates/sertif3.webp" alt="Certificate 8" class="w-full h-48 object-cover rounded-lg" style="aspect-ratio: 5/7;">
          </div>
          <h3 class="font-semibold text-lg mb-2 text-center">Beginner Web Development</h3>
          <p class="text-sm opacity-90 text-center">I learned to build interactive front-end web applications with DOM manipulation, event handling, and web storage through an industry-standard course for Front-End Web Developers.</p>
        </div>
        <div class="certificate-item bg-white bg-opacity-10 rounded-lg p-4 text-white shadow-md">
          <div class="mb-4">
            <img src="images/certificates/sertif2.webp" alt="Certificate 9" class="w-full h-48 object-cover rounded-lg" style="aspect-ratio: 5/7;">
          </div>
          <h3 class="font-semibold text-lg mb-2 text-center">AI Basics</h3>
          <p class="text-sm opacity-90 text-center">I learned the basics of Artificial Intelligence, including data, Machine Learning, and Deep Learning, through a beginner-friendly course designed to build a career in AI.</p>
        </div>
        <div class="certificate-item bg-white bg-opacity-10 rounded-lg p-4 text-white shadow-md">
          <div class="mb-4">
            <img src="images/certificates/sertif1.webp" alt="Certificate 10" class="w-full h-48 object-cover rounded-lg" style="aspect-ratio: 5/7;">
          </div>
          <h3 class="font-semibold text-lg mb-2 text-center">Web Development Basics</h3>
          <p class="text-sm opacity-90 text-center">I learned the basics of HTML and CSS as the three foundations of website development through a structured and comprehensive course verified by Dicoding experts.</p>
        </div>
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
      <div class="social-links-contact flex space-x-6">
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
      fadeContent(blogContent);
      document.dispatchEvent(new CustomEvent('blogPageActive'));
    });
    navLinks[6].addEventListener('click', function (e) {
      e.preventDefault();
      fadeContent(contactContent);
      document.dispatchEvent(new CustomEvent('contactPageActive'));
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
      fadeContent(blogContent);
      document.dispatchEvent(new CustomEvent('blogPageActive'));
      closeOverlay();
    });
    overlayLinks[6].addEventListener('click', function (e) {
      e.preventDefault();
      fadeContent(contactContent);
      document.dispatchEvent(new CustomEvent('contactPageActive'));
      closeOverlay();
    });
  }
  main.style.opacity = '1';
});
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('skill-item')) {
    const skill = e.target.getAttribute('data-skill');
    showSkillModal(skill);
  }
});
function showSkillModal(skill) {
  const modal = document.getElementById('skillModal');
  const title = document.getElementById('modalTitle');
  const description = document.getElementById('modalDescription');
  const icons = document.getElementById('modalIcons');
  const skillData = {
    frontend: {
      title: 'Frontend Development',
      description: 'Frontend Development is centered on crafting interactive, visually appealing user interfaces that provide a seamless user experience. By leveraging modern frameworks, responsive design techniques, and advanced styling tools, I create dynamic and accessible web applications that effectively bridge user needs with engaging digital interactions.',
      icons: [
        { name: 'HTML5', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3.345 21.601L1.419 0h21.162l-1.926 21.598L11.987 24l-8.642-2.399zm7.074-9.544h4.641l.315-3.526H7.786l.952-10.689h5.524l-.315 3.526H9.419z"/></svg>' },
        { name: 'CSS3', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>' },
        { name: 'Bootstrap', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.172 1.572z"/><path d="M21.17 0H2.83A2.83 2.83 0 000 2.83v18.34A2.83 2.83 0 002.83 24h18.34A2.83 2.83 0 0024 21.17V2.83A2.83 2.83 0 0021.17 0zm-9.955 16.708H7.897V7.292h3.99c2.31 0 3.755 1.273 3.755 3.205 0 1.497-.809 2.454-2.008 2.85v.056c1.555.274 2.56 1.432 2.56 3.017 0 2.257-1.611 3.288-4.179 3.288z"/><path d="M11.77 14.458h2.389c1.33 0 2.097-.67 2.097-1.77 0-1.134-.832-1.772-2.298-1.772H9.956v3.542h1.814z"/></svg>' },
        { name: 'Tailwind', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>' },
        { name: 'JavaScript', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>' },
        { name: 'jQuery', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M1.534 5.874c-2.123 3.05-1.86 6.017-1.86 6.017s.021-.154.062-.463c.04-.309.099-.772.21-1.33.112-.558.27-1.201.483-1.907.213-.707.482-1.474.82-2.275.338-.8.748-1.632 1.247-2.457.499-.825 1.095-1.639 1.805-2.405.71-.766 1.542-1.477 2.509-2.095.967-.618 2.076-1.133 3.342-1.498 1.266-.365 2.696-.571 4.332-.571 1.636 0 3.065.206 4.332.571 1.267.365 2.375.88 3.342 1.498.967.618 1.799 1.329 2.509 2.095.71.766 1.306 1.58 1.805 2.405.499.825.909 1.657 1.247 2.457.338.801.607 1.568.82 2.275.213.706.371 1.349.483 1.907.111.558.17 1.021.21 1.33.041.309.062.463.062.463s.263-2.967-1.86-6.017c-1.36-1.956-3.592-3.159-6.414-3.159-2.822 0-5.054 1.203-6.414 3.159z"/></svg>' }
      ]
    },
    backend: {
      title: 'Backend Development',
      description: 'Backend Development involves architecting robust server-side solutions that power dynamic web applications. I specialize in building scalable and secure systems, integrating reliable databases, and developing comprehensive APIs to ensure efficient data management and seamless communication between clients and servers.',
      icons: [
        { name: 'Node.js', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242L11.13.602c-.081-.047-.189-.047-.27 0L2.066 6.68c-.084.05-.139.145-.139.242v10.15c0 .097.055.19.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.255-.253h1.114c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L.909 18.747c-.57-.329-.922-.943-.922-1.604V6.921c0-.661.353-1.275.922-1.603l8.795-5.076c.557-.315 1.296-.315 1.848 0l8.794 5.076c.57.329.924.943.924 1.603v10.237c0 .661-.353 1.275-.924 1.604l-8.794 5.076c-.28.165-.599.248-.922.248z"/></svg>' },
        { name: 'PHP', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .982-.122 1.292-.384.32-.27.513-.66.513-1.334 0-.426-.158-.751-.421-.934-.263-.183-.6-.277-1.763-.996zm.455-2.546c-.626 0-1.045.248-1.248.659-.203.41-.203.821-.203 1.334 0 .447.126.832.373 1.154.246.322.606.483 1.078.483.674 0 1.177-.27 1.506-.809.328-.539.328-1.154.328-1.847 0-.692-.105-1.332-.328-1.847-.223-.515-.605-.771-1.506-.771z"/><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm-5.989-6.646c.372-.31.619-.77.742-1.38l.484-2.488c.135-.694.027-1.186-.324-1.475-.351-.289-.87-.433-1.555-.433H3.5L2.604 15.5h1.167l.467-2.396h1.341c.378 0 .666.06.863.179zm7.989 0c.372-.31.619-.77.742-1.38l.484-2.488c.135-.694.027-1.186-.324-1.475-.351-.289-.87-.433-1.555-.433H11.5L10.604 15.5h1.167l.467-2.396h1.341c.378 0 .666.06.863.179z"/></svg>' },
        { name: 'Python', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.21-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25c-.2 0-.37.09-.5.27-.13.18-.2.39-.2.63 0 .24.07.45.2.63.13.18.3.27.5.27.2 0 .37-.09.5-.27.13-.18.2-.39.2-.63 0-.24-.07-.45-.2-.63-.13-.18-.3-.27-.5-.27z"/></svg>' },
        { name: 'MySQL', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.271.054.104.104.218.154.312l.014-.014c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.14zm-5.77 1.508c-.837.01-1.493.016-2.452.155.302.636.611 1.364.837 2.094.015.047.014.09.037.142v-.013c.012-.013.014-.027.014-.04.094-.186.2-.352.308-.534.18-.322.394-.645.645-.923.127-.147.293-.322.483-.448v.016c-.012.016-.021.03-.021.047-.176.130-.333.293-.475.451-.14.174-.26.363-.38.554-.063.095-.133.186-.18.292-.020.058-.02.133-.063.18v-.014c-.104-.003-.211-.04-.333-.046-.108-.035-.216-.035-.32-.088-.208-.146-.324-.349-.4-.57-.131-.339-.302-.638-.302-.895 0-.058-.014-.106-.027-.161L7.565 6.85v-.009c-.263.15-.445.391-.6.651-.156.271-.263.572-.35.875-.025.086-.037.16-.037.25.014.123.037.24.037.375.012.296.025.592.04.888.013.21.027.412.027.632v.04c.094.188.188.367.274.555.206.378.756.567.756.927v.018c-.302.022-.6.098-.837.196-.128.055-.299.055-.406.128-.11.076-.177.183-.177.292.014.065.014.13.04.187v.015c.094.204.274.376.456.52.275.21.756.33 1.34.402.198.026.396.017.595.017.209 0 .419.013.631.013.394 0 .787-.025 1.179-.064.301-.030.612-.056.906-.056.13 0 .26.014.382.027.302.040.6.104.863.203.138.051.275.111.394.175.258.147.394.338.52.549v.054c-.12.12-.274.219-.394.338-.297.295-.666.48-1.047.735-.13.088-.26.176-.402.25-.475.252-1.108.420-1.748.420-.16.052-.33.052-.49.089-.647.014-1.293-.087-1.893-.33-.21-.077-.417-.164-.618-.26-.49-.24-.95-.635-1.315-1.108-.192-.244-.317-.518-.403-.812-.095-.332-.095-.704-.095-1.052v-.014c-.015-.255-.015-.51-.015-.765 0-.263.014-.526.027-.79.012-.262.027-.525.053-.787.025-.375.088-.718.088-1.108 0-.133-.012-.265-.025-.398-.026-.262-.026-.524-.052-.787-.013-.245-.027-.49-.027-.735v-.043c.094-.188.19-.367.288-.555.22-.411.756-.616.756-.927v-.018c-.302-.022-.6-.098-.837-.196-.128-.055-.299-.055-.406-.128-.11-.076-.177-.183-.177-.292.014-.065.014-.13.04-.187v-.015c.094-.204.274-.376.456-.52.275-.21.756-.33 1.34-.402z"/></svg>' },
        { name: 'MongoDB', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-3.032.284-6.017.605-9.088.46-.344.904-.68 1.334-1.004.781-.585 1.279-.99 1.503-1.254.327-.384.519-.754.359-1.099z"/></svg>' },
        { name: 'Express', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.864 1.673-6.673.461-8.933-2.85a6.226 6.226 0 01-.749-3.768zm0.998-2.188h10.93c-.207-1.259-1.005-2.328-2.23-2.7-1.956-.595-4.023.754-4.62 2.7z"/></svg>' }
      ]
    },
    iot: {
      title: 'IoT Development',
      description: 'IoT Development focuses on integrating smart devices into cohesive networks that drive automation and connectivity. I design and implement IoT solutions that harness sensor data, leverage real-time processing, and facilitate secure communication protocols, enabling efficient monitoring, control, and analytics across various environments.',
      icons: [
        { name: 'Arduino', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.82 12c0 6.627-5.373 12-12 12S-.18 18.627-.18 12 5.193 0 11.82 0s12 5.373 12 12zM10.858 7.68c0-.19-.082-.365-.214-.49-.132-.124-.308-.194-.49-.194s-.358.07-.49.193c-.132.125-.214.301-.214.49v8.64c0 .19.082.365.214.49.132.124.308.194.49.194s.358-.07.49-.193c.132-.125.214-.301.214-.49v-8.64zm6 0c0-.19-.082-.365-.214-.49-.132-.124-.308-.194-.49-.194s-.358.07-.49.193c-.132.125-.214.301-.214.49v8.64c0 .19.082.365.214.49.132.124.308.194.49.194s.358-.07.49-.193c.132-.125.214-.301.214-.49v-8.64z"/></svg>' },
        { name: 'ESP32', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>' },
        { name: 'Raspberry Pi', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.998 0C5.372 0 0 5.372 0 12s5.372 12 11.998 12C18.626 24 24 18.628 24 12S18.626 0 11.998 0zm6.436 11.154c-1.118 0-1.681-.613-2.127-1.078-.447-.465-.796-.827-1.534-.827s-1.087.362-1.534.827c-.446.465-1.009 1.078-2.127 1.078s-1.681-.613-2.127-1.078c-.447-.465-.796-.827-1.534-.827s-1.087.362-1.534.827c-.446.465-1.009 1.078-2.127 1.078v-.846c.537 0 .796-.24 1.141-.584.345-.345.775-.775 1.52-.775s1.175.43 1.52.775c.345.344.604.584 1.141.584s.796-.24 1.141-.584c.345-.345.775-.775 1.52-.775s1.175.43 1.52.775c.345.344.604.584 1.141.584s.796-.24 1.141-.584c.345-.345.775-.775 1.52-.775s1.175.43 1.52.775c.345.344.604.584 1.141.584v.846z"/></svg>' },
        { name: 'MQTT', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>' },
        { name: 'Sensors', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>' },
        { name: 'C++', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.11-3.19-7.11-7.11S8.08 4.89 12 4.89s7.11 3.19 7.11 7.11-3.19 7.11-7.11 7.11zm2.75-6.36h-.825v.825c0 .207-.168.375-.375.375s-.375-.168-.375-.375v-.825h-.825c-.207 0-.375-.168-.375-.375s.168-.375.375-.375h.825v-.825c0-.207.168-.375.375-.375s.375.168.375.375v.825h.825c.207 0 .375.168.375.375s-.168.375-.375.375zm3.5 0h-.825v.825c0 .207-.168.375-.375.375s-.375-.168-.375-.375v-.825h-.825c-.207 0-.375-.168-.375-.375s.168-.375.375-.375h.825v-.825c0-.207.168-.375.375-.375s.375.168.375.375v.825h.825c.207 0 .375.168.375.375s-.168.375-.375.375z"/></svg>' }
      ]
    },
    linux: {
      title: 'Linux Management',
      description: 'Linux Management entails overseeing server infrastructures to ensure reliability, performance, and security. My expertise in Linux administration involves configuring systems, managing updates and patches, and optimizing environments for high availability, which collectively contribute to the stability and efficiency of enterprise-level operations.',
      icons: [
        { name: 'Ubuntu', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 14.794a1.914 1.914 0 11-3.828 0 1.914 1.914 0 013.828 0zM7.482 20.93a1.914 1.914 0 11-3.828 0 1.914 1.914 0 013.828 0zm0-17.86a1.914 1.914 0 11-3.828 0 1.914 1.914 0 013.828 0z"/></svg>' },
        { name: 'CentOS', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.405 0 9.818 4.413 9.818 9.818S17.405 21.818 12 21.818 2.182 17.405 2.182 12 6.595 2.182 12 2.182z"/></svg>' },
        { name: 'Bash', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21.038 4.9l-7.577-4.498c-.8-.48-2.118-.48-2.918 0L2.963 4.9C2.162 5.38 1.5 6.6 1.5 7.5v9c0 .9.662 2.12 1.463 2.6l7.58 4.498c.8.48 2.118.48 2.918 0l7.577-4.498c.8-.48 1.463-1.7 1.463-2.6v-9c-.001-.9-.663-2.12-1.463-2.6z"/></svg>' },
        { name: 'SSH', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M0 12v2c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H2c-1.1 0-2 .9-2 2zm20-7H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM2 17h20c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2z"/></svg>' },
        { name: 'Apache', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.557 4.583c-1.092-1.075-2.832-1.069-3.896.027-1.064 1.096-1.056 2.855.016 3.927 1.073 1.072 2.813 1.079 3.877-.017 1.064-1.096 1.056-2.855-.016-3.927l.019-.01zm-4.557 15.417c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12z"/></svg>' },
        { name: 'Nginx', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.34 17.32V6.68l6.679 10.64h-2.377l-4.302-6.84v10.64h-2.338V6.68h2.338z"/></svg>' }
      ]
    },
    network: {
      title: 'Network Administration',
      description: 'Network Administration is dedicated to maintaining and optimizing the connectivity that underpins modern IT infrastructures. I manage network configurations, monitor performance, and implement robust security protocols to guarantee uninterrupted data flow and secure communication across organizational networks.',
      icons: [
        { name: 'Cisco', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 14.794a1.914 1.914 0 11-3.828 0 1.914 1.914 0 013.828 0zM7.482 20.93a1.914 1.914 0 11-3.828 0 1.914 1.914 0 013.828 0zm0-17.86a1.914 1.914 0 11-3.828 0 1.914 1.914 0 013.828 0z"/></svg>' },
        { name: 'Router', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>' },
        { name: 'Switch', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 7h2v2H5zm4 0h2v2H9zm4 0h2v2h-2zm4 0h2v2h-2zM5 11h2v2H5zm4 0h2v2H9zm4 0h2v2h-2zm4 0h2v2h-2zM5 15h2v2H5zm4 0h2v2H9zm4 0h2v2h-2zm4 0h2v2h-2z"/></svg>' },
        { name: 'Firewall', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>' },
        { name: 'VPN', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>' },
        { name: 'TCP/IP', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M1 5v14c0 1.1.89 2 2 2h18c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2H3c-1.11 0-2 .9-2 2zm2 0h18v14H3V5zm2 2v10h2V9h4v8h2V9h4v8h2V7H5z"/></svg>' }
      ]
    },
    project: {
      title: 'Project Management',
      description: 'Project Management is the strategic discipline of planning, executing, and delivering projects on time and within budget. With a focus on aligning technical initiatives with business goals, I lead cross-functional teams, streamline communication, and manage resources effectively, ensuring that projects are executed with precision and quality.',
      icons: [
        { name: 'Scrum', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>' },
        { name: 'Agile', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>' },
        { name: 'Git', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.337.203.482.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>' },
        { name: 'Jira', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.53 2c0 2.4 1.97 4.35 4.35 4.35h1.78c.25 0 .45.2.45.45V8.9c0 2.4-1.95 4.35-4.35 4.35S9.41 11.3 9.41 8.9V2h2.12zm.9 10.55c2.4 0 4.35 1.95 4.35 4.35v6.1h-2.12c0-2.4-1.97-4.35-4.37-4.35H8.51c-.25 0-.45-.2-.45-.45v-1.3c0-2.4 1.95-4.35 4.37-4.35z"/></svg>' },
        { name: 'Trello', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM10.5 17h-3c-.83 0-1.5-.67-1.5-1.5v-7C6 7.67 6.67 7 7.5 7h3c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5zm7-4h-3c-.83 0-1.5-.67-1.5-1.5v-3C13 7.67 13.67 7 14.5 7h3c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5z"/></svg>' },
        { name: 'Slack', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 012.521-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.523 2.521h-2.521V8.834zM17.688 8.834a2.528 2.528 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.165 0a2.528 2.528 0 012.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 012.523 2.521A2.528 2.528 0 0115.165 24a2.527 2.527 0 01-2.52-2.523v-2.521h2.52zM15.165 17.688a2.527 2.527 0 01-2.52-2.523 2.526 2.526 0 012.52-2.52h6.313A2.527 2.527 0 0124 15.165a2.528 2.528 0 01-2.522 2.523h-6.313z"/></svg>' }
      ]
    }
  };
  const data = skillData[skill];
  title.textContent = data.title;
  description.textContent = data.description;
  const isDarkTheme = document.body.classList.contains('theme-dark');
  const iconColor = isDarkTheme ? 'text-white' : 'text-black';
  icons.innerHTML = data.icons.map(icon =>
    `<span class="px-3 py-2 bg-blue-500 ${iconColor} text-sm rounded-full flex items-center gap-2">
      <span class="${iconColor}">${icon.svg}</span>
      ${icon.name}
    </span>`
  ).join('');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}
document.addEventListener('DOMContentLoaded', function () {
  const closeModalBtn = document.getElementById('closeModal');
  const skillModal = document.getElementById('skillModal');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function () {
      skillModal.classList.add('hidden');
      skillModal.classList.remove('flex');
    });
  }
  if (skillModal) {
    skillModal.addEventListener('click', function (e) {
      if (e.target === skillModal) {
        skillModal.classList.add('hidden');
        skillModal.classList.remove('flex');
      }
    });
  }
});