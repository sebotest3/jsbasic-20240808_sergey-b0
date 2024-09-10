function initCarousel() {
  const carousel = document.querySelector('.carousel__inner');
  const prevArrow = document.querySelector('.carousel__arrow_left');
  const nextArrow = document.querySelector('.carousel__arrow_right');
  const slideWidth = carousel.offsetWidth;
  const slidesCount = carousel.children.length;
  let currentSlideIndex = 0;

  // Скрытие стрелки назад при инициализации
  prevArrow.style.display = 'none';

  prevArrow.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      updateCarousel();
    }
  });

  nextArrow.addEventListener('click', () => {
    if (currentSlideIndex < slidesCount - 1) {
      currentSlideIndex++;
      updateCarousel();
    }
  });
  

  function updateCarousel() {
    // Возможная проблема могла заключаться в неправильной интерполяции или кавычках
    carousel.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`; // правильное использование шаблонной строки

    // Управление видимостью стрелок
    prevArrow.style.display = currentSlideIndex === 0 ? 'none' : '';
    nextArrow.style.display = currentSlideIndex === slidesCount - 1 ? 'none' : '';
  }
}
