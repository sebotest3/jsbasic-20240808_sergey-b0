import createElement from '../../assets/lib/create-element.js';

class ProductCard {
  constructor(product) {
    this.product = product;
    this.render();
  }

  render() {
    const html = `
      <div class="card">
        <div class="card__top">
          <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
          <span class="card__price">€${this.product.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${this.product.name}</div>
          <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `;

    this.elem = createElement(html);
    this.elem.querySelector('.card__button').addEventListener('click', this.onAddButtonClick.bind(this));
  }

  onAddButtonClick(event) {
    const addEvent = new CustomEvent('product-add', {
      bubbles: true,
      detail: this.product.id
    });
    this.elem.dispatchEvent(addEvent);
  }
}

export default ProductCard;
