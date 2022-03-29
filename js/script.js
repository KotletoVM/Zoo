const topImage = document.querySelector('.footer-image-up')
function scrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"})
}

topImage.addEventListener('mousedown', scrollToTop)