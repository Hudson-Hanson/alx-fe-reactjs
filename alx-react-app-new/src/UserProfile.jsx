import React from 'react';

function UserProfile({ name, age, bio }) {
  return (
    <div style={{ border: '1px solid black', padding: '15px', margin: '10px' }}>
      <h2 style={{ color: 'green' }}>{name}</h2>
      <p style={{ fontStyle: 'italic' }}>Age: {age}</p>
      <p style={{ fontSize: '14px' }}>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;