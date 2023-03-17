import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "floor", label: "Floor", minWidth: 150 },
  { id: "energy_consumption", label: "Energy\u00a0Consumption", minWidth: 100 },
  {
    id: "cost",
    label: "Cost",
    minWidth: 100,
  },
  {
    id: "occupancy",
    label: "Occupancy",
    minWidth: 100,
  },
];

const rows = [
  {
    floor: "SOB Floor 1",
    energy_consumption: "180 Kwh",
    cost: "$1400",
    occupancy: "80%",
  },
  {
    floor: "SOSS Floor 1",
    energy_consumption: "180 Kwh",
    cost: "$1304",
    occupancy: "60%",
  },
  {
    floor: "SOE Floor 1",
    energy_consumption: "180 Kwh",
    cost: "$1230",
    occupancy: "70%",
  },
  {
    floor: "SOE Floor 1",
    energy_consumption: "180 Kwh",
    cost: "$1950",
    occupancy: "80%",
  },
  {
    floor: "LKS Floor 1",
    energy_consumption: "180 Kwh",
    cost: "$1900",
    occupancy: "80%",
  },
  {
    floor: "SOE Floor 2",
    energy_consumption: "180 Kwh",
    cost: "$1400",
    occupancy: "50%",
  },
  {
    floor: "LKS Floor 1",
    energy_consumption: "180 Kwh",
    cost: "$1500",
    occupancy: "30%",
  },
  {
    floor: "KGC Floor 1",
    energy_consumption: "180 Kwh",
    cost: "$1234",
    occupancy: "80%",
  },
];

export default function FloorBreakdownTable() {
  //   const [page, setPage] = React.useState(0);
  //   const [rowsPerPage, setRowsPerPage] = React.useState(10);

  //   const handleChangePage = (event, newPage) => {
  //     setPage(newPage);
  //   };

  //   const handleChangeRowsPerPage = (event) => {
  //     setRowsPerPage(+event.target.value);
  //     setPage(0);
  //   };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }} className="h-full">
      <TableContainer sx={{ maxHeight: "100%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <span className="font-bold text-gray-600">
                    {column.label}
                  </span>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              //   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        // rowsPerPage={rowsPerPage}
        // page={page}
        // onPageChange={handleChangePage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}
