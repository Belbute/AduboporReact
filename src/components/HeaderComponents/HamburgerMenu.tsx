import React from "react";
import classNames from "classnames";

interface HamburgerMenuProps {
  opened: boolean;
  onClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ opened, onClick }) => {
  return (
    <div
      className={classNames("tham tham-e-squeeze tham-w-5", { "tham-active": opened })}
      onClick={onClick}
    >
      <div className="tham-box">
        <div className="tham-inner bg-teal-500" />
      </div>
    </div>
  );
};

export default HamburgerMenu;
