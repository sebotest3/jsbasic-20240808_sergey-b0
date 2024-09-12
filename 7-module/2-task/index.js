import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.createModal();
    this.addEventListeners();
  }

  createModal() {
    // Создание корневого элемента модального окна
    this.modal = document.createElement('div');
    this.modal.classList.add('modal');

    // Верстка заголовка и кнопки закрытия
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modal__overlay');

    const modalInner = document.createElement('div');
    modalInner.classList.add('modal__inner');

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal__header');

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.classList.add('modal__close');
    closeButton.innerHTML = '<img src="img/close-icon.svg" alt="close-icon">';

    this.modalTitle = document.createElement('h3');
    this.modalTitle.classList.add('modal__title');

    // Создание и сохранение ссылки на элемент modalBody
    this.modalBody = document.createElement('div');
    this.modalBody.classList.add('modal__body');

    modalHeader.appendChild(this.modalTitle);
    modalHeader.appendChild(closeButton);
    modalInner.appendChild(modalHeader);
    modalInner.appendChild(this.modalBody);
    this.modal.appendChild(modalOverlay);
    this.modal.appendChild(modalInner);
  }

  open() {
    document.body.classList.add('is-modal-open');
    document.body.appendChild(this.modal);
  }

  close() {
    document.body.classList.remove('is-modal-open');
    this.modal.remove();
    this.removeEventListeners();
  }

  setTitle(title) {
    this.modalTitle.textContent = title;
  }

  setBody(contentNode) {
    this.modalBody.innerHTML = '';
    this.modalBody.appendChild(contentNode);
  }

  addEventListeners() {
    this.modal.querySelector('.modal__close').addEventListener('click', () => this.close());
    this.keyDownHandler = (event) => {
      if (event.code === 'Escape') {
        this.close();
      }
    };
    document.addEventListener('keydown', this.keyDownHandler);
  }

  removeEventListeners() {
    document.removeEventListener('keydown', this.keyDownHandler);
  }
}
