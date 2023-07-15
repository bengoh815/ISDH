import { Box, Stack } from "@mui/material";
import SpacingHeader from "./SpacingHeader";
import DocTable from "./DocTable";
import DocBar from "./DocBar";

export default function Mainbox() {
  return (
    <Box sx={{ width: "100%" }}>
      <SpacingHeader />
      <Stack direction="column" gap="20px">
        <DocBar />
        <DocTable />
      </Stack>
    </Box>
  );
}
