import { Card, CardContent, CardHeader, Typography } from "@mui/material";

/*
TODO
  Make it more nice
  Make sure writing is ok
  Maybe have icon
*/

export default function NotificationCard() {
  return (
    <Card sx={{ maxWidth: "300px", marginTop: 3 }}>
      <CardHeader
        title="Demo: Your account is not verified"
        subheader="Please verify your account. This helps us ..."
      />
      <CardContent>
        <Typography>Something here</Typography>
      </CardContent>
    </Card>
  );
}
