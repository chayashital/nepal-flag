const flagTriangles = document.querySelector('.poly');
const sun = document.querySelector('.sun')

flagTriangles.addEventListener('mouseenter', () => {
    TweenMax.to(flagTriangles, 1,{scaleX: 1.5} );
})