import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const SectionTitle = ({ title, colored, sx }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "34px",
          fontWeight: "bold",
          textAlign: 'center',
          ...sx
        }}
      >
        {title}{' '}
        {colored && <span style={{ color: "#7AB259" }}>{colored}</span>}
      </Typography>
    </Box>
  );
};

export default SectionTitle;