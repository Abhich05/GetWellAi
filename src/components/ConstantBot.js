import React from 'react';
import { Fab, Tooltip, Box } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';

export default function ConstantBot() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Box sx={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1200 }}>
        <Tooltip title="Chat with ConstantBot" placement="left">
          <Fab color="secondary" aria-label="constantbot" onClick={() => setOpen(!open)}>
            <SmartToyIcon />
          </Fab>
        </Tooltip>
      </Box>
      {/* You can add a chat window/modal here if needed */}
    </>
  );
}
