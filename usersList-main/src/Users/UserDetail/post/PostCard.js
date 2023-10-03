import React, { useState } from "react";
import PostModal from "./PostModal";
const PostCard = ({ post }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="post-card" onClick={() => setShowModal(true)}>
        <div className="post-title">{post.title}</div>
        <div className="post-content">{post.content}</div>
      </div>
      {showModal && (
        <PostModal
          show={showModal}
          post={post}
          handleClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default PostCard;
