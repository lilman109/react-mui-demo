import { Button, Stack, Typography, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MuiButton = () => {
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
          <Button variant="contained" startIcon={<SendIcon />} disableRipple onClick={() => alert("clicked")}>
            Send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />} disableElevation>
            Send
          </Button>
          <IconButton color="success" size="small">
            <SendIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
