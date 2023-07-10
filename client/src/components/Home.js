import { Box, Stack } from "@mui/material";
import SideNav from "./SideNav";
import Mainbox from "./Mainbox";
import DocumentTable from "./DocumentTable";
import SpacingHeader from "./SpacingHeader";

export default function Home({ openDrawer }) {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <SideNav openDrawer={openDrawer} />
        <Mainbox />
      </Stack>
    </>
  );
}
