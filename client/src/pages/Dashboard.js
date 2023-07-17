// mui
import { Stack } from "@mui/material";

// components
import Mainbox from "../components/Mainbox";
import SideNav from "../components/SideNav";

export default function Dashboard() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <SideNav />
        <Mainbox />
      </Stack>
    </>
  );
}
