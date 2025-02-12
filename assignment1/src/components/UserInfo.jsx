// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

class UserInfo extends Component {
  // Define the state to store user details
  state = {
    name: 'Sokly Hour', // User's name
    profession: 'Web Developer', // User's profession
  };

  render() {
    // Generate a random number for the lucky number
    const luckyNumber = Math.floor(Math.random() * 100) + 1;

    return (
      <div>
        <h2>Name: {this.state.name}</h2>
        <p>Profession: {this.state.profession}</p>
        <p>Your lucky number is {luckyNumber}</p>
      </div>
    );
  }
}

export default UserInfo;