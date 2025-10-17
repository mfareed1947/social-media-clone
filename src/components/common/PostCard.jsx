import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { MessageCircle, Share2, ThumbsUp } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../redux/slice/postSlice";

const PostCard = ({ postData }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost({ id: "12345" }));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {postData?.createdBy.charAt(0).toUpperCase()}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={postData?.createdBy}
        subheader={postData?.createdAt}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {postData?.postContent}
        </Typography>
      </CardContent>
      {postData.files.map((file) => {
        return (
          <CardMedia
            component="img"
            height="194"
            image={URL.createObjectURL(file)}
            alt="Paella dish"
          />
        );
      })}

      <CardActions disableSpacing>
        <IconButton onClick={handleDelete} aria-label="like">
          <span>Like</span>
          <ThumbsUp />
          {/* <FavoriteIcon /> */}
        </IconButton>
        <IconButton aria-label="share">
          <span>Share</span>
          <Share2 />
        </IconButton>
        <IconButton aria-label="MessageCircle">
          <span>Comments</span>
          <MessageCircle />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PostCard;
