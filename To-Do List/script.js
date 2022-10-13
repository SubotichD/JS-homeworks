(function() {
// создаем и возвращаем заголовок приложения
  function createAppTitle(title){
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  //  создаем и возвращаем форму для создания дела
  function createTodoItemForm(){
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('dev');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('input-group-append');
    button.textContent = 'Добавить дело';

    return {
      form,
      input,
      button,
    };
    
    
  }

  //  создаем и возвращаем список елементов
  function createTodoList(){
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  document.addEventListener('DOMContentLoaded', function(){
    let container = documment.getElementById('todo-app');
  
    let todoAppTitle = createApptitle('Список дел');
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();
  
    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);
  });


  function createTodoItem(name) {
    let item = document.createElement('li');
    // кнопки помещаем в элемент, который красиов покажет их в одной группе
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');
  
    // устанавливаем стили для элемента списка, а также для размещения кнопок
    // в его правой части с полощью flex
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between' , 'align-items-center');
    item.textContent = name;
  
    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';
    
    // вкладыввем кнопки в отдельный элемент,чтобы они объединились в один блок
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);
  
    // приложению нужен доступ к самому элементу и кнопкам,чтобы обрабатывать события нажатия
    return {
      item,
      doneButton,
      deleteButton,
    };
  
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    let container = document.getElementById('todo-app');
  
  
    let todoAppTitle = createAppTitle('Мои дела');
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();
    let todoItems = [createTodoItem('Сходить за хлебом'),createTodoItem('Купить молоко')];
  
  
    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);
    container.append(todoItems[0].item);
    container.append(todoItems[1].item);
  
  });

})();




