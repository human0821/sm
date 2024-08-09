import { CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

import { setBodyWebpClass } from "@/app/lib/webp";
import { getRouter } from "@/app/routes/router";
import { GlobalStyle } from "@/app/styles/global";

import "@/shared/utils/dayjs";
dayjs.locale("ru");

const App = () => {
  setBodyWebpClass();
  const { router } = getRouter();

  return (
    <HelmetProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <RouterProvider router={router} />
      </LocalizationProvider>
      <Helmet defaultTitle="Созвездие мебели" titleTemplate="%s" />
      <CssBaseline />
      <GlobalStyle />
    </HelmetProvider>
  );
};

export default App;
