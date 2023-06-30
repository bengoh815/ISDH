import { Menu } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

export default function Menubox({ toggleDrawer }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <IconButton onClick={toggleDrawer} aria-label="menu" size="medium">
        <Menu fontSize="inherit" sx={{ color: "white" }} />
      </IconButton>
      <Typography>Dashboard</Typography>
    </Box>
  );
}
