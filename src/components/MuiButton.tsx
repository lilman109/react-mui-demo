import {
  Button,
  Stack,
  Typography,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcons from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import FormatUnderlined from "@mui/icons-material/FormatUnderlined";
import FormatBold from "@mui/icons-material/FormatBold";
import { useState } from "react";

const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([]);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[] // FOR: not exclusive toggel button group
    /* updatedFormats: string | null FOR: exclusive toggle button group */
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="column">
        <Stack spacing={2} direction="row" alignItems="center">
          <Typography align="left" width={75}>
            Text
          </Typography>
          <Button variant="text" color="primary">
            Primary
          </Button>
          <Button variant="text" color="secondary">
            secondary
          </Button>
          <Button variant="text" color="error">
            Error
          </Button>
          <Button variant="text" color="warning">
            Warning
          </Button>
          <Button variant="text" color="info">
            Info
          </Button>
          <Button variant="text" color="success">
            Success
          </Button>
        </Stack>
        <Stack spacing={2} direction="row" alignItems="center">
          <Typography width={75} align="left">
            Contained
          </Typography>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            secondary
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
        </Stack>
        <Stack spacing={2} direction="row" alignItems="center">
          <Typography width={75} align="left">
            Outlined
          </Typography>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            secondary
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <Button variant="outlined" color="warning">
            Warning
          </Button>
          <Button variant="outlined" color="info">
            Info
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
        </Stack>
        <Stack spacing={2} direction="row" alignItems="center">
          <Typography width={75} align="left">
            Size
          </Typography>
          <Button variant="contained" size="small">
            SMALL
          </Button>
          <Button variant="contained" size="medium">
            MEDIUM
          </Button>
          <Button variant="contained" size="large">
            LARGE
          </Button>
        </Stack>
        <Stack spacing={2} direction="row" alignItems="center">
          <Typography width={75} align="left">
            Icon
          </Typography>
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            disableRipple
            onClick={() => alert("clicked")}
          >
            Send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />} disableElevation>
            Send
          </Button>
          <IconButton color="success" size="small">
            <SendIcon />
          </IconButton>
        </Stack>
        <Stack direction="row" alignItems="center">
          <ButtonGroup
            variant="contained"
            orientation="vertical"
            color="secondary"
            size="small"
            aria-label="alignment button group"
          >
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
        <Stack direction="row" alignItems="center">
          <ToggleButtonGroup
            aria-label="toggle button group"
            value={formats}
            onChange={handleFormatChange}
            size="small"
            orientation="vertical"
            color="success"
            /* exclusive FOR: can only pick one */
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBold />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="bold">
              <FormatItalic />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="bold">
              <FormatUnderlined />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
