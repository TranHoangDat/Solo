import React, { useState } from "react";
import NotificationMenu from "../../AppMenus/NotificationMenu";
import NotificationIcon from "../../Icons/NotificationIcon";

const NotificationButton = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div className="header__btn_wrapper">
      <div className="header__btn" onClick={() => setActiveMenu(!activeMenu)}>
        <NotificationIcon width={24} />
      </div>
      {activeMenu && <NotificationMenu setActiveMenu={setActiveMenu} />}
    </div>
  );
};

export default NotificationButton;
