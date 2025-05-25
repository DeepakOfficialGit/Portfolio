document.addEventListener('DOMContentLoaded', function () {
  var inputTask = document.getElementById('taskInput');    
  var btnAdd = document.getElementById('addTaskBtn');       
  var listTasks = document.getElementById('taskList');      

  // Add task handler
  function addTask() {
    var task = inputTask.value;
    if (task === '') return;

    var taskItem = createTask(task);
    listTasks.appendChild(taskItem);

    inputTask.value = '';
    inputTask.focus();
  }

  // Edit handler
  function handleEdit(taskText, inputEdit, btnEdit, btnSave) {
    taskText.style.display = 'none';
    inputEdit.style.display = 'inline-block';
    btnEdit.style.display = 'none';
    btnSave.style.display = 'inline-block';
    inputEdit.focus();
  }

  // Save handler
  function handleSave(taskText, inputEdit, btnEdit, btnSave) {
    var updatedText = inputEdit.value;
    if (updatedText !== '') {
      taskText.innerText = updatedText;
      inputEdit.value = updatedText;
    }
    taskText.style.display = 'inline-block';
    inputEdit.style.display = 'none';
    btnSave.style.display = 'none';
    btnEdit.style.display = 'inline-block';
  }

  // Delete handler
  function handleDelete(listItem) {
    listItem.parentNode.removeChild(listItem);
  }

  // Create task element
  function createTask(text) {                              
    var listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';

    var taskText = document.createElement('div');      
    taskText.innerText = text;
    taskText.className = 'flex-grow-1 me-3';

    var inputEdit = document.createElement('input');        
    inputEdit.type = 'text';
    inputEdit.className = 'form-control form-control-sm me-3';
    inputEdit.style.display = 'none';
    inputEdit.value = text;

    var btnEdit = document.createElement('button');         
    btnEdit.className = 'btn btn-sm btn-warning me-2';
    btnEdit.innerHTML = '<i class="bi bi-pencil"></i>';

    var btnSave = document.createElement('button');        
    btnSave.className = 'btn btn-sm btn-success me-2';
    btnSave.style.display = 'none';
    btnSave.innerHTML = '<i class="bi bi-check-circle"></i>';

    var btnDelete = document.createElement('button');     
    btnDelete.className = 'btn btn-sm btn-danger';
    btnDelete.innerHTML = '<i class="bi bi-trash"></i>';

    btnEdit.addEventListener('click', function () {
      handleEdit(taskText, inputEdit, btnEdit, btnSave);
    });
    btnSave.addEventListener('click', function () {
      handleSave(taskText, inputEdit, btnEdit, btnSave);
    });
    btnDelete.addEventListener('click', function () {
      handleDelete(listItem);
    });

    var leftDiv = document.createElement('div');
    leftDiv.className = 'd-flex align-items-center flex-grow-1';
    leftDiv.appendChild(taskText);
    leftDiv.appendChild(inputEdit);

    listItem.appendChild(leftDiv);
    listItem.appendChild(btnEdit);
    listItem.appendChild(btnSave);
    listItem.appendChild(btnDelete);

    return listItem;
  }

  btnAdd.addEventListener('click', addTask);
  inputTask.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });
});
