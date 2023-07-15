// npm
import { useState } from "react";

// mui
import { Stack } from "@mui/material";

// components
import Mainbox from "../components/Mainbox";
import SideNav from "../components/SideNav";

export default function Dashboard() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Stack direction="row" spacing={2}>
        <SideNav openDrawer={openDrawer} />
        <Mainbox />
      </Stack>
    </>
  );
}
