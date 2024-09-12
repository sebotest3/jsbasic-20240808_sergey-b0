class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement('table');
    this.createTable();
  }

  createTable() {
    const thead = document.createElement('thead');
    thead.innerHTML = `
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>`;

    const tbody = document.createElement('tbody');

    this.rows.forEach((row) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${row.name}</td>
        <td>${row.age}</td>
        <td>${row.salary}</td>
        <td>${row.city}</td>
        <td><button class="delete-btn">X</button></td>
      `;
      tbody.appendChild(tr);

      tr.querySelector('.delete-btn').addEventListener('click', () => {
        tr.remove();
      });
    });

    this.elem.appendChild(thead);
    this.elem.appendChild(tbody);
  }
}
