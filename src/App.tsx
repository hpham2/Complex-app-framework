import React from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Analytics from "./pages/analytics/Analytics";
import Dashboard from "./pages/dashboard/Dashboard";
import Management from "./pages/management/Management";
import { MainRoutes } from "./routes";
import { MenuItem } from "./components/menu-item/MenuItem";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <nav className="menuWrapper">
        <ul style={{ paddingLeft: "0px" }}>
          <MenuItem
            labelText="Dashboard"
            onClick={() => navigate(MainRoutes.dashboard)}
          />
          <MenuItem
            labelText="Analytics"
            onClick={() => navigate(MainRoutes.analytics)}
          />
          <MenuItem
            labelText="Management"
            onClick={() => navigate(MainRoutes.management)}
          />
        </ul>
      </nav>

      <div className="mainContent">
        <Routes>
          <Route path={MainRoutes.dashboard} element={<Dashboard />} />
          <Route path={MainRoutes.analytics} element={<Analytics />} />
          <Route path={MainRoutes.management} element={<Management />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
