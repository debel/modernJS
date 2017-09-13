module.exports = function initializeNav(title, Reveal) {
  const lastSlide = Reveal.getTotalSlides() - 1;
  const lsKey = 'fs101.' + title;
  const startSlide = parseInt(localStorage.getItem(lsKey), 10) || 0;

  if (!document.location.hash.substring(2)){
    Reveal.addEventListener('ready', () => {
      Reveal.slide(startSlide);
    });
  }

  Reveal.addEventListener('slidechanged', (event) => {
    localStorage.setItem(lsKey, event.indexh);
  });


  if (document.referrer) {
    const back = document.getElementById('back-link');
    back.href = document.referrer;
    back.style.visibility = 'visibile';
  }
};
