import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
  }

  // Отрисовать пустую иконку корзины
  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  // Заполнить её данными из объекта cart
  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML =
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>;

      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, { once: true });

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  // Добавление обработчиков событий
  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }

  // Позиционировать иконку корзины на экране
  updatePosition() {
    // Проверка, если элемент не имеет ширину, то метод завершает свою работу
    if (!this.elem.offsetWidth) return;

    const initialTopCoord = this.elem.getBoundingClientRect().top + window.scrollY;

    if (window.scrollY > initialTopCoord) {
      let leftIndent = Math.min(
        document.querySelector('.container').getBoundingClientRect().right + 20,
        document.documentElement.clientWidth - this.elem.offsetWidth - 10
      );

      this.elem.style.position = 'fixed';
      this.elem.style.top = '50px';
      this.elem.style.zIndex = '1000';
      this.elem.style.left = "${leftIndent}px";
    } else {
      this.elem.style.position = '';
      this.elem.style.top = '';
      this.elem.style.zIndex = '';
      this.elem.style.left = '';
    }
  }
}
