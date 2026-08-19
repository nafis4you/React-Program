import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
//   const [userId, setUserId] = useState(1);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    setUsers(data);
    console.log(data);
  };

// useEffect(() => {
//   getUsers();
// });

// useEffect(() => {
//   getUsers();
// }, [userId]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>Users List</h2>
        {/* <button onClick={getUsers}>Get Users</button> */}
      <ul>
        {users.map((user) => (
          <li>
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;