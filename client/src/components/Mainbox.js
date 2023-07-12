import { Box, Stack } from "@mui/material";
import SpacingHeader from "./SpacingHeader";
import DocTable from "./DocTable";
import DocBar from "./DocBar";

export default function Mainbox() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="column" gap="20px">
        <SpacingHeader />
        <DocBar />
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
