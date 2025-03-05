// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function TaskForm() {
  const [taskName, setTaskName] = useState('');

  const handleChange = (e) => setTaskName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskName);
    setTaskName(''); // Clear the input field after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={handleChange}
        placeholder="Enter Task Name"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
