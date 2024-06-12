import { useParams } from "react-router-dom";
import { useDrawer } from "./useDrawer";
import { drawerOptions } from "./DetailsDrawer";

export const ShortDetail = () => {
  const { drawerId } = useParams();

  const { openDrawer, goBack, closeDrawer } = useDrawer();

  return (
    <div>
      <button
        onClick={() => openDrawer(drawerOptions.LongDetails, drawerId || "")}
      >
        to long detail
      </button>
      short detail {drawerId}
      <button onClick={() => goBack()}>go back</button>
      <button onClick={() => closeDrawer()}>close</button>
    </div>
  );
};
