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
  FilterAlt,
  Check,
  Close,
  WarningAmber,
  WorkHistory,
  KeyboardArrowDown,
  KeyboardArrowUp,
  SortByAlpha,
  Sort,
} from "@mui/icons-material";

// components
import DocRow from "./DocRow";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useDocContext } from "../hooks/useDocContext";
import { DOC_ACTIONS } from "../context/DocContext";
import { DOC_STATUS } from "../context/DocContext";

export default function DocumentTable() {
  const { docs, dispatch } = useDocContext();
  const { user } = useAuthContext();

  // Sort
  const sortResetDefault = () => {
    setSortNameState(0);
    setSortDateState(0);
  };
  const [sortNameState, setSortNameState] = useState(0);
  const handleNameSort = () => {
    // States, asc, dsc, null
    const saveState = sortNameState;
    sortResetDefault();
    switch (saveState + 1) {
      case 1:
        dispatch({ type: DOC_ACTIONS.SORT_ALPHABET_ASC });
        break;
      case 2:
        dispatch({ type: DOC_ACTIONS.SORT_ALPHABET_DES });
        break;
      default:
        break;
    }
    setSortNameState(saveState + 1 >= 2 ? 0 : saveState + 1);
  };
  const sortNameIcon = () => {
    switch (sortNameState) {
      case 1:
        return <KeyboardArrowUp />;
      case 2:
        return <KeyboardArrowDown />;
      default:
        return <SortByAlpha />;
    }
  };

  const [sortDateState, setSortDateState] = useState(0);
  const handleDateSort = () => {
    // States, asc, dsc, null
    const saveState = sortDateState;
    sortResetDefault();
    switch (saveState + 1) {
      case 1:
        dispatch({ type: DOC_ACTIONS.SORT_DATE_DES_NULL });
        break;
      case 2:
        break;
      default:
        dispatch({ type: DOC_ACTIONS.SORT_DATE_ASC_NULL });
        break;
    }
    console.log(saveState + 1);
    setSortDateState(saveState + 1 >= 2 ? 0 : saveState + 1);
  };
  const sortDateIcon = () => {
    switch (sortDateState) {
      case 1:
        return <KeyboardArrowDown />;
      case 2:
        return <Sort />;
      default:
        return <KeyboardArrowUp />;
    }
  };

  // Filter
  const [filterState, setFilterState] = useState(0);
  const handleClickFilter = () => {
    console.log(filterState + 1);
    setFilterState(filterState + 1 >= 5 ? 0 : filterState + 1);
  };

  const filterDocuments = (docs, filterState) => {
    switch (filterState) {
      // FILTER
      case 1:
        return docs.map((d) => {
          d.status === DOC_STATUS.OKAY ? (d.display = 1) : (d.display = 0);
          return d;
        });
      case 2:
        return docs.map((d) => {
          d.status === DOC_STATUS.ONGOING ? (d.display = 1) : (d.display = 0);
          return d;
        });
      case 3:
        return docs.map((d) => {
          d.status === DOC_STATUS.EXPIRING ? (d.display = 1) : (d.display = 0);
          return d;
        });
      case 4:
        return docs.map((d) => {
          d.status === DOC_STATUS.EXPIRED ? (d.display = 1) : (d.display = 0);
          return d;
        });
      case 5:
        // user input and filter
        return docs.map((d) => {
          d.docName.includes("") ? (d.display = 1) : (d.display = 0);
          return d;
        });
      default:
        // No filter, see everything by default
        return docs.map((d) => {
          d.display = 1;
          return d;
        });
    }
  };

  const filterIcon = (filterState) => {
    switch (filterState) {
      case 1:
        return <Check />;
      case 2:
        return <WorkHistory />;
      case 3:
        return <WarningAmber />;
      case 4:
        return <Close />;
      default:
        return <FilterAlt />;
    }
  };

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
              <TableCell>
                <Button
                  disableElevation
                  disableRipple
                  sx={{ padding: 0, textTransform: "none" }}
                  onClick={handleNameSort}
                  endIcon={sortNameIcon()}
                >
                  Name
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  disableElevation
                  disableRipple
                  sx={{ padding: 0, textTransform: "none" }}
                  onClick={handleDateSort}
                  endIcon={sortDateIcon()}
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
                  endIcon={filterIcon(filterState)}
                >
                  Status
                </Button>
              </TableCell>
              <TableCell>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {docs &&
              filterDocuments(docs, filterState)
                .filter((d) => d.display === 1)
                .map((doc) => <DocRow key={doc._id} doc={doc} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
