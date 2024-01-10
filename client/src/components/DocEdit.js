// npm
import axios from "axios";
import { useState } from "react";

// mui
import {
  Alert,
  Button,
  FormControl,
  FormGroup,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Edit } from "@mui/icons-material";

// context
import { DOC_ACTIONS } from "../context/DocContext";
import { DOC_STATUS } from "../context/DocContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useDocContext } from "../hooks/useDocContext";

// components
import DocModal from "./DocModal";

export default function DocEdit({ doc }) {
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
  const [form, setForm] = useState({
    ...doc,
    expirationDate:
      doc.expirationDate === null ? null : new Date(doc.expirationDate),
  });
  const handleDocName = (e) => {
    setForm({ ...form, docName: e.target.value });
  };
  const handleType = (e) => {
    setForm({ ...form, type: e.target.value });
  };
  const handleNotes = (e) => {
    setForm({ ...form, notes: e.target.value });
  };
  const handleStatus = (e) => {
    setForm({ ...form, status: e.target.value });
  };
  const handleExpirationDate = (v) => {
    setForm({ ...form, expirationDate: v });
  };
  const clearForm = () => {
    setForm({
      ...doc,
      expirationDate: new Date(doc.expirationDate),
    });
  };
  const handleCancel = () => {
    clearForm();
    setOpenModal(false);
  };
  const handleSubmit = () => {
    const url = `http://localhost:8000/api/doc/update/${doc._id}`;
    const data = form;
    const config = {
      headers: {
        Authorization: `Bearer ${user.jwtToken}`,
      },
    };

    axios
      .patch(url, data, config)
      .then((response) => {
        if (response.status === 200) {
          setGoodRes(true);

          const json = response.data;
          // update the doc context
          dispatch({ type: DOC_ACTIONS.UPDATE_DOC, payload: json });
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
        <Edit />
      </IconButton>
      <DocModal openModal={openModal}>
        <Typography variant="h4">Edit Document</Typography>
        <FormGroup>
          <FormControl margin="normal">
            <TextField
              required
              id="outlined-required"
              label="Document Name"
              value={form.docName}
              onChange={handleDocName}
            />
          </FormControl>
          <FormControl margin="normal">
            <InputLabel id="select-type-helper-label">Type</InputLabel>
            <Select
              id="outlined-basic-type"
              labelId="select-type-helper-label"
              label="Type"
              value={form.type}
              onChange={handleType}
            >
              <MenuItem value={"Passport"}>Passport</MenuItem>
              <MenuItem value={"Driving License"}>Driving License</MenuItem>
              <MenuItem value={"Visa"}>Visa</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
          <FormControl margin="normal">
            <DatePicker
              label="Expiration Date"
              value={form.expirationDate}
              onChange={(v) => handleExpirationDate(v)}
            />
          </FormControl>
          <FormControl margin="normal">
            <InputLabel id="select-status-helper-label">Status</InputLabel>
            <Select
              id="outlined-basic-status"
              labelId="select-status-helper-label"
              label="Status"
              value={form.status}
              onChange={handleStatus}
            >
              <MenuItem value={DOC_STATUS.OKAY}>Okay</MenuItem>
              <MenuItem value={DOC_STATUS.ONGOING}>Ongoing</MenuItem>
              <MenuItem value={DOC_STATUS.EXPIRING}>Expiring</MenuItem>
              <MenuItem value={DOC_STATUS.EXPIRED}>Expired</MenuItem>
            </Select>
          </FormControl>
          <FormControl margin="normal">
            <TextField
              id="outlined-multiline-static"
              label="Notes"
              multiline
              rows={3}
              value={form.notes}
              onChange={handleNotes}
            />
          </FormControl>
        </FormGroup>
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
            track
          </Button>
        </Stack>
      </DocModal>
      <Snackbar
        open={serverRes}
        autoHideDuration={6000}
        onClose={handleCloseServerRes}
      >
        {goodRes ? (
          <Alert
            onClose={handleCloseServerRes}
            severity="success"
            sx={{ width: "100%" }}
          >
            Document editted successfully!
          </Alert>
        ) : (
          <Alert
            onClose={handleCloseServerRes}
            severity="error"
            sx={{ width: "100%" }}
          >
            Document edit failed!
          </Alert>
        )}
      </Snackbar>
    </>
  );
}
