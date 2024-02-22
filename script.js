function betFunc(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
      const userTableBody = document.getElementById('userTableBody');
      data.forEach(user => {
          const row = document.createElement('tr');
          const nameCell = document.createElement('td');
          const emailCell = document.createElement('td');

          nameCell.textContent = user.name;
          emailCell.textContent = user.email;

          row.appendChild(nameCell);
          row.appendChild(emailCell);

          userTableBody.appendChild(row);
      });
  })
  .catch(error => console.error(error));
}

betFunc();
