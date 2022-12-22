import { useSelector } from "react-redux";
import { selectUsersById } from "../users/usersSlice";

export const PostAuthor = ({ userId }) => {
  const author = useSelector((state) => selectUsersById(state, userId));
  return <span>by {author ? author.name : "Unknown author"}</span>;
};
