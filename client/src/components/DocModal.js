// mui
import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function DocModal({ openModal, children }) {
  return (
    <Modal open={openModal}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}
