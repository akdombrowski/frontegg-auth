import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { FronteggProvider } from "@frontegg/react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";

const contextOptions = {
  // baseUrl: "https://app-im1t98vsyk5p.frontegg.com",
  baseUrl: import.meta.env.VITE_BASE_URL,
  clientId: import.meta.env.VITE_CLIENT_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const authOptions = {
  keepSessionAlive: true,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FronteggProvider
      contextOptions={contextOptions}
      hostedLoginBox={true}
      authOptions={authOptions}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App />
      </ThemeProvider>
    </FronteggProvider>
  </StrictMode>,
);
