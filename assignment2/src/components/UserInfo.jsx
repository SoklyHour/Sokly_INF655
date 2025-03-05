// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function UserInfo({ handleClick }) {
  return (
    <div>
      <p>Name: John Doe</p>
      <p>Profession: Developer</p>
      <button onClick={handleClick}>Show Alert</button>
    </div>
  );
}

export default UserInfo;
