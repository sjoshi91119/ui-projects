import React, { useState } from "react";

const TaskBox = () => {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedTaskId, setEditedTaskId] = useState(null);

  function addTask() {
    if (name.trim() !== "") {
      // Create a new task object with a unique ID
      const newTask = {
        id: Date.now(),
        name: name,
      };
      // Add the new task to the tasks array
      setTasks((prevTasks) => [...prevTasks, newTask]);
      // Clear the input field
      setName("");
    }
  }

  function editTask(taskId) {
    // Set the edit mode and the ID of the task being edited
    setEditMode(true);
    setEditedTaskId(taskId);
    // Find the task to be edited by ID
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      // Set the input field value to the name of the task being edited
      setName(taskToEdit.name);
    }
  }

  function saveTask() {
    if (name.trim() !== "") {
      // Create a new tasks array with the updated task
      const updatedTasks = tasks.map((task) =>
        task.id === editedTaskId ? { ...task, name: name } : task
      );
      // Update the tasks array
      setTasks(updatedTasks);
      // Clear the input field and exit edit mode
      setName("");
      setEditMode(false);
      setEditedTaskId(null);
    }
  }

  function delTask(taskId) {
    // Filter out the task to be deleted by ID
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    // Update the tasks array
    setTasks(updatedTasks);
  }

  return (
    <>
      <div className="container">
        <h1>Task Manager</h1>
        <br />
        <input
          type="text"
          value={name}
          placeholder="task name"
          onChange={(e) => setName(e.target.value)}
        />
        {editMode ? (
          <button onClick={saveTask}>Save</button>
        ) : (
          <button onClick={addTask}>Add</button>
        )}
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" name="check" />
            {editMode && task.id === editedTaskId ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            ) : (
              task.name
            )}
            {editMode && task.id === editedTaskId ? (
              <button id="save" onClick={saveTask}>
                Save
              </button>
            ) : (
              <button id="edit" onClick={() => editTask(task.id)}>
                Edit
              </button>
            )}
            <button id="delete" onClick={() => delTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskBox;
