import { useLoginWithRedirect, ContextHolder, useAuth } from "@frontegg/react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useTheme } from "@mui/material/styles";

function App() {
  const { user, isAuthenticated } = useAuth();
  // const user = useAuthUser();
  const loginWithRedirect = useLoginWithRedirect();
  const theme = useTheme();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     loginWithRedirect();
  //   } else {
  //     console.log(user);
  //   }
  // }, [isAuthenticated]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  if (user && isAuthenticated) {
    window.location.href = new URL("/home", import.meta.url).href;
  } else {
    return (
      <Container
        maxWidth={false}
        sx={{ backgroundColor: "#000", height: "100vh" }}
      >
        <Stack
          direction="column"
          overflow="hidden"
          spacing={1}
          useFlexGap
          sx={{
            justifyContent: "flex-start",
            alignItems: "stretch",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            color={theme.title.primary}
          >
            Business Co.
          </Typography>

          <Grid container>
            <Grid size={6}>
              <Button
                variant="contained"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    );
  }
}

export default App;
