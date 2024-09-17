export default class Cart {
  cartItems = [];

  constructor(cartIcon) {
    this.cartIcon = cartIcon;

    // Проверка наличия элемента у cartIcon
    if (this.cartIcon && this.cartIcon.elem) {
      this.addEventListeners();
    }
  }

  addProduct(product) {
    // Проверяем, что продукт существует и валиден
    if (!product) {
      return;
    }

    // Поиск товара в корзине
    let cartItem = this.cartItems.find(item => item.product.id === product.id);

    // Если товар найден, увеличиваем его количество
    if (cartItem) {
      cartItem.count++;
    } else {
      // Если товар не найден, добавляем его с количеством 1
      cartItem = { product, count: 1 };
      this.cartItems.push(cartItem);
    }

    // Вызываем обновление иконки корзины
    this.onProductUpdate(cartItem);
  }

  updateProductCount(productId, amount) {
    // Поиск товара в корзине по идентификатору
    let cartItem = this.cartItems.find(item => item.product.id === productId);

    if (cartItem) {
      cartItem.count += amount;

      // Если количество товара становится 0, удаляем его из корзины
      if (cartItem.count === 0) {
        this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
      }

      // Вызываем обновление иконки корзины
      this.onProductUpdate(cartItem);
    }
  }

  isEmpty() {
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    return this.cartItems.reduce((total, item) => total + item.count, 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + (item.product.price * item.count), 0);
  }

  onProductUpdate(cartItem) {
    // Проверяем наличие cartIcon и элемента перед обновлением
    if (this.cartIcon && this.cartIcon.update) {
      this.cartIcon.update(this);
    }
  }

  addEventListeners() {
    // Проверяем наличие элемента cartIcon перед добавлением обработчика
    if (this.cartIcon && this.cartIcon.elem) {
      this.cartIcon.elem.onclick = () => this.renderModal();
    }
  }

  renderModal() {
    // Тело метода renderModal, который будет реализован позже
  }
}
