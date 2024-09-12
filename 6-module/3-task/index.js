class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlide = 0; // текущий слайд карусели
    this.render();
    this.update();
  }

  render() {
    const slidesHtml = this.slides.map(slide => `
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="${slide.name}">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `).join('');

    const carouselHtml = `
      <div class="carousel">
        <div class="carouselarrow carouselarrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="prev">
        </div>
        <div class="carousel__inner">
          ${slidesHtml}
        </div>
        <div class="carouselarrow carouselarrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="next">
        </div>
      </div>
    `;

    this.elem = createElement(carouselHtml);
    this.addEventListeners();
  }

  addEventListeners() {
    const leftArrow = this.elem.querySelector('.carousel__arrow_left');
    const rightArrow = this.elem.querySelector('.carousel__arrow_right');

    leftArrow.addEventListener('click', () => {
      this.currentSlide--;
      this.update();
    });

    rightArrow.addEventListener('click', () => {
      this.currentSlide++;
      this.update();
    });
  }

  update() {
    const inner = this.elem.querySelector('.carousel__inner');
    const slideWidth = inner.offsetWidth;
    const leftArrow = this.elem.querySelector('.carousel__arrow_left');
    const rightArrow = this.elem.querySelector('.carousel__arrow_right');

    inner.style.transform = `translateX(-${slideWidth * this.currentSlide}px)`;

    leftArrow.style.display = this.currentSlide === 0 ? 'none' : '';
    rightArrow.style.display = this.currentSlide === this.slides.length - 1 ? 'none' : '';
  }
}
