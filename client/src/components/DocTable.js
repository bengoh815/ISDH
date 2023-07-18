// npm
import { useEffect, useState } from "react";
import axios from "axios";

// mui
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  KeyboardDoubleArrowDown,
  KeyboardDoubleArrowUp,
} from "@mui/icons-material";

// components
import DocRow from "./DocRow";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useDocContext } from "../hooks/useDocContext";
import { DOC_ACTIONS } from "../context/DocContext";

export default function DocumentTable() {
  const { docs, dispatch } = useDocContext();
  const { user } = useAuthContext();

  const [sortState, setSortState] = useState(0);
  const handleClickSort = () => {
    switch (sortState + 1) {
      case 1:
        dispatch({ type: DOC_ACTIONS.DATE_SORT_DES });
        break;
      case 2:
        dispatch({ type: DOC_ACTIONS.DATE_SORT_ASC_NULL });
        break;
      case 3:
        dispatch({ type: DOC_ACTIONS.DATE_SORT_DES_NULL });
        break;
      default:
        dispatch({ type: DOC_ACTIONS.DATE_SORT_ASC });
        break;
    }
    setSortState(sortState + 1 >= 4 ? 0 : sortState + 1);
  };
  const icon = (s) => {
    switch (s) {
      case 1:
        return <KeyboardArrowDown />;
      case 2:
        return <KeyboardDoubleArrowUp />;
      case 3:
        return <KeyboardDoubleArrowDown />;
      default:
        return <KeyboardArrowUp />;
    }
  };

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
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>
                <Button
                  disableElevation
                  disableRipple
                  sx={{ padding: 0, textTransform: "none" }}
                  onClick={handleClickSort}
                  endIcon={icon(sortState)}
                >
                  Expiry Date
                </Button>
              </TableCell>
              <TableCell sx={{ minWidth: "85px" }}>Status</TableCell>
              <TableCell>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {docs && docs.map((doc) => <DocRow key={doc._id} doc={doc} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
