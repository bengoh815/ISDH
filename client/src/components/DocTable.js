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
} from "@mui/icons-material";

// components
import DocRow from "./DocRow";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useDocContext } from "../hooks/useDocContext";
import { DOC_ACTIONS } from "../context/DocContext";
import { DOC_STATUS } from "../components/DocStatus";

export default function DocumentTable() {
  const { docs, dispatch } = useDocContext();
  const { user } = useAuthContext();

  const binaryIcon = (s) => {
    switch (s) {
      case 1:
        return <KeyboardArrowDown />;
      default:
        return <KeyboardArrowUp />;
    }
  };

  const [sortState, setSortState] = useState(0);
  const handleClickSort = () => {
    switch (sortState + 1) {
      case 1:
        dispatch({ type: DOC_ACTIONS.SORT_DATE_DES_NULL });
        break;
      default:
        dispatch({ type: DOC_ACTIONS.SORT_DATE_ASC_NULL });
        break;
    }
    setSortState(sortState + 1 >= 2 ? 0 : sortState + 1);
  };

  const [filterState, setFilterState] = useState(0);
  const handleClickFilter = () => {
    setFilterState(filterState + 1 >= 5 ? 0 : filterState + 1);
  };

  const filterDocuments = (docs, filterState) => {

    switch (filterState) {
      // FILTER
      case 1:
        return docs.map((d) => {
          d.status === DOC_STATUS.OKAY ? d.display = 1 : d.display = 0;
          return d;
        });
      case 2:
        return docs.map((d) => {
          d.status === DOC_STATUS.ONGOING ? d.display = 1 : d.display = 0;
          return d;
        });
      case 3:
        return docs.map((d) => {
          d.status === DOC_STATUS.EXPIRING ? d.display = 1 : d.display = 0;
          return d;
        });
      case 4:
        return docs.map((d) => {
          d.status === DOC_STATUS.EXPIRED ? d.display = 1 : d.display = 0;
          return d;
        });
      case 5:
        // DOC_ACTIONS.FILTER_USER
        break;
      default:
        // DOC_ACTIONS.FILTER_NULL
        return docs.map(d => {
          d.display = 1;
          return d;
        });
    }
  }

  useEffect(() => {
    const getDocs = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${user.jwtToken}`,
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
                  endIcon={binaryIcon(sortState)}
                >
                  Expiry Date
                </Button>
              </TableCell>
              <TableCell sx={{ minWidth: "85px" }}>
                <Button
                    disableElevation
                    disableRipple
                    sx={{ padding: 0, textTransform: "none" }}
                    onClick={handleClickFilter}
                    endIcon={binaryIcon(filterState)}
                  >
                  Status
                </Button>
              </TableCell>
              <TableCell>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {docs && filterDocuments(docs, filterState).filter((d) => d.display === 1)
              .map((doc) => <DocRow key={doc._id} doc={doc} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
