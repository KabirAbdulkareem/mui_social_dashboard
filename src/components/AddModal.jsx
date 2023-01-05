import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import { Avatar, styled } from "@mui/material";
import TextField from '@mui/material/TextField';

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
          sx={{width: "100%"}}
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
        </Box>
      </Modal>
    </div>
  );
};

export default AddModal;
