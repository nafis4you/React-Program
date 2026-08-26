import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {

  // GET
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");

    setData(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(data);


  // POST form
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
  });

  const [responseData, setResponseData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: formData.name,
          username: formData.username,
          email: formData.email,
        }
      );


      console.log(response.data);

      setResponseData(response.data);

       getUsers();


    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>

      {/* GET */}

      <h2>Users List</h2>

      {data.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <hr />
        </div>
      ))}


      {/* POST */}

      <h2>Create User</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">
          Add User
        </button>

      </form>


      {/* POST Response */}

      {responseData && (
  <>
    <h2>POST API Response</h2>
    <p>ID: {responseData.id}</p>
    <p>Name: {responseData.name}</p>
    <p>Username: {responseData.username}</p>
    <p>Email: {responseData.email}</p>
  </>
)}

    </div>
  );
};

export default Users;