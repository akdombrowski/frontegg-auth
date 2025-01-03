import { useLoginWithRedirect, useAuth } from "@frontegg/react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useTheme } from "@mui/material/styles";

import Home from "@/Home";

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  const theme = useTheme();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     loginWithRedirect();
  //   } else {
  //     console.log(user);
  //   }
  // }, [isAuthenticated]);

  return (
    <Container
      maxWidth={false}
      sx={{ backgroundColor: "#000", height: "100vh", py: "1.5rem" }}
    >
      {user && isAuthenticated ?
        <Home user={user} isAuthenticated={isAuthenticated} />
      : <Stack
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
      }
    </Container>
  );
}

export default App;
