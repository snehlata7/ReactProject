import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { usersData } from "../UsersData/UsersData";
import UserDetailCard from "./UserDetailCard/UserDetailCard";
import PostCard from "./post/PostCard";
import "./UserDetail.css";
import { Button } from "react-bootstrap";
const UserDetail = () => {
  let { userId } = useParams();
  const [loading, setLoading] = useState(true);
  const [userDetail, setUserDetail] = useState(null);

  /**
   * This function will get user Detail based upon userId
   */
  useEffect(() => {
    const user = usersData.filter((user) => {
      return user.userId === Number(userId);
    });
    if (user.length > 0) {
      setUserDetail(user[0]);
    }
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <h2 className="custom-loader">Loading...</h2>
      ) : (
        <div className="detail-container">
          <div className="d-flex justify-content-center align-items-center">
            <NavLink to={`/`}>
              <Button>Back </Button>
            </NavLink>
          </div>
          <h1>User Detail</h1>
          <UserDetailCard userDetail={userDetail} />

          <div className="post-container">
            {userDetail.posts.map((post) => {
              return <PostCard key={post.postId} post={post} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
