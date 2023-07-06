import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  // Click handler for home button
  const homeClickHandler = () => {
    navigate('/');
  };

  // Click handler for user button
  const userClickHandler = () => {
    navigate('/users');
  };

  return (
    <Box p="10px" sx={{ backgroundColor: '#F2EAD3' }}>
      {/* Navbar content */}
      <Stack
        direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Logo */}
        <Box
          justifyContent="flex-start"
          alignItems="center"
          onClick={homeClickHandler}
          sx={{ cursor: 'pointer' }}
        >
          <Typography fontWeight="700" color="#3F2305">
            Data Air
          </Typography>
        </Box>

        {/* Navigation buttons */}
        <Stack
          direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
          justifyContent="flex-end"
          alignItems="center"
          gap={1}
        >
          {/* Home button */}
          <button onClick={homeClickHandler} className="nav-btn" type="button">
            Home
          </button>

          {/* User button */}
          <button onClick={userClickHandler} className="nav-btn" type="button">
            Get Users
          </button>
        </Stack>
      </Stack>
    </Box>
  );
}
