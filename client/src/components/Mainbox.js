import { Box, Stack } from "@mui/material";
import SpacingHeader from "./SpacingHeader";
import DocumentTable from "./DocumentTable";

export default function Mainbox() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="column">
        <SpacingHeader />
        <DocumentTable />
      </Stack>
    </Box>
  );
}

// const smtg = (
// <Stack direction="column">
//   <SpacingHeader />
//   <DocumentTable />
// </Stack>
// );
