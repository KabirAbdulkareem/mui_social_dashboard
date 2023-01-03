import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from '@mui/material/Tooltip';

const AddButton = () => {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 28px)", md: 30 },
        }}
      >
        <Tooltip title="Delete">
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip>

      </Box>
    </>
  );
};

export default AddButton;
