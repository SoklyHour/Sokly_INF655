// eslint-disable-next-line no-unused-vars
import React from 'react';

const Greeting = () => {
  const currentDate = new Date().toLocaleDateString(); // Dynamically get the current date
  const styles = {
    color: 'white', // Inline style for the paragraph
    fontSize: '18px',
  };

  return (
    <div>
      <h1>Hello, Welcome to React!</h1> 
      <p style={styles}>Today date is {currentDate}</p> 
    </div>
  );
};

export default Greeting;
