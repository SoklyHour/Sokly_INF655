// eslint-disable-next-line no-unused-vars
import React from 'react';

const TaskComponent = () => {
  const tasks = ['Complete Assigment 1', 'Read Chapter 1', 'Learn React', 'Learn Vite'];

  const getRandomTask = () => tasks[Math.floor(Math.random() * tasks.length)];

  return (
    <div>
      <h3>Random Task: {getRandomTask()}</h3>
    </div>
  );
};

export default TaskComponent;
