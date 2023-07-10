import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Status from "./Status";
import { OpenInNew } from "@mui/icons-material";

export default function DocumentTable() {
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
          <TableRow>
            <TableCell>House Lease</TableCell>
            <TableCell>Expiry Date</TableCell>
            <TableCell>
              <Status />
            </TableCell>
            <TableCell>
              <OpenInNew />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
