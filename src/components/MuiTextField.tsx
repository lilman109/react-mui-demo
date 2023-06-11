import React, { useState } from "react";
import { Stack } from "@mui/system";
import { InputAdornment, InputBase, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Outlined" variant="outlined" />
        <TextField label="Filled" variant="filled" />
        <TextField label="Standard" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small Secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Do not share your password with anyone"}
        />
        <TextField
          label="Password"
          type="password"
          required
          helperText="Do not share your passsword with anyone"
          disabled
        />
        <TextField label="Read-only" InputProps={{ readOnly: true }} required />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">lbs.</InputAdornment>,
          }}
        />
        <TextField
          label="Password"
          type="password"
          required
          helperText="Do not share your passsword with anyone"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityIcon
                  sx={{
                    cursor: "pointer",
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
