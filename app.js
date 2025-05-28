document.getElementById('addTaskBtn').addEventListener('click', () => {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (!taskText) {
        alert('Por favor escribe una tarea válida.');
        return;
    }

    const li = document.createElement('li');

    // Crear un contenedor para el texto y el botón
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.style.marginRight = '10px'; // espacio entre texto y botón

    // Botón eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.style.marginLeft = 'auto'; // mejora visual si usas flexbox
    deleteBtn.addEventListener('click', () => li.remove());

    // Acción al hacer clic en el texto
    taskSpan.addEventListener('click', () => li.classList.toggle('done'));

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    document.getElementById('taskList').appendChild(li);
    input.value = '';
});
