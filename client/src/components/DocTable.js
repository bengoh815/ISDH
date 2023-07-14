import axios from "axios";
import { useEffect } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { useDocContext } from "../hooks/useDocContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { DOC_ACTIONS } from "../context/DocContext";
import DocRow from "./DocRow";

export default function DocumentTable() {
  const { docs, dispatch } = useDocContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const getDocs = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      await axios
        .get("http://localhost:8000/api/doc/", config)
        .then((response) =>
          dispatch({ type: DOC_ACTIONS.SET_DOC, payload: response.data })
        )
        .catch((error) => console.log(error));
    };

    if (user) {
      getDocs();
    }
  }, [user, dispatch]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Expiry Date</TableCell>
            <TableCell sx={{ minWidth: "85px" }}>Status</TableCell>
            <TableCell>Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {docs && docs.map((doc) => <DocRow key={doc._id} doc={doc} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
