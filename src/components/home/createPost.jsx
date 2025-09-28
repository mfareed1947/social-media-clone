import { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import {
  Image as ImageIcon,
  UserPlus,
  Smile,
  MapPin,
  Video,
  GanttChartSquare,
  Users,
  ChevronDown,
} from "lucide-react";
import { styled } from "@mui/material/styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  // bgcolor: "background.paper",
  // border: "2px solid #000",
  // boxShadow: 24,
  p: 4,
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);
  console.log(files);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box position={"relative"}>
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                mx: "auto",
                mt: 5,
                borderRadius: 3,
              }}
            >
              {/* Header */}
              <Box sx={{ borderBottom: "1px solid #e0e0e0", p: 2 }}>
                <Typography variant="h6" align="center">
                  Create post
                </Typography>
              </Box>

              {/* Content */}
              <Box sx={{ p: 2 }}>
                {/* Profile Section */}
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar sx={{ bgcolor: "green" }}>G</Avatar>
                  <Box>
                    <Typography fontWeight="500">GeeksforGeeks</Typography>
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<Users size={16} />}
                      endIcon={<ChevronDown size={16} />}
                      sx={{ textTransform: "none", fontSize: 12, mt: 0.5 }}
                    >
                      Friends
                    </Button>
                  </Box>
                </Stack>

                {/* Text Field */}
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  placeholder="What's on your mind?"
                  defaultValue="hello"
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  sx={{ mt: 2, fontSize: 20 }}
                />
                {true && (
                  <ImageList
                    sx={{ width: 500, height: 450 }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                  >
                    {files.map((item) => {
                      console.log(item, "item");
                      return (
                        <ImageListItem
                          key={item.img}
                          cols={item.cols || 1}
                          rows={item.rows || 1}
                        >
                          <img
                            {...srcset(item.File, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                          />
                          {/* <img src={item} alt="" /> */}
                        </ImageListItem>
                      );
                    })}
                  </ImageList>
                )}
                {/* Grammarly-like icon */}
                <Box display="flex" justifyContent="flex-end" pr={1}>
                  <Avatar
                    sx={{
                      bgcolor: "#0f9d58",
                      width: 24,
                      height: 24,
                      fontSize: 14,
                    }}
                  >
                    G
                  </Avatar>
                </Box>
              </Box>

              {/* Divider */}
              <Divider />

              {/* Add to your post */}
              <Box px={2} py={1}>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  Add to your post
                </Typography>
                <Stack direction="row" spacing={2}>
                  <IconButton component="label" color="success">
                    <ImageIcon size={20} />

                    <VisuallyHiddenInput
                      type="file"
                      onChange={(event) => {
                        let newFiles = Object.values(event.target.files);
                        newFiles = files.concat(newFiles);
                        setFiles(newFiles);
                      }}
                      multiple
                    />
                  </IconButton>

                  <IconButton color="primary">
                    <UserPlus size={20} />
                  </IconButton>
                  <IconButton color="warning">
                    <Smile size={20} />
                  </IconButton>
                  <IconButton color="error">
                    <MapPin size={20} />
                  </IconButton>
                  <IconButton color="secondary">
                    <GanttChartSquare size={20} />
                  </IconButton>
                  <IconButton color="info">
                    <Video size={20} />
                  </IconButton>
                </Stack>
              </Box>

              {/* Post Button */}
              <Box p={2}>
                <Button fullWidth variant="contained" color="primary">
                  Post
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Modal>
      <div className="bg-white rounded-lg shadow p-4 space-y-4">
        {/* Input Row */}
        <div className="flex items-center space-x-4">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <input
            type="text"
            placeholder="What's on your mind, Josephine?"
            className="flex-1 cursor-pointer bg-gray-100 rounded-full px-4 py-2 outline-none text-sm placeholder-gray-500"
            onClick={handleOpen}
          />
        </div>

        <hr />

        {/* Action Buttons */}
        <div className="flex justify-between text-sm text-gray-600">
          <ActionButton icon="📹" label="Live" color="text-red-500" />
          <ActionButton icon="🖼️" label="Photo/Video" color="text-green-600" />
          <ActionButton
            icon="😊"
            label="Feeling/Activity"
            color="text-yellow-500"
          />
        </div>
      </div>
    </>
  );
};

const ActionButton = ({ icon, label, color }) => (
  <button className="flex items-center space-x-2 hover:bg-gray-100 px-2 py-1 rounded">
    <span className={`text-lg ${color}`}>{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default CreatePost;
