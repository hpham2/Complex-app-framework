import Drawer from "@mui/material/Drawer";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ShortDetail } from "./ShortDetail";
import { LongDetail } from "./LongDetail";

export const enum drawerOptions {
  ShortDetails = "/short-detail",
  LongDetails = "/long-detail",
}

const DetailsDrawer = () => {
  const location = useLocation();
  const [toggleDrawer, setToggleDrawer] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("drawer")) {
      setToggleDrawer(true);
    } else {
      setToggleDrawer(false);
    }
  }, [location.pathname]);

  return (
    <Drawer
      anchor={"right"}
      open={toggleDrawer}
      onClose={() => setToggleDrawer(false)}
    >
      <Routes>
        <Route
          path={`/:prefix/drawer${drawerOptions.ShortDetails}/:drawerId`}
          element={<ShortDetail />}
        />
        <Route
          path={`/:prefix/drawer${drawerOptions.LongDetails}/:drawerId`}
          element={<LongDetail />}
        />
      </Routes>
    </Drawer>
  );
};

export default DetailsDrawer;
