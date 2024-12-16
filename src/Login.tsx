// import { useState } from 'react'
import { useAuth, useLoginWithRedirect, ContextHolder } from "@frontegg/react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";

function Login() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  return (
    <>
      <Container maxWidth={false}>
        <Stack>
          <Typography variant="h1">Business Co.</Typography>
        </Stack>
        <Grid container>
          <Grid size={6}>
            {isAuthenticated ?
              <div>
                <div>
                  <img
                    src={user?.profilePictureUrl ?? "https://ibb.co/MgBTVxJ"}
                    alt={user?.name}
                  />
                </div>
                <div>
                  <span>Logged in as: {user?.name}</span>
                </div>
                {user?.accessToken && (
                  <div>
                    <button onClick={() => alert(user.accessToken)}>
                      What is my access token?
                    </button>
                  </div>
                )}
                <div>
                  <button onClick={() => logout()}>Click to logout</button>
                </div>
              </div>
            : <div>
                <button onClick={() => loginWithRedirect()}>Click me to login</button>
              </div>
            }
          </Grid>
          <Grid size={6}></Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Login;
