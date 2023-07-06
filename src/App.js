import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';

import { Box } from '@mui/material';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<User />} />
      </Routes>
    </Box>
  );
}
