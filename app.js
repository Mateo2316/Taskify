document.getElementById('addTaskBtn').addEventListener('click', () => {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') return;
    
    const li = document.createElement('li');
    li.textContent = taskText;
    li.addEventListener('click', () => li.classList.toggle('done'));
    li.addEventListener('dblclick', () => li.remove());

    document.getElementById('taskList').appendChild(li);
    input.value = '';
});