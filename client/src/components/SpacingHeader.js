import { styled } from "@mui/material";

const StyledDiv = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// This exists because I do not know
// how to style the mainbox to be not
// have Navbar overlapping
// documented this minor issue

export default function SpacingHeader() {
  return <StyledDiv />;
}
