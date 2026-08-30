import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {

  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: ""
  });

  const [editId, setEditId] = useState(null);


  // =========================
  // READ
  // =========================
  const getUsers = async () => {

    const response = await axios.get(
      "https://dummyjson.com/users"
    );

    setUsers(response.data.users);
  };


  useEffect(() => {
    getUsers();
  }, []);


  // =========================
  // INPUT CHANGE
  // =========================
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  // =========================
  // CREATE / UPDATE
  // =========================
  const handleSubmit = async (e) => {

    e.preventDefault();


    // =========================
    // CREATE
    // =========================
    if (editId === null) {

      const response = await axios.post(
        "https://dummyjson.com/users/add",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          age: Number(formData.age)
        }
      );

      console.log("Added User:", response.data);


      // DummyJSON fake ID deta hai,
      // isliye React me apni unique ID bana rahe hain

      const newUser = {
        ...response.data,
        id: Date.now()
      };


      setUsers((prevUsers) => [
        ...prevUsers,
        newUser
      ]);

    }


    // =========================
    // UPDATE
    // =========================
    else {

      // Check karo user API ka hai
      // ya form se add hua hai

      const selectedUser = users.find(
        (user) => user.id === editId
      );


      // Agar API ka original user hai
      if (editId <= 30) {

        try {

          const response = await axios.put(
            `https://dummyjson.com/users/${editId}`,
            {
              firstName: formData.firstName,
              lastName: formData.lastName,
              age: Number(formData.age)
            }
          );

          console.log("Updated API User:", response.data);

        } catch (error) {

          console.log("API update error:", error);

        }

      }


      // React state me update
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === editId
            ? {
                ...user,
                firstName: formData.firstName,
                lastName: formData.lastName,
                age: Number(formData.age)
              }
            : user
        )
      );


      console.log("User Updated:", selectedUser);

      setEditId(null);
    }


    // Form clear
    setFormData({
      firstName: "",
      lastName: "",
      age: ""
    });

  };


  // =========================
  // EDIT
  // =========================
  const handleEdit = (user) => {

    setEditId(user.id);

    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age
    });

  };


  // =========================
  // DELETE
  // =========================
  const handleDelete = async (id) => {

    // API user hai to API DELETE call karo
    if (id <= 30) {

      try {

        await axios.delete(
          `https://dummyjson.com/users/${id}`
        );

        console.log("Deleted from API:", id);

      } catch (error) {

        console.log("API delete error:", error);

      }

    }


    // React state se user remove
    setUsers((prevUsers) =>
      prevUsers.filter(
        (user) => user.id !== id
      )
    );

  };


  return (
    <div>

      <h1>CRUD User Management</h1>


      {/* =========================
          FORM
      ========================= */}

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">
          {editId === null
            ? "Add User"
            : "Update User"}
        </button>

      </form>


      <hr />


      {/* =========================
          USER LIST
      ========================= */}

      <h2>Users List</h2>

      <ul>

        {users.map((user) => (

          <li key={user.id}>

            {user.firstName}{" "}
            {user.lastName} -{" "}
            {user.age}

            {" "}

            <button
              onClick={() => handleEdit(user)}
            >
              Edit
            </button>

            {" "}

            <button
              onClick={() => handleDelete(user.id)}
            >
              Delete
            </button>

          </li>

        ))}

      </ul>

    </div>
  );
};

export default App;