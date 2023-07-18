// npm
import formatDistanceToNow from "date-fns/formatDistanceToNow";

// mui
import { TableCell, TableRow, Box, IconButton, Tooltip } from "@mui/material";
import { OpenInNew } from "@mui/icons-material";

// components
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
        {doc.expirationDate === null ? (
          <Tooltip title="Does Not Expire" placement="bottom-start">
            <Box>DNE</Box>
          </Tooltip>
        ) : (
          formatDistanceToNow(new Date(doc.expirationDate), {
            addSuffix: true,
          })
        )}
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
