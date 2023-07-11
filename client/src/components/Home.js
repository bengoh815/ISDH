import { Stack } from "@mui/material";
import SideNav from "./SideNav";
import Mainbox from "./Mainbox";

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
