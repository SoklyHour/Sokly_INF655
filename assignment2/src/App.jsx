// eslint-disable-next-line no-unused-vars
import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import UserInfo from './components/UserInfo';
import TaskForm from './components/TaskForm';

function App() {
  const tasks = ['Learn HTML', 'Learn CSS', 'Learn JS', 'Learn React', 'Learn PHP'];

  const handleAlert = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Greeting username="Alice" />
      <Greeting username="Bob" />
      <Counter />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <UserInfo handleClick={handleAlert} />
      <TaskForm />
    </div>
  );
}

export default App;
