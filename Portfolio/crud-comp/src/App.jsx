import React, { useEffect, useState } from "react";
import axios from "axios";

import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const App = () => {

  // =========================
  // STATE
  // =========================

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


    // CREATE
    if (editId === null) {

      const response = await axios.post(
        "https://dummyjson.com/users/add",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          age: Number(formData.age)
        }
      );


      const newUser = {
        ...response.data,
        id: Date.now()
      };


      setUsers((prevUsers) => [
        ...prevUsers,
        newUser
      ]);

    }


    // UPDATE
    else {

      // API user
      if (editId <= 30) {

        try {

          await axios.put(
            `https://dummyjson.com/users/${editId}`,
            {
              firstName: formData.firstName,
              lastName: formData.lastName,
              age: Number(formData.age)
            }
          );

        } catch (error) {

          console.log("API update error:", error);

        }
      }


      // React state update

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


      setEditId(null);
    }


    // Clear form

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

    if (id <= 30) {

      try {

        await axios.delete(
          `https://dummyjson.com/users/${id}`
        );

      } catch (error) {

        console.log("API delete error:", error);

      }

    }


    setUsers((prevUsers) =>
      prevUsers.filter(
        (user) => user.id !== id
      )
    );

  };


  // =========================
  // UI
  // =========================

  return (
    <div>

      <h1>CRUD User Management</h1>


      <UserForm
        formData={formData}
        editId={editId}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />


      <hr />


      <UserList
        users={users}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

    </div>
  );
};

export default App;