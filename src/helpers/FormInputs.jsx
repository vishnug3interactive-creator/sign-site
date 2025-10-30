import {
  Box,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
const ariaLabel = { "aria-label": "description" };
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export const GroupField = ({}) => {
  const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0)];
  return (
    <>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#D1D5DB" }}>
                <TableCell>Name</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Unit Price</TableCell>
                <TableCell align="right">Total Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export const NormalTextField = ({
  label,
  name,
  value,
  handleChange,
  placeholder,
  minLength,
  isNumber = false,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {label && (
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: "1.5rem",
            color: "#4B5563",
            fontFamily: "Nunito",
          }}
        >
          {label}
        </Typography>
      )}

      <Box
        sx={{
          height: "3.125rem",
          background: "none",
          border: "1px solid #D1D5DB",
          borderRadius: "8px",
          color: "#111827",
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
        }}
      >
        <input
          type={isNumber ? "number" : "text"}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          minLength={minLength}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            outline: "none",
            fontSize: "1rem",
            fontFamily: "Nunito",
            color: "#111827",
            background: "transparent",
          }}
        />
      </Box>
    </Box>
  );
};

export const TextAreaField = ({}) => {
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };
  return (
    <>
      <Box>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: "1.5rem",
            color: "#4B5563",
            fontFamily: "Nunito",
          }}
        >
          Description
        </Typography>
      </Box>
      <Box sx={{ border: "1px solid #D1D5DB", height: "6.875rem" ,borderRadius:'8px'}}>
        <ToggleButtonGroup
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton value="color" aria-label="color" disabled>
            <FormatColorFillIcon />
            <ArrowDropDownIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </>
  );
};

export const NormalDropdown = ({
  label,
  name,
  value,
  handleChange,
  options = [],
  placeholder = "Select an option",
  lineHeight,
}) => {
     const [age, setAge] = React.useState('');

  const handleChangeDropdown = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {label && (
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: lineHeight || "1.5rem",
            color: "#4B5563",
            fontFamily: "Nunito",
          }}
        >
          {label}
        </Typography>
      )}

      <Box
        sx={{
          height: "3.125rem",
          background: "none",
          borderRadius: "8px",
          color: "#111827",
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
        }}
      >
    <Box sx={{ minWidth: '23.25rem' }}>
      <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}

        <Select
        //   label="Age"
          onChange={handleChangeDropdown}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    
      </Box>
    </Box>
  );
};
