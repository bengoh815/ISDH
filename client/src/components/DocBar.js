import { Box, Paper, Stack } from "@mui/material";
import DocSearch from "./DocSearch";
import DocNew from "./DocNew";

export default function DocBar() {
  return (
    <>
      <Paper>
        <Stack
          direction="row"
          sx={{ alignItems: "center", padding: "10px 20px" }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <DocSearch />
          </Box>
          <DocNew />
        </Stack>
      </Paper>
    </>
  );
}
