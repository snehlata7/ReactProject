import React from "react";
import { usersData } from "./UsersData/UsersData";
import UserCard from "./UserCard/UserCard";
import './users.css';
const Users = () => {
  return (
    <div className="user-container">
      <h1>User List</h1>
      {usersData.map((user) => {
        return <UserCard key={user.userId} user={user} />;
      })}
    </div>
  );
};

export default Users;
