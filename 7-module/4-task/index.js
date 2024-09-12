export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.currentStep = value;
    this.render();
    this.addEventListeners();
    this.updateSlider(this.currentStep);
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');

    this.elem.innerHTML = `
      <div class="slider__thumb" style="left: ${this.valueToPercentage()}%">
        <span class="slider__value">${this.currentStep}</span>
      </div>
      <div class="slider__progress" style="width: ${this.valueToPercentage()}%"></div>
      <div class="slider__steps">${new Array(this.steps).fill('<span></span>').join('')}</div>
    `;

    this.thumb = this.elem.querySelector('.slider__thumb');
    this.valueElement = this.elem.querySelector('.slider__value');
    this.progress = this.elem.querySelector('.slider__progress');
    this.stepsElement = this.elem.querySelectorAll('.slider__steps span');

    this.thumb.ondragstart = () => false;
    this.updateSlider(this.currentStep);
  }

  addEventListeners() {
    this.elem.addEventListener('click', this.onClick.bind(this));
    this.setupDragAndDrop();
  }

  onClick(event) {
    const newRelative = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;
    const newValue = Math.round(newRelative * (this.steps - 1));
    this.updateSlider(newValue);

    const changeEvent = new CustomEvent('slider-change', {
      detail: newValue,
      bubbles: true
    });
    this.elem.dispatchEvent(changeEvent);
  }

  setupDragAndDrop() {
    this.thumb.onpointerdown = event => {
      event.preventDefault();
      this.elem.classList.add('slider_dragging');

      const onPointerMove = event => {
        let newLeft = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;
        if (newLeft < 0) { newLeft = 0; }
        if (newLeft > 1) { newLeft = 1; }

        let leftPercents = newLeft * 100;
        this.thumb.style.left = `${leftPercents}%`;
        this.progress.style.width = `${leftPercents}%`;

        let newValue = Math.round(newLeft * (this.steps - 1));
        this.valueElement.textContent = newValue;
      };

      const onPointerUp = event => {
        let newLeft = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;
        let newValue = Math.round(newLeft * (this.steps - 1));
        this.updateSlider(newValue);

        document.removeEventListener('pointermove', onPointerMove);
        document.removeEventListener('pointerup', onPointerUp);
        this.elem.classList.remove('slider_dragging');

        const sliderChangeEvent = new CustomEvent('slider-change', {
          detail: this.currentStep,
          bubbles: true
        });
        this.elem.dispatchEvent(sliderChangeEvent);
      };

      document.addEventListener('pointermove', onPointerMove);
      document.addEventListener('pointerup', onPointerUp);
    };
  }

  updateSlider(value) {
    this.currentStep = value;
    this.valueElement.textContent = this.currentStep;
    const leftPercents = this.valueToPercentage();
    this.thumb.style.left = `${leftPercents}%`;
    this.progress.style.width = `${leftPercents}%`;

    this.stepsElement.forEach((step, index) => {
      step.classList.toggle('slider__step-active', index === this.currentStep);
    });
  }

  valueToPercentage() {
    return (this.currentStep / (this.steps - 1)) * 100;
  }
}
