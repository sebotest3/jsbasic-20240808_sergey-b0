import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js'; // Импортируем класс ProductCard

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};

    this.render();
    this.update(this.products);
  }

  render() {
    this.elem = createElement(`
      <div class="products-grid">
        <div class="products-grid__inner"></div>
      </div>
    `);
  }

  updateFilter(filters) {
    Object.assign(this.filters, filters);
    this.update(this.filteredProducts());
  }

  filteredProducts() {
    return this.products.filter(product => {
      const { noNuts, vegeterianOnly, maxSpiciness, category } = this.filters;

      if (noNuts && product.nuts) {
        return false;
      }

      if (vegeterianOnly && !product.vegeterian) {
        return false;
      }

      if (maxSpiciness !== undefined && product.spiciness > maxSpiciness) {
        return false;
      }

      if (category && product.category !== category) {
        return false;
      }

      return true;
    });
  }

  update(products) {
    this.elem.querySelector('.products-grid__inner').innerHTML = '';

    for (let product of products) {
      let productCard = new ProductCard(product);
      this.elem.querySelector('.products-grid__inner').append(productCard.elem);
    }
  }

  get elem() {
    return this._elem;
  }

  set elem(value) {
    this._elem = value;
  }
}
