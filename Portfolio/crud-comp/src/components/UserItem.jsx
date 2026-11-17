import React from "react";

const UserItem =  ({
  user,
  handleEdit,
  handleDelete
}) => {
    return(
     <li>

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
    );
};

export default UserItem;