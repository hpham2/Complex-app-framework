import { useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { drawerOptions } from "./DetailsDrawer";

type UseDrawerReturnType = {
  openDrawer: (destination: drawerOptions, id: string) => void;
  goBack: () => void;
  closeDrawer: () => void;
};

export const useDrawer = (): UseDrawerReturnType => {
  const navigate = useNavigate();
  const location = useLocation();
  const { prefix } = useParams();

  const openDrawer = useCallback(
    (destination: drawerOptions, id: string) => {
      const drawerUrlIndex = location.pathname.indexOf("/drawer");

      navigate(
        drawerUrlIndex !== -1
          ? `${location.pathname.slice(
              0,
              location.pathname.indexOf("/drawer")
            )}/drawer${destination}/${id}`
          : `${location.pathname}/drawer${destination}/${id}`
      );
    },
    [location.pathname, navigate]
  );

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const closeDrawer = useCallback(() => {
    const drawerUrlIndex = location.pathname.indexOf("/drawer");
    console.log(drawerUrlIndex);
    // if (drawerUrlIndex !== -1)
    //   navigate(
    //     `/${location.pathname.slice(0, location.pathname.indexOf("/drawer"))}`
    //   );
  }, [location.pathname, navigate]);

  return { openDrawer, goBack, closeDrawer };
};
