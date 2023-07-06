import React from 'react';

import Shimmer from 'react-shimmer-effect';
import { Stack } from '@mui/material';

export default function ShimmerCard() {
  return (
    <Stack
      justifyContent="flex-start"
      alignItems="center"
      m="30px 10px"
      spacing={2}
      gap={4}
      direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row' }}
      flexWrap="wrap"
    >
      <div className="container">
        <Shimmer>
          <div className="thumbnail" />

          <div className="line1" />
          <div className="line2" />
        </Shimmer>
      </div>
    </Stack>
  );
}
