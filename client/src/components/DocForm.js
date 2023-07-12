import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Paper,
} from "@mui/material";

export default function DocForm() {
  return (
    <>
      <Paper>
        <FormGroup>
          <FormControl>
            <InputLabel>Document Name</InputLabel>
            <Input />
          </FormControl>
        </FormGroup>
      </Paper>
    </>
  );
}
