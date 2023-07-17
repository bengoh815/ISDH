// npm
import { Link as RouterLink } from "react-router-dom";

// mui
import { Box, Link as MuiLink, Stack, Typography } from "@mui/material";

// components
import Navbar from "../components/Navbar";
import SpacingHeader from "../components/SpacingHeader";

export default function Home({ openDrawer }) {
  return (
    <Box sx={{ height: "90vh" }}>
      <Navbar />
      <SpacingHeader />
      <Box sx={{ height: "20%" }} />
      <Stack
        direction="column"
        gap="20px"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">Track your documents with ease</Typography>
        <Typography variant="p">
          Frustrated missing expiry date on documents?
        </Typography>
        <Typography variant="p">Wondering which document you have?</Typography>
        <Typography variant="h6">
          Come&nbsp;
          <MuiLink component={RouterLink} to="/signup">
            join us
          </MuiLink>
          &nbsp;to help you worry about the fuss
        </Typography>
      </Stack>
    </Box>
  );
}
