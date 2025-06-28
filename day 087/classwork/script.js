const slides = document.querySelector('.slides');
  const slide = document.querySelectorAll('.slide');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  let index = 0;

  function showSlide(newIndex) {
    if (newIndex < 0) {
      index = slide.length - 1;
    } else if (newIndex >= slide.length) {
      index = 0;
    } else {
      index = newIndex;
    }

    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  prevButton.addEventListener('click', () => showSlide(index - 1));
  nextButton.addEventListener('click', () => showSlide(index + 1));

  setInterval(() => {
    showSlide(index + 1);
  }, 3000);