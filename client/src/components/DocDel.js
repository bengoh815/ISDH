// npm
import axios from "axios";
import { useState } from "react";

// mui
import { Delete } from "@mui/icons-material";
import {
  Alert,
  Button,
  IconButton,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";

// context
import { useAuthContext } from "../hooks/useAuthContext";
import { DOC_ACTIONS } from "../context/DocContext";
import { useDocContext } from "../hooks/useDocContext";

// components
import DocModal from "./DocModal";

/*
TODO
  delete success snackbar being removed by actual delete
*/

export default function DocDel({ doc }) {
  // context
  const { user } = useAuthContext();
  const { dispatch } = useDocContext();

  // modal
  const [openModal, setOpenModal] = useState(false);
  const handleToggle = () => setOpenModal(!openModal);

  // server response
  const [serverRes, setServerRes] = useState(false);
  const handleOpenServerRes = () => setServerRes(true);
  const handleCloseServerRes = () => setServerRes(false);

  const [goodRes, setGoodRes] = useState(false);

  // form
  const handleCancel = () => setOpenModal(false);
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
          setGoodRes(true);

          const json = response.data;
          // update the doc context
          dispatch({ type: DOC_ACTIONS.DELETE_DOC, payload: json });
        } else {
          setGoodRes(false);
        }
        handleOpenServerRes();
      })
      .catch((error) => {
        console.log(error.response);
        setGoodRes(false);
        handleOpenServerRes();
      });
    setOpenModal(false);
  };

  return (
    <>
      <IconButton onClick={handleToggle}>
        <Delete />
      </IconButton>
      <DocModal openModal={openModal}>
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
      </DocModal>
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
