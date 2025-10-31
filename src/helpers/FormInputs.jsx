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
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
const ariaLabel = { "aria-label": "description" };
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Editor } from "primereact/editor";
import { InputTextarea } from "primereact/inputtextarea";
import Calender from "../assets/icons/calendar.png";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export const GroupField = ({}) => {
  const rows = [createData("Lorem ip - Apparel", 1, '$12.50', '$12.50')];
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

export const TextAreaField = ({
  name,
  label,
  placeholder,
  value,
  handleChange,
}) => {
  // const [text, setText] = useState('');

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
          {label}
        </Typography>
      </Box>
      <Box
        sx={{
          border: "1px solid #D1D5DB",
          // height: "6.875rem",
          borderRadius: "8px",
        }}
      >
        <Editor
          value={value || ""}
          onTextChange={(e) =>
            handleChange({
              target: { name, value: e.htmlValue },
            })
          }
          placeholder={placeholder}
          style={{ minHeight: "8.875rem" }}
        />
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
  placeholder,
  lineHeight,
}) => {
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
        }}
      >
        <Box sx={{ minWidth: "23.25rem" }}>
          <FormControl fullWidth>
            {/* <Select
            name={name}
            value={value}
            onChange={handleChange}
            >
              <MenuItem value="" disabled>
              {placeholder}
            </MenuItem>
             {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
            </Select> */}
            <Select
              name={name}
              value={value ?? ""}
              onChange={handleChange}
              displayEmpty
              sx={{
                height: "3.125rem",
                fontFamily: "Nunito",
                fontSize: "1rem",
                color: "#111827",
              }}
            >
              <MenuItem value="">{placeholder}</MenuItem>

              {options.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export const MultiLineText = ({ label, name, value, handleChange }) => {
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
          display: "flex",
        }}
      >
        <Box
          sx={{
            border: "1px solid #D1D5DB",
            borderRadius: "8px",
            minWidth: "23.25rem",
          }}
        >
          <InputTextarea
            autoResize
            name={name}
            value={value}
            onChange={handleChange}
            rows={5}
            cols={30}
            style={{
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export const DateFieldSelecter = ({
  label,
  name,
  value,
  handleChange,
  placeholder,
  lineHeight,
}) => {
    const handleDateChange = (date) => {
    if (handleChange) {
      handleChange({
        target: {
          name,
          value: date,
        },
      });
    }
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
          border: "1px solid #D1D5DB",
          borderRadius: "8px",
          color: "#111827",
          background: "none",
          height: "3.125rem",
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
        }}
      >
        <Box sx={{ position: "relative", width: "100%" }}>
          <DatePicker
           selected={value || null} 
            name={name}
            // value={value}
            onChange={handleDateChange}
            placeholderText={placeholder}
            dateFormat="dd/MM/yyyy"
            className="custom-datepicker"
          />
          
          <Box
            component="img"
            src={Calender}
            alt="calendar icon"
            sx={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "20px",
              height: "20px",
              pointerEvents: "none",
            }}
          />
        </Box>
      </Box>

      <style>{`
        .custom-datepicker {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          background: transparent;
          font-family: Nunito, sans-serif;
          font-size: 1rem;
          color: #111827;
        }

        .react-datepicker-wrapper {
          width: 100%;
        }

        .react-datepicker__input-container input {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          background: transparent;
          font-family: Nunito, sans-serif;
          font-size: 1rem;
          color: #111827;
        }
      `}</style>
    </Box>
  );
};
