import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Status() {
  const [status, setStatus] = React.useState("OK");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    setStatus(e);
    handleClose();
  };

  return (
    <div>
      <Button
        id="status-button"
        aria-controls={open ? "status-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {status}
      </Button>
      <Menu
        id="status-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "status-button",
        }}
      >
        <MenuItem onClick={() => handleChange("Ok")}>Ok</MenuItem>
        <MenuItem onClick={() => handleChange("In Progress")}>
          In Progress
        </MenuItem>
        <MenuItem onClick={() => handleChange("Expired")}>Expired</MenuItem>
      </Menu>
    </div>
  );
}
