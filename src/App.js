import "./App.css";
import Homescreen from "views/homescreen/Homescreen";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Homescreen />
    </ThemeProvider>
  );
}

export default App;
