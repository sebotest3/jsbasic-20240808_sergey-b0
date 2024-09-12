import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.addEventListeners();
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('ribbon');

    let arrowLeft = document.createElement('button');
    arrowLeft.className = 'ribbon__arrow ribbon__arrow_left';
    arrowLeft.innerHTML = '<img src="/assets/images/icons/angle-icon.svg" alt="icon">';

    let arrowRight = document.createElement('button');
    arrowRight.className = 'ribbon__arrow ribbon__arrow_right ribbon__arrow_visible';
    arrowRight.innerHTML = '<img src="/assets/images/icons/angle-icon.svg" alt="icon">';

    let ribbonInner = document.createElement('nav');
    ribbonInner.className = 'ribbon__inner';

    this.categories.forEach(category => {
      let link = document.createElement('a');
      link.className = 'ribbon__item';
      link.dataset.id = category.id;
      link.textContent = category.name;
      link.href = "#";
      ribbonInner.appendChild(link);
    });

    this.elem.appendChild(arrowLeft);
    this.elem.appendChild(ribbonInner);
    this.elem.appendChild(arrowRight);
  }

  addEventListeners() {
    let ribbonInner = this.elem.querySelector('.ribbon__inner');

    // Добавляем обработчик на каждую ссылку
    ribbonInner.querySelectorAll('.ribbon__item').forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();

        const customEvent = new CustomEvent('ribbon-select', {
          detail: link.dataset.id,
          bubbles: true
        });
        this.elem.dispatchEvent(customEvent);
      });
    });

    let arrowLeft = this.elem.querySelector('.ribbon__arrow_left');
    let arrowRight = this.elem.querySelector('.ribbon__arrow_right');

    arrowRight.addEventListener('click', () => {
      ribbonInner.scrollBy(350, 0);
    });

    arrowLeft.addEventListener('click', () => {
      ribbonInner.scrollBy(-350, 0);
    });

    ribbonInner.addEventListener('scroll', () => {
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;

      if (scrollLeft === 0) {
        arrowLeft.classList.remove('ribbon__arrow_visible');
      } else {
        arrowLeft.classList.add('ribbon__arrow_visible');
      }

      if (scrollWidth - scrollLeft - clientWidth < 1) {
        arrowRight.classList.remove('ribbon__arrow_visible');
      } else {
        arrowRight.classList.add('ribbon__arrow_visible');
      }
    });
  }
}
