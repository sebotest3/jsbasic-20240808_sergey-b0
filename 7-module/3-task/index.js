export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.render();
    this.addEventListeners();
    this.update();
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');

    this.elem.innerHTML = `
      <div class="slider__thumb">
        <span class="slider__value">${this.value}</span>
      </div>
      <div class="slider__progress"></div>
      <div class="slider__steps">${Array.from({ length: this.steps }, () => '<span></span>').join('')}</div>
    `;

    this.thumb = this.elem.querySelector('.slider__thumb');
    this.progress = this.elem.querySelector('.slider__progress');
    this.stepsContainer = this.elem.querySelector('.slider__steps');
    this.stepsContainer.children[this.value].classList.add('slider__step-active');
  }

  addEventListeners() {
    this.elem.addEventListener('click', this.onSliderClick.bind(this));
  }

  onSliderClick(event) {
    let newRelativeClickPosition = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;
    let newValue = Math.round(newRelativeClickPosition * (this.steps - 1));
    this.setValue(newValue);
  }

  setValue(newValue) {
    this.value = newValue;
    this.update();

    // Генерация и отправка кастомного события
    let sliderChangeEvent = new CustomEvent('slider-change', { detail: this.value, bubbles: true });
    this.elem.dispatchEvent(sliderChangeEvent);
  }

  update() {
    let valuePercentage = (this.value / (this.steps - 1)) * 100;

    this.thumb.style.left = `${valuePercentage}%`;
    this.progress.style.width = `${valuePercentage}%`;

    this.elem.querySelector('.slider__value').textContent = this.value;

    Array.from(this.stepsContainer.children).forEach(span => span.classList.remove('slider__step-active'));
    this.stepsContainer.children[this.value].classList.add('slider__step-active');
  }
}
