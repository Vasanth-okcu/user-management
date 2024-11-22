import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users }) => {
  return (
    <div className="container">
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} 
            <Link to={`/edit-user/${user.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
