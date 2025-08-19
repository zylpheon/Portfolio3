window.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar-blur-container nav');
    if (!nav) return;
    const links = nav.querySelectorAll('.nav-link');
    const underline = nav.querySelector('.nav-underline');
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
    let currentLink = links[0];
    moveUnderlineTo(currentLink);
    links.forEach(link => {
        link.addEventListener('mouseenter', e => {
            currentLink = link;
            moveUnderlineTo(link);
        });
    });
    nav.addEventListener('mouseleave', () => {
        currentLink = links[0];
        moveUnderlineTo(links[0]);
    });
    window.addEventListener('resize', () => moveUnderlineTo(currentLink));
    const observer = new MutationObserver(() => moveUnderlineTo(currentLink));
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
});
