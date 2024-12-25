import { useLoginWithRedirect, useAuth } from "@frontegg/react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useTheme } from "@mui/material/styles";

function OAuthCallback() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  const theme = useTheme();

  console.log();
  console.log("callback.tsx");
  console.log("new URL(import.meta.url):", new URL(import.meta.url));
  console.log("new URL(import.meta.url).origin:", new URL(import.meta.url).origin);
  console.log("import.meta.url:", import.meta.url);
  console.log("home url:", new URL("home", import.meta.url).href);
  console.log();
  console.log("callback.tsx");

  if (user && isAuthenticated) {
    window.location.href = new URL("home", import.meta.url).href;
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

export default OAuthCallback;
