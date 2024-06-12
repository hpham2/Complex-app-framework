import Drawer from "@mui/material/Drawer";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ShortDetail } from "./ShortDetail";
import { LongDetail } from "./LongDetail";
import { useDrawer } from "./useDrawer";
import { CloseIcon } from "../components/icons/CloseIcon";
import "./DetailsDrawer.css";
import { BackIcon } from "../components/icons/BackIcon";

export const enum drawerOptions {
  ShortDetails = "/short-detail",
  LongDetails = "/long-detail",
}

const DetailsDrawer = () => {
  const { goBack } = useDrawer();
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
      ModalProps={{
        sx: {
          ".MuiBackdrop-root": {
            backgroundColor: "transparent",
          },
        },
      }}
      onClose={() => setToggleDrawer(false)}
    >
      <div className="drawerWrapper">
        <div className="buttonWrapper">
          <BackIcon onClick={() => goBack()} />
          <CloseIcon onClick={() => setToggleDrawer(false)} />
        </div>
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
      </div>
    </Drawer>
  );
};

export default DetailsDrawer;
