import React from "react";

const UserDetailCard = ({ userDetail }) => {
  return (
    <div className="user-detail-container">
      <div className="left-user-detail-container">
        <div>Name - {userDetail.name}</div>
        <div>Username - {userDetail.username}</div>
        <div>Catch Phrase - {userDetail.catchPhrase}</div>
      </div>
      <div className="right-user-detail-container">
        <div className="address">
          Address - {userDetail.address?.street} {userDetail.address?.city}{" "}
          {userDetail.address?.zipcode}
        </div>

        <div>Email - {userDetail.email}</div>
        <div>Phone - {userDetail.phone}</div>
      </div>
    </div>
  );
};

export default UserDetailCard;
