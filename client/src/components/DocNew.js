import {
  Alert,
  Box,
  Button,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import axios from "axios";
import { useState } from "react";
import { useDocContext } from "../hooks/useDocContext";
import { DOC_ACTIONS } from "../context/DocContext";
import { DOC_STATUS } from "./DocStatus";
import { useAuthContext } from "../hooks/useAuthContext";

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
  Expansion: sorted by expiration date when added
*/

export default function DocNew() {
  const { user } = useAuthContext();
  const { dispatch } = useDocContext();

  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  const [responseOpen, setResponseOpen] = useState(false);
  const handleResponseOpen = () => setResponseOpen(true);
  const handleResponseClose = () => setResponseOpen(false);

  const [addSuccess, setAddSuccess] = useState(false);

  const [form, setForm] = useState({
    docName: "",
    type: "",
    expirationDate: null,
    status: "",
    notes: "",
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
      docName: "",
      type: "",
      notes: "",
      status: "",
      expirationDate: null,
    });
  };
  const handleCancel = () => {
    clearForm();
    setOpen(false);
  };

  const handleSubmit = () => {
    const data = form;
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .post("http://localhost:8000/api/doc/create", data, config)
      .then((response) => {
        if (response.status === 200) {
          setAddSuccess(true);

          const json = response.data;

          // update the doc context
          dispatch({ type: DOC_ACTIONS.CREATE_DOC, payload: json });
        } else {
          setAddSuccess(false);
        }

        handleResponseOpen();
      })
      .catch((error) => {
        console.log(error.response);
        setAddSuccess(false);
        handleResponseOpen();
      });

    clearForm();
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleToggle}>track new document</Button>
      <Modal open={open}>
        <Box sx={style}>
          <Typography variant="h4">Track New Document</Typography>
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
        </Box>
      </Modal>
      <Snackbar
        open={responseOpen}
        autoHideDuration={6000}
        onClose={handleResponseClose}
      >
        {addSuccess ? (
          <Alert
            onClose={handleResponseClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Tracking new document!
          </Alert>
        ) : (
          <Alert
            onClose={handleResponseClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            Error tracking new document!
          </Alert>
        )}
      </Snackbar>
    </>
  );
}
