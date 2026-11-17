import React from "react";
import UserItem from "./UserItem";

const UserList =  ({
  users,
  handleEdit,
  handleDelete
}) => {
    return(
        <>
      <h2>Users List</h2>

      <ul>

        {users.map((user) => (

          <UserItem
            key={user.id}
            user={user}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />

        ))}

      </ul>
    </>
    );
};

export default UserList;