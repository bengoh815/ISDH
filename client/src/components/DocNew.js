import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

/*
TODO:
  use MUI snackbar to create success after posting to db
  create dispatch to local frontend thing
  handle error adding and remove at dispatch
*/

export default function DocNew() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleToggle}>track new document</Button>
      <Modal open={open} onClose={handleToggle}>
        <Box sx={style}>Smtg here</Box>
      </Modal>
    </>
  );
}
