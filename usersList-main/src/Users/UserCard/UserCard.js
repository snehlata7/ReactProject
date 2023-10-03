import React from "react";
import { NavLink } from "react-router-dom";
import './userCard.css'
const UserCard = (props) => {
  const { user } = props;
  return (
    <NavLink to={`/userDetail/${user.userId}`}>
      <div className="card-container">
        <div>Name : {user.name}</div>
        <div>Posts : {user.posts.length}</div>
      </div>
    </NavLink>
  );
};

export default UserCard;
