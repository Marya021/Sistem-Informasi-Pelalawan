import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };
  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    getUsers();
  };
  const verifyingUser = async (userId) => {
    await axios.patch(`http://localhost:5000/users/verify/${userId}`);
    getUsers();
  };
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Users</h1>
      <h2 className="subtitle">List of Users</h2>
      <Link to="/users/add" className='btn hover:bg-green-700 bg-green-600 p-2 font-semibold text-white rounded-[5px] '>Add New</Link>
      
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
  {users.map((user, index) => (
    <tr key={user.uuid}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.verify}</td>
      <td>{user.role}</td>
      <td>
      <button
          onClick={() => verifyingUser(user.uuid)}
          className="btn text-white bg-green-500 hover:bg-green-700"
        >
          Verify
        </button>
        <Link
          to={`/users/edit/${user.uuid}`}
          className="btn text-white bg-blue-500 hover:bg-blue-700"
        >
          Edit
        </Link>
        <button
          onClick={() => deleteUser(user.uuid)}
          className="btn text-white bg-red-500 hover:bg-red-700"
        >
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
};

export default UserList;
