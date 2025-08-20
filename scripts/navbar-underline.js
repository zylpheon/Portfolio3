window.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar-blur-container nav');
    if (!nav) return;
    const links = nav.querySelectorAll('.nav-link');
    const underline = nav.querySelector('.nav-underline');
    let activeIndex = 0; // 0: Home, 1: About, dst

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

    // Event untuk About dan Home agar underline menetap
    document.addEventListener('aboutPageActive', function () {
        activeIndex = 1; // About
        moveUnderlineTo(links[activeIndex]);
    });
    document.addEventListener('homePageActive', function () {
        activeIndex = 0; // Home
        moveUnderlineTo(links[activeIndex]);
    });
});
