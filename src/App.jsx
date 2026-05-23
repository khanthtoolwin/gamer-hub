import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import { Outlet } from "react-router-dom";
import AppContext from "./context/AppContext";

const ThemedApp = () => {
  return (
    <AppContext.Provider value={{ mode: "dark" }}>
      <App />
    </AppContext.Provider>
  );
};

const App = () => {
  return (
    <main className="App">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default ThemedApp;
