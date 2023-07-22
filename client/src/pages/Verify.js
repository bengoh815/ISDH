// npm
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";

// mui
import { Box, Typography, Link as MuiLink } from "@mui/material";

// components
import Navbar from "../components/Navbar";

export default function Verify() {
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();
  const [response, setResponse] = useState();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:8000/api/user/${param.id}/verify/${param.token}`;
        const { data } = await axios.get(url);
        setResponse(data);
        setValidUrl(true);
      } catch (error) {
        setResponse(error.message);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <>
      <Box
        sx={{
          height: "95vh",
          width: "95vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Navbar />
        {validUrl ? (
          <Box
            sx={{
              bgcolor: "#EDF7ED",
              height: "50%",
              width: "60%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h3">Email verified successfully</Typography>
          </Box>
        ) : (
          <Box
            sx={{
              bgcolor: "#FDEDED",
              height: "50%",
              width: "60%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontSize: "h5.fontSize" }}>
              404 Not Found
            </Typography>
            {response && <Typography>{response}</Typography>}
          </Box>
        )}
        <Typography sx={{ fontSize: "h5.fontSize" }}>
          Back to&nbsp;
          <MuiLink component={RouterLink} to="/login">
            log in
          </MuiLink>
          &nbsp;page
        </Typography>
      </Box>
    </>
  );
}
