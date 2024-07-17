let todoList = [
  {
    item: 'Breakfast',
    dueDate: '16/07/2024'
  },
  {
    item: 'Going to College',
    dueDate: '16/07/2024'
  }];
displayItem();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  dateElement.value = '';
  inputElement.value = '';

  displayItem();
}

function displayItem() {
  let containerElement = document.querySelector('.todo-container');
  let newHtl = '';
  // displayElement.innerText = '';
  for (let i = 0; i < todoList.length; i++) {
    let {item,dueDate} = todoList[i];
    newHtl += `
    
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="btn-delete " onclick="todoList.splice(${i},1); displayItem();">Delete</button>
    
    `;

  }
  containerElement.innerHTML = newHtl;
}
