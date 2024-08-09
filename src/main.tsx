import { SnackbarProvider } from "notistack";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "@/App";
import { AppThemeProvider } from "@/app/lib/mui/AppThemeProvider";
import store from "@/app/store";

import { Snackbar } from "./shared/ui/Snackbar/Snackbar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <AppThemeProvider>
      <SnackbarProvider
        Components={{
          success: Snackbar,
          error: Snackbar,
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        maxSnack={4}>
        <App />
      </SnackbarProvider>
    </AppThemeProvider>
  </Provider>,
);
