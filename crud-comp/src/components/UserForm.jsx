import React from "react";

const UserForm = ({
  formData,
  editId,
  handleChange,
  handleSubmit
}) => {
    return(
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
        {editId === null ? "Add User" : "Update User"}
      </button>

    </form>
    );
};

export default UserForm;