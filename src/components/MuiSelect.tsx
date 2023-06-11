import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MuiSelect = () => {
  /* const [country, setCountry] = useState(""); */
  /* const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { */
  /*   setCountry(event.target.value as string); */
  /* }; */

  const [countries, setCountries] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      {/* <TextField */}
      {/*   label="Select country" */}
      {/*   select */}
      {/*   value={country} */}
      {/*   onChange={handleChange} */}
      {/*   fullWidth */}
      {/* > */}
      {/*   <MenuItem value="JPN">Japan</MenuItem> */}
      {/*   <MenuItem value="USA">USA</MenuItem> */}
      {/*   <MenuItem value="AU">Australia</MenuItem> */}
      {/* </TextField> */}
      <TextField
        label="Select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select a country"
        error
      >
        <MenuItem value="JPN">Japan</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};
export default MuiSelect;
