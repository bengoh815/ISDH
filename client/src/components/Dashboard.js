import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Status from "./Status";
import { OpenInNew } from "@mui/icons-material";

export default function Dashboard() {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Expiry Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Document</TableCell>
            <TableCell>Type</TableCell>
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
    </>
  );
}
