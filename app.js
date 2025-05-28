document.getElementById('addTaskBtn').addEventListener('click', () => {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') return;
    
    const li = document.createElement('li');
    li.textContent = taskText;
    li.addEventListener('click', () => li.classList.toggle('done'));
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.addEventListener('click', () => li.remove());
    li.appendChild(deleteBtn);
    
    document.getElementById('taskList').appendChild(li);
    input.value = '';
});