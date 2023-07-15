import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { TableCell, TableRow, Box, IconButton } from "@mui/material";
import { Delete, OpenInNew } from "@mui/icons-material";
import DocStatus from "./DocStatus";
import DocEdit from "./DocEdit";
import DocDel from "./DocDel";

/*
TODO
  Expansion
    make link to document work
    make status editable in mainbox view
*/

export default function DocRow({ doc }) {
  return (
    <TableRow key={doc._id}>
      <TableCell>
        <Box sx={{ textTransform: "capitalize" }}>{doc.docName}</Box>
      </TableCell>
      <TableCell>
        {formatDistanceToNow(new Date(doc.expirationDate), { addSuffix: true })}
        {/* {doc.expirationDate} */}
      </TableCell>
      <TableCell>
        <DocStatus status={doc.status} />
      </TableCell>
      <TableCell>
        <DocEdit doc={doc} />
        <DocDel doc={doc} />
        <IconButton>
          <OpenInNew />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
