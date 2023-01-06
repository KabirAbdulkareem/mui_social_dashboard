import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import { Avatar, styled } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DateRangeIcon from "@mui/icons-material/DateRange";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  /* border: "2px solid #000", */
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const AddModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 28px)", md: 30 },
        }}
        onClick={handleOpen}
      >
        <Tooltip title="Delete">
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            Create post
          </Typography>
          <UserBox>
            <Avatar />
            <Typography>Kabir</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" spacing={1} mt={2} mb={2}>
            <EmojiEmotionsIcon />
            <ImageIcon color="primary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{width:"fit-content", paddingRight:"2rem", paddingLeft:"2rem"}}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </div>
  );
};

export default AddModal;
