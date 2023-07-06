import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Box, Grid, Stack } from '@mui/material';
import UserCard from '../components/UserCard';
import { Audio } from 'react-loader-spinner';
import ShimmerCard from '../components/ShimmerCard';

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      // Fetch users data from the API
      fetch('https://reqres.in/api/users?page=1')
        .then(function (response) {
          return response.json();
        })
        .then((data) => {
          console.log(data.data);
          setUsers(data.data);
        });
    };

    // Fetch users after 5 seconds
    setTimeout(() => {
      getUsers();
    }, 5000);
  }, []);

  // Show shimmer card if users data is not available yet
  if (users.length === 0) {
    return (
      <>
        <ShimmerCard />
      </>
    );
  } else {
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
        {/* Render UserCard for each user */}
        {users.map((user) => {
          return (
            <Box justifyContent="flex-start" m="10px" key={user.id}>
              <UserCard user={user} />
            </Box>
          );
        })}
      </Stack>
    );
  }
}
