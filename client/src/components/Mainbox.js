import { Box, Stack } from "@mui/material";
import SpacingHeader from "./SpacingHeader";
import DocTable from "./DocTable";

export default function Mainbox() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="column">
        <SpacingHeader />
        <DocTable />
      </Stack>
    </Box>
  );
}

// const smtg = (
// <Stack direction="column">
//   <SpacingHeader />
//   <DocTable />
// </Stack>
// );
