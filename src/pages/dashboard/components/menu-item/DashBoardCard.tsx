import "./DashBoardCard.css";
import { useDrawer } from "../../../../details-drawer/useDrawer";
import { drawerOptions } from "../../../../details-drawer/DetailsDrawer";

type DashBoardCardProps = {
  id: number;
  name: string;
  bgColor?: string;
};

export const DashboardCard = ({
  id,
  name,
  bgColor = "#FFCBC1",
}: DashBoardCardProps) => {
  const { openDrawer } = useDrawer();

  return (
    <div
      className="wrapper"
      style={{ backgroundColor: bgColor }}
      onClick={() => openDrawer(drawerOptions.ShortDetails, id.toString())}
      key={id}
    >
      {name}
    </div>
  );
};
