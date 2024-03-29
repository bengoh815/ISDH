// npm
import { useState } from "react";
import { Link } from "react-router-dom";

// mui
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
  Alert,
} from "@mui/material";
import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";

// components
import Navbar from "../components/Navbar";
import SpacingHeader from "../components/SpacingHeader";
import GoogleSignIn from "../components/GoogleSignIn";

// hooks
import { useSignup } from "../hooks/useSignup";

/*
TODO
  Fix google button width
  handle error
*/

export default function Signup() {
  const theme = useTheme();
  const { signup, isLoading, error } = useSignup();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleFirstnameChange = (e) =>
    setForm({ ...form, firstName: e.target.value });
  const handleLastnameChange = (e) =>
    setForm({ ...form, lastName: e.target.value });
  const handleEmailChange = (e) => setForm({ ...form, email: e.target.value });
  const handlePasswordChange = (e) =>
    setForm({ ...form, password: e.target.value });
  const handleSubmit = async (e) => {
    const name = { firstName: form.firstName, lastName: form.lastName };
    await signup(name, form.email, form.password);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <Navbar />
      <SpacingHeader />
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "80px" }}
      >
        <Paper sx={{ width: "40%", maxWidth: "450px" }}>
          <Stack
            direction="column"
            sx={{ alignItems: "center", mt: "10px", mb: "20px", gap: "10px" }}
          >
            <Avatar sx={{ bgcolor: "red" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <FormGroup sx={{ width: "80%" }}>
              <Stack direction="row" sx={{ gap: "10%" }}>
                <FormControl margin="normal" required sx={{ width: "45%" }}>
                  <InputLabel>First Name</InputLabel>
                  <Input
                    value={form.firstName}
                    onChange={handleFirstnameChange}
                  />
                </FormControl>
                <FormControl margin="normal" required sx={{ width: "45%" }}>
                  <InputLabel>Last Name</InputLabel>
                  <Input
                    value={form.lastName}
                    onChange={handleLastnameChange}
                  />
                </FormControl>
              </Stack>

              <FormControl margin="normal" required fullWidth>
                <InputLabel>Email Address</InputLabel>
                <Input value={form.email} onChange={handleEmailChange} />
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
                  value={form.password}
                  onChange={handlePasswordChange}
                />
              </FormControl>
              {error && <Alert severity="error">{error.message}</Alert>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ marginTop: 3, marginBottom: 3 }}
                onClick={handleSubmit}
                disabled={isLoading}
              >
                Sign up
              </Button>
            </FormGroup>
            <Divider
              sx={{ width: "80%", borderBottomWidth: 2, marginBottom: 3 }}
            />
            <GoogleSignIn />
            <Typography>
              Already have an account? <Link to="/login">Log in</Link>
            </Typography>
          </Stack>
        </Paper>
      </Box>
    </>
  );
}
