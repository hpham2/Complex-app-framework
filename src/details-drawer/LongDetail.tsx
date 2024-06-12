import { useParams } from "react-router-dom";
import { useDrawer } from "./useDrawer";

export const LongDetail = () => {
  const { drawerId } = useParams();
  const { openDrawer, goBack, closeDrawer } = useDrawer();

  return (
    <div>
      <button onClick={() => goBack()}>go back</button>Long detail {drawerId}
      <button onClick={() => closeDrawer()}>close</button>
    </div>
  );
};
