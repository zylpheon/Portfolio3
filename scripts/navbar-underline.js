window.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar-blur-container nav');
    if (!nav) return;
    const links = nav.querySelectorAll('.nav-link');
    const underline = nav.querySelector('.nav-underline');
    let activeIndex = 0;

    function moveUnderlineTo(el) {
        let left = el.offsetLeft;
        const style = window.getComputedStyle(el);
        underline.style.margin = '0';
        underline.style.left = left + 'px';
        underline.style.width = el.offsetWidth + 'px';
        let color = style.color;
        if (document.body.classList.contains('theme-dark')) {
            color = '#fff';
        } else if (document.body.classList.contains('theme-light')) {
            color = '#111';
        }
        underline.style.background = color;
    }

    moveUnderlineTo(links[activeIndex]);

    links.forEach((link, idx) => {
        link.addEventListener('mouseenter', e => {
            moveUnderlineTo(link);
        });
        link.addEventListener('mouseleave', e => {
            moveUnderlineTo(links[activeIndex]);
        });
    });

    nav.addEventListener('mouseleave', () => {
        moveUnderlineTo(links[activeIndex]);
    });

    window.addEventListener('resize', () => moveUnderlineTo(links[activeIndex]));

    const observer = new MutationObserver(() => moveUnderlineTo(links[activeIndex]));
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // Page navigation events
    document.addEventListener('homePageActive', function () {
        activeIndex = 0;
        moveUnderlineTo(links[activeIndex]);
    });

    document.addEventListener('aboutPageActive', function () {
        activeIndex = 1;
        moveUnderlineTo(links[activeIndex]);
    });

    document.addEventListener('skillsPageActive', function () {
        activeIndex = 2;
        moveUnderlineTo(links[activeIndex]);
    });

    document.addEventListener('certificatesPageActive', function () {
        activeIndex = 3;
        moveUnderlineTo(links[activeIndex]);
    });

    document.addEventListener('projectsPageActive', function () {
        activeIndex = 4;
        moveUnderlineTo(links[activeIndex]);
    });

    document.addEventListener('contactPageActive', function () {
        activeIndex = 5;
        moveUnderlineTo(links[activeIndex]);
    });

    document.addEventListener('blogPageActive', function () {
        activeIndex = 6;
        moveUnderlineTo(links[activeIndex]);
    });
});