import { useLoginWithRedirect, ContextHolder, useAuthUser, AdminPortal } from "@frontegg/react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import { useTheme, alpha } from "@mui/material/styles";

import ViewData from "@/ViewData";

function App() {
  // const { user, isAuthenticated } = useAuth();
  const user = useAuthUser();
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

        {/* if user has logged in */}
        {user ?
          <Grid
            id="userIsAuthn-Grid"
            size={12}
            container
            justifyContent="center"
            spacing={1}
            height="100%"
          >
            <Grid
              size={12}
              container
              justifyContent="space-between"
              spacing={3}
            >
              <Grid
                size="auto"
                container
                spacing={1}
                justifyContent="flex-start"
                flexGrow={1}
                flexShrink={0}
              >
                <Grid
                  size="auto"
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="stretch"
                >
                  <Avatar
                    variant="rounded"
                    alt="user name"
                    src={user.profilePictureUrl ?? "https://ibb.co/MgBTVxJ"}
                    sx={{ width: "1.75rem", height: "1.75rem" }}
                  />
                </Grid>

                <Grid
                  size="auto"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="stretch"
                >
                  <Typography
                    variant="h5"
                    color={theme.palette.success.light}
                    fontWeight={600}
                  >
                    {user.name}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                size="auto"
                container
                spacing={2}
                justifyContent="flex-start"
                flexGrow={1}
                flexShrink={0}
              >
                <Grid
                  size={6}
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="stretch"
                  flexGrow={1}
                  flexShrink={0}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => AdminPortal.openHosted()}
                  >
                    <Typography
                      variant="subtitle1"
                      color={theme.palette.primary.dark}
                      fontWeight={600}
                      textAlign="center"
                      textTransform="capitalize"
                    >
                      Launch Portal
                    </Typography>
                  </Button>
                </Grid>
                <Grid
                  size="auto"
                  display="flex"
                  justifyContent="flex-end"
                  flexGrow={0}
                  flexShrink={1}
                >
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: alpha(theme.palette.warning.dark, 0.5),
                      borderWidth: "1px",
                      borderColor: "orange",
                      borderStyle: "solid",
                      color: "white",
                      fontWeight: 600,
                    }}
                    onClick={() => logout()}
                  >
                    Log Off
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              id="innerContainer"
              container
              size={12}
              spacing={1}
            >
              <Grid
                size={12}
                display="flex"
                justifyContent="flex-start"
                alignItems="baseline"
                container
                spacing={1}
              >
                <Grid
                  size="auto"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="baseline"
                >
                  <Typography color="secondary.light">email:</Typography>
                </Grid>
                <Grid
                  size="auto"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="baseline"
                >
                  <Typography variant="body1">{user.email}</Typography>
                </Grid>
              </Grid>
              <Grid
                size={12}
                container
                spacing={0}
                display="flex"
                justifyContent="flex-start"
              >
                <ViewData
                  user={user}
                  maxHeight="10rem"
                  label="user object"
                  xpandBtnTxt="Show User Data"
                  data={JSON.stringify(user, null, 2)}
                />
              </Grid>
            </Grid>
            <Grid
              size={12}
              container
              spacing={1}
              // maxHeight="5rem"
            >
              <ViewData
                user={user}
                maxHeight="5rem"
                label="access token"
                xpandBtnTxt="Show Access Token"
                data={user.accessToken}
              />
            </Grid>
          </Grid>
        : <Grid container>
            <Grid size={6}>
              <Button
                variant="contained"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </Button>
            </Grid>
          </Grid>
        }
      </Stack>
    </Container>
  );
}

export default App;
