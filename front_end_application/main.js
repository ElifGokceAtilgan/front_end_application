document.querySelector('.left-arrow').addEventListener('click', function() {
    document.querySelector('.slider').scrollBy({
        left: -100, 
        behavior: 'smooth' 
    });
});

document.querySelector('.right-arrow').addEventListener('click', function() {
    document.querySelector('.slider').scrollBy({
        left: 100, 
        behavior: 'smooth'
    });
});
