import { useState } from "react";
import "./Dashboard.css";
import { DashboardCard } from "./components/menu-item/DashBoardCard";

const Dashboard = () => {
  const [cardList, setCardList] = useState<{ id: number; name: string }[]>([
    { id: 0, name: "abc" },
    { id: 1, name: "abc" },
    { id: 2, name: "abc" },
    { id: 3, name: "abc" },
    { id: 4, name: "abc" },
    { id: 5, name: "abc" },
    { id: 6, name: "abc" },
    { id: 3, name: "abc" },
    { id: 4, name: "abc" },
    { id: 5, name: "abc" },
    { id: 6, name: "abc" },
  ]);

  return (
    <ul className="cardListWrapper">
      {cardList.map((card) => (
        <li>
          <DashboardCard id={card.id} name={card.name} />
        </li>
      ))}
    </ul>
  );
};

export default Dashboard;
