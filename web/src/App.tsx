import { Outlet } from "react-router-dom";
import "./App.css";
import { AppFooter, AppHeader } from "./components";

function App() {
  return (
    <div className="main_block">
      <AppHeader />
      <div className="bg_hidden_layer" />
      <Outlet />
      <AppFooter />
    </div>
  );
}

export default App;
