import React from "react";
import SidebarIcon from "../../Icons/SidebarIcon";

const SidebarButton = props => {
  return (
    <div className="header__btn_wrapper">
      <div
        className="header__btn"
        onClick={() => props.setActiveSidebar(!props.activeSidebar)}
      >
        <SidebarIcon width={24} />
      </div>
    </div>
  );
};

export default SidebarButton;
