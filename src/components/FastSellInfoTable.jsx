import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import React from "react";
import TodayTradeData from "../data/TodayTrade";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgb(200 16 158)",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function FastSellInfoTable() {
  return (
    <Box
      sx={{
        background: "#f5f5f5",
        padding: "20px",
        margin: "20px 0px",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "rgb(200 16 158)", margin: "20px 0px" }}
      >
        Ko'p sotiladigan ovqatlar
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Ovqat nomi</StyledTableCell>
              <StyledTableCell align="right">Narxi</StyledTableCell>
              <StyledTableCell align="center">Qancha (dona)</StyledTableCell>
              <StyledTableCell align="right">Jami:</StyledTableCell>
              <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {TodayTradeData[0].fastSell.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                <StyledTableCell align="center">{row.quantity}</StyledTableCell>
                <StyledTableCell align="right">{row.total}</StyledTableCell>
                <StyledTableCell align="right">
                  <Box
                    component={"img"}
                    width={50}
                    height={50}
                    src={row.productImg}
                  ></Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default FastSellInfoTable;
