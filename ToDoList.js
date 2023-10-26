import React, { useState } from 'react';

const ToDoList = ({ todos }) => {
  const [todoList, setToDoList] = useState(todos);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleCheckboxChange = (index, checked) => {
    const updatedToDoList = [...todoList];
    updatedToDoList[index].completed = checked;
    setToDoList(updatedToDoList);
  };

  const handleAddTask = () => {
    if (newTaskTitle.trim() === '') {
      return; // Prevent adding empty tasks
    }

    const newTask = {
      title: newTaskTitle,
      completed: false,
    };

    setToDoList([...todoList, newTask]);
    setNewTaskTitle('');
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => handleCheckboxChange(index, e.target.checked)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default ToDoList;
