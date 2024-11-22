import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './pages/UserList';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Home from './pages/Home';
import './styles.css'

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Vasanth', email: 'vasanth@example.com' },
    { id: 2, name: 'John', email: 'john@example.com' },
  ]);

  const addUser = (newUser) => {
    const newId = users.length ? Math.max(users.map((user) => user.id)) + 1 : 1;
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: newId, ...newUser },
    ]);
  };

  const updateUser = (id, updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
      )
    );
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/user-list">User List</a></li>
            <li><a href="/add-user">Add User</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-list" element={<UserList users={users} />} />
          <Route path="/add-user" element={<AddUser addUser={addUser} />} />
          <Route path="/edit-user/:id" element={<EditUser users={users} updateUser={updateUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;