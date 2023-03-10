import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React from "react";
import LatestConversations from "./LatestConversations";
import ImageList from "./OnlineFriends";

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none ", sm: "block" } }}>
      <Box sx={{ position: "fixed" }}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7} sx={{justifyContent: "flex-end"}}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://mui.com/static/images/avatar/5.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/6.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/8.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/9.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://mui.com/static/images/avatar/10.jpg"
          />
        </AvatarGroup>
        
        <ImageList />

        <LatestConversations />
      </Box>
    </Box>
  );
}

export default Rightbar;
