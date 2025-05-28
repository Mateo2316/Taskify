document.getElementById('addTaskBtn').addEventListener('click', () => {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (!taskText) {
    alert('Por favor escribe una tarea válida.');
    return;
}
    
    const li = document.createElement('li');
    li.textContent = taskText;
    li.addEventListener('click', () => li.classList.toggle('done'));
    li.addEventListener('dblclick', () => li.remove());

    document.getElementById('taskList').appendChild(li);
    input.value = '';
});