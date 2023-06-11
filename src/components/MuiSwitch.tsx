import { Box, FormControlLabel, FormGroup, FormLabel, Stack, Switch } from "@mui/material";
import React, { useState } from "react";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Stack direction="column" spacing={4}>
      <Box>
        <FormControlLabel
          label="Dark Mode"
          control={<Switch checked={checked} onChange={handleChange} />}
        ></FormControlLabel>
      </Box>
      <Box>
        <FormLabel>ON/OFF</FormLabel>
        <FormGroup row>
        <FormControlLabel
          label="Lights"
          control={<Switch checked={checked} onChange={handleChange} />}
        ></FormControlLabel>
        <FormControlLabel
          label="Gas"
          control={<Switch checked={checked} onChange={handleChange} />}
        ></FormControlLabel>
        <FormControlLabel
          label="Outlets"
          control={<Switch checked={checked} onChange={handleChange} />}
        ></FormControlLabel>
        </FormGroup>
      </Box>
    </Stack>
  );
};

export default MuiSwitch;
