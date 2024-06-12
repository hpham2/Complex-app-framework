import "./ManagementRow.css";
import { useDrawer } from "../../../../details-drawer/useDrawer";
import { drawerOptions } from "../../../../details-drawer/DetailsDrawer";

type ManagementRowProps = {
  id: number;
  name: string;
  bgColor?: string;
};

export const ManagementRow = ({
  id,
  name,
  bgColor = "#FFCBC1",
}: ManagementRowProps) => {
  const { openDrawer } = useDrawer();

  return (
    <div
      className="managementRowWrapper"
      style={{ backgroundColor: bgColor }}
      onClick={() => openDrawer(drawerOptions.ShortDetails, id.toString())}
      key={id}
    >
      {name}
    </div>
  );
};
