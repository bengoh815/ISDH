import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  FormGroup,
  Input,
  Paper,
  Stack,
  Typography,
  useTheme,
  IconButton,
  InputAdornment,
  Divider,
} from "@mui/material";
import { useState } from "react";
import GoogleSignIn from "./GoogleSignIn";

/*
TODO
  Fix google button width
  submit functionality
  password requirements state clearly
  link to sign up
  forget password
*/

export default function Login() {
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "80px" }}
      >
        <Paper sx={{ width: "40%" }}>
          <Stack
            direction="column"
            sx={{ alignItems: "center", mt: "10px", mb: "20px" }}
          >
            <Avatar sx={{ bgcolor: "red" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <FormGroup sx={{ width: "80%" }}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel>Email Address</InputLabel>
                <Input></Input>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ marginTop: 3, marginBottom: 3 }}
              >
                Log in
              </Button>
            </FormGroup>
            <Divider
              sx={{ width: "80%", borderBottomWidth: 2, marginBottom: 3 }}
            />
            <GoogleSignIn />
          </Stack>
        </Paper>
      </Box>
    </>
  );
}
