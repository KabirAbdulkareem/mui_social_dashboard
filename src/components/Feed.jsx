import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";


function Feed() {
  return (
    <Box p={2} flex={4}>
      <Post />
    </Box>
  );
}

export default Feed;
