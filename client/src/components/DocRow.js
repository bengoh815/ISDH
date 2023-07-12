import formatDistanceToNow from "date-fns/formatDistanceToNow";

import Status from "./Status";

import { TableCell, TableRow } from "@mui/material";
import { OpenInNew } from "@mui/icons-material";

/*
TODO
  Expansion make link to document work
*/

export default function DocRow({ doc }) {
  return (
    <TableRow key={doc._id}>
      <TableCell>{doc.docName}</TableCell>
      <TableCell>
        {formatDistanceToNow(new Date(doc.expirationDate), { addSuffix: true })}
        {/* {doc.expirationDate} */}
      </TableCell>
      <TableCell>
        <Status />
      </TableCell>
      <TableCell>
        <OpenInNew />
      </TableCell>
    </TableRow>
  );
}
