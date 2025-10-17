import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/PostReducer";

const defaultValues = {
  // posts: {
  //   id,
  //   postContent,
  //   likes: ["ali", "zubair", "ahmed", "moiz"],
  //   comments: [
  //     {
  //       commentBy: "Fareed",
  //       CommentTo: "Ali",
  //       commentMessage: "",
  //       createdAt: "2432",
  //     },
  //   ],
  // },
  post: [],
};

const PostContext = createContext(defaultValues);

const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultValues);

  return <PostContext value={{ state, dispatch }}>{children}</PostContext>;
};

export default PostContextProvider;

export const usePostContext = () => {
  return useContext(PostContext);
};
