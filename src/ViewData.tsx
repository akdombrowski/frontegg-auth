import { useState } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";

import type { User } from "@frontegg/redux-store";
import ViewDetailsBtn from "./ViewDetailsBtn";

function ViewData({
  user,
  maxHeight,
  xpandBtnTxt,
  label,
  data,
}: {
  user: User;
  maxHeight: number | string;
  xpandBtnTxt: string;
  label: string;
  data: string;
}) {
  const [viewData, setViewData] = useState(false);
  const expandView = () => setViewData((viewUser) => !viewUser);

  if (user) {
    return (
      <Grid
        size={12}
        container
        spacing={0}
        justifyContent="flex-start"
      >
        <Grid size={12}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
          >
            {label}:
          </Typography>
        </Grid>

        {viewData && (
          <Grid
            size={12}
            display="flex"
            justifyContent="center"
            maxHeight={maxHeight}
          >
            <Paper
              elevation={5}
              sx={{
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 0,
                width: "100%",
                maxHeight: "100%",
              }}
            >
              <Typography
                variant="body1"
                overflow="auto"
                whiteSpace="pre-wrap"
                color="#fff"
                sx={{
                  overflowWrap: "anywhere",
                  height: "100%",
                }}
              >
                {data}
              </Typography>
            </Paper>
          </Grid>
        )}
        <Grid size={12}>
          <ViewDetailsBtn
            btnTxt={xpandBtnTxt}
            onClick={expandView}
          />
        </Grid>
      </Grid>
    );
  }

  return <></>;
}

export default ViewData;
