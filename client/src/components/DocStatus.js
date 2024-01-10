import { Check, Close, WarningAmber, WorkHistory } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

// hooks
import { DOC_STATUS } from "../context/DocContext";

export default function DocStatus({ status }) {
  const parseColor = (s) => {
    switch (s) {
      case DOC_STATUS.OKAY:
        return "green";
      case DOC_STATUS.ONGOING:
        return "#007FFF";
      case DOC_STATUS.EXPIRING:
        return "orange";
      case DOC_STATUS.EXPIRED:
        return "black";
      default:
        return "black";
    }
  };
  const color = parseColor(status);

  const parseIcon = (s) => {
    switch (s) {
      case DOC_STATUS.OKAY:
        return (
          <Check
            sx={{
              color: color,
            }}
          />
        );
      case DOC_STATUS.ONGOING:
        return (
          <WorkHistory
            sx={{
              color: color,
            }}
          />
        );
      case DOC_STATUS.EXPIRING:
        return (
          <WarningAmber
            sx={{
              color: color,
            }}
          />
        );
      case DOC_STATUS.EXPIRED:
        return (
          <Close
            sx={{
              color: color,
            }}
          />
        );
      default:
        return "";
    }
  };
  const icon = parseIcon(status);

  return (
    <Stack direction="row" sx={{ alignItems: "center" }}>
      {icon}
      <Typography sx={{ textTransform: "capitalize", color: color }}>
        {status}
      </Typography>
    </Stack>
  );
}
