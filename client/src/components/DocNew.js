import {
  Box,
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
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

  const [form, setForm] = useState({
    docName: "",
    type: "",
    notes: "",
    status: "",
    expirationDate: new Date(),
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
  const handleSubmit = () => {
    console.log(form);
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleToggle}>track new document</Button>
      <Modal open={open}>
        <Box sx={style}>
          <Typography variant="h5">Create New Document</Typography>
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
              <TextField
                id="outlined-multiline-static"
                label="Notes"
                multiline
                rows={2}
                value={form.notes}
                onChange={handleNotes}
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
                <MenuItem value={"okay"}>Okay</MenuItem>
                <MenuItem value={"ongoing"}>Ongoing</MenuItem>
                <MenuItem value={"expiring"}>Expiring</MenuItem>
                <MenuItem value={"expired"}>Expired</MenuItem>
              </Select>
            </FormControl>
            <FormControl margin="normal">
              <DatePicker
                label="Expiration Date"
                value={form.expirationDate}
                onChange={(v) => handleExpirationDate(v)}
              />
            </FormControl>
          </FormGroup>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Modal>
    </>
  );
}
