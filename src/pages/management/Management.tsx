import { useState } from "react";
import "./Management.css";
import { ManagementRow } from "./components/management-row/ManagementRow";

const Management = () => {
  const [rowList, setRowList] = useState<{ id: number; name: string }[]>([
    { id: 0, name: "abc" },
    { id: 1, name: "abc" },
    { id: 2, name: "abc" },
    { id: 3, name: "abc" },
  ]);

  return (
    <ul className="rowsWrapper">
      {rowList.map((card) => (
        <li>
          <ManagementRow id={card.id} name={card.name} />
        </li>
      ))}
    </ul>
  );
};

export default Management;
