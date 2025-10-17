import React from "react";
import CreatePost from "./createPost";
import { usePostContext } from "../../context/PostContext";
import PostCard from "../common/PostCard";
import { useSelector } from "react-redux";

const Feeds = () => {
  const post = useSelector((state) => state.post.post);
  // const {
  //   state: { post },
  // } = usePostContext();
  return (
    <div>
      {/* story */}
      <CreatePost />
      {post?.map((currPost) => {
        return <PostCard postData={currPost} />;
      })}
    </div>
  );
};

export default Feeds;
