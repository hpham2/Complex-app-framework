import { ReactElement } from "react";
import "./MenuItem.css";

type MenuItemProps = {
  leftIcon?: ReactElement;
  labelText: string;
  onClick: () => void;
  bgColor?: string;
};

export const MenuItem = ({
  leftIcon,
  labelText,
  onClick,
  bgColor = "white",
}: MenuItemProps) => {
  return (
    <li
      className="appButtonWrapper"
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      {leftIcon && <div className="leftIcon">{leftIcon}</div>}
      <div>{labelText}</div>
    </li>
  );
};
