import { ThemeProvider } from "styled-components";
import "./App.css";
import Reeco from "./components/Reeco";

const typography = {
  fontSizes: ["12px", "14px", "16px", "20px", "24px", "34px"],
  fontWeight: ["normal", "medium"],
  letterSpacing: ["0.4px", "0.1px", "1.25px", "0.25px", "0.5px"],
  colors: ["#000", "#d1d1d1"],
};

const App = () => (
  <ThemeProvider theme={{ typography: typography }}>
    <Reeco />
  </ThemeProvider>
);

export default App;
