window.addEventListener("scroll", function() {
    const header = document.querySelector('header');
    if (window.scrollY > 400) {
        header.style.backgroundColor = 'var(--terceiraCor)'
    } else {
        header.style.backgroundColor = 'transparent'
    }
});