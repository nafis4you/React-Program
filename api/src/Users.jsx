import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  
    const getUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");

    const data = response.data;

    setUsers(data);
    console.log(data);
  };

  
  //   const [userId, setUserId] = useState(1);

  // const getUsers = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");

  //   const data = await response.json();

  //   setUsers(data);
  //   console.log(data);
  // };

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
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <ul>
              <li>
                {user.name}
              </li>
              <li>
                {user.email}
              </li>
              <li>
                Address:
                <span>{user.address.street}, {user.address.suite}, {user.address.city} - {user.address.zipcode}</span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;