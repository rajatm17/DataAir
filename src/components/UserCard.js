import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

export default function UserCard({ user }) {
  const { avatar, email, first_name, last_name } = user;
  return (
    <Box>
      <Card sx={{ maxWidth: 345, width: 250 }}>
        <CardActionArea>
          <CardMedia component="img" height="190" image={avatar} alt="avatar" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {first_name} {last_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {email}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
