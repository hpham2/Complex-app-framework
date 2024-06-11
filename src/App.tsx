import React from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Management from "./pages/management/Management";
import { MainRoutes } from "./routes";
import { MenuItem } from "./components/menu-item/MenuItem";
import { Page } from "./constant";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <nav className="menuWrapper">
        <ul style={{ paddingLeft: "0px" }}>
          <MenuItem
            labelText={Page.Dashboard}
            onClick={() => navigate(MainRoutes.dashboard)}
          />
          <MenuItem
            labelText={Page.Management}
            onClick={() => navigate(MainRoutes.management)}
          />
        </ul>
      </nav>

      <div className="mainContent">
        <Routes>
          <Route path={MainRoutes.dashboard} element={<Dashboard />} />
          <Route path={MainRoutes.management} element={<Management />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
