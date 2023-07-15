import { Delete } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  IconButton,
  Modal,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { DOC_ACTIONS } from "../context/DocContext";
import { useDocContext } from "../hooks/useDocContext";
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

export default function DocDel({ doc }) {
  const { user } = useAuthContext();
  const { dispatch } = useDocContext();

  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  const [serverRes, setServerRes] = useState(false);
  const handleOpenServerRes = () => setServerRes(true);
  const handleCloseServerRes = () => setServerRes(false);

  const [goodRes, setGoodRes] = useState(false);

  const handleCancel = () => setOpen(false);
  const handleSubmit = () => {
    const url = `http://localhost:8000/api/doc/delete/${doc._id}`;
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      data: {
        doc,
      },
    };

    axios
      .delete(url, config)
      .then((response) => {
        if (response.status === 200) {
          console.log("called good res");
          setGoodRes(true);
          const json = response.data;
          // update the doc context
          dispatch({ type: DOC_ACTIONS.DELETE_DOC, payload: json });
        } else {
          setGoodRes(false);
        }
        console.log("called serverRes");
        handleOpenServerRes();
      })
      .catch((error) => {
        console.log(error.response);
        setGoodRes(false);
        handleOpenServerRes();
      });
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleToggle}>
        <Delete />
      </IconButton>
      <Modal open={open}>
        <Box sx={style}>
          <Typography variant="h4">Delete Document</Typography>
          <Typography
            sx={{
              paddingY: "40px",
              textAlign: "center",
              fontSize: "large",
              fontWeight: "500",
            }}
          >
            Are you sure?
          </Typography>
          <Stack direction="row" gap="4%" marginTop="20px">
            <Button
              variant="contained"
              color="error"
              sx={{ width: "48%" }}
              onClick={handleCancel}
            >
              cancel
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{ width: "48%" }}
              onClick={handleSubmit}
            >
              delete
            </Button>
          </Stack>
        </Box>
      </Modal>
      <Snackbar
        open={serverRes}
        autoHideDuration={6000}
        onClose={handleCloseServerRes}
      >
        {!goodRes && (
          <Alert
            onClose={handleCloseServerRes}
            severity="error"
            sx={{ width: "100%" }}
          >
            Document delete failed!
          </Alert>
        )}
      </Snackbar>
    </>
  );
}
