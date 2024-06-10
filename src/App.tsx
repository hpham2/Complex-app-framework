import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analytics from "./pages/analytics/Analytics";
import Dashboard from "./pages/dashboard/Dashboard";
import Management from "./pages/management/Management";
import { MainRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={MainRoutes.dashboard} element={<Dashboard />} />
          <Route path={MainRoutes.analytics} element={<Analytics />} />
          <Route path={MainRoutes.management} element={<Management />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
