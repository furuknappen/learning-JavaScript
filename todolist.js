 'use strict';

const taskForm = document.getElementById('new-task-form');
const taskInput = document.getElementById('new-task-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // 1. Create a new list item element
    const taskItem = document.createElement('li');

    // 2. Add the CSS class for styling
    taskItem.classList.add('task-item');

    // 3. Set its text content to the user's input
    // We'll add a span to hold the text to make the next lesson easier
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;

    // 4. Append the text span to the list item
    taskItem.appendChild(taskTextSpan);

    // 5. Append the new list item to the task list
    taskList.appendChild(taskItem);

    // 6. Clear the input field for the next task
    taskInput.value = '';
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
});



// Function to handle task completion and deletion
taskList.addEventListener('click', function (event) {
    const clickedElement = event.target;

    // Check if a delete button was clicked
    if (clickedElement.classList.contains('delete-btn')) {
        const taskToRemove = clickedElement.closest('.task-item');
        taskToRemove.remove();
    }
    // Check if a task item was clicked (to toggle completion)
    else if (clickedElement.closest('.task-item')) {
        const taskToToggle = clickedElement.closest('.task-item');
        taskToToggle.classList.toggle('completed');
    }
});