import React, { useState } from "react";
import MarkAsReadButton from "../AppButtons/ContentButton/MarkAsReadButton";
import NotificationTabContent from "../TabsContent/NotificationTabContent";
import UnreadTabContent from "../TabsContent/UnreadTabContent";
import "./NotificationMenu.scss";

const NotificationMenu = props => {
  const Tab = {
    NOTIFICATION: 0,
    UNREAD: 1,
  };

  const [tabContent, setTabContent] = useState(Tab.NOTIFICATION);

  return (
    <div
      className="app__menu_wrapper notification__menu"
      onBlur={() => props.setActiveMenu(false)}
    >
      <div className="menu__tabs_wrapper">
        <div
          className={
            tabContent === Tab.NOTIFICATION ? "menu__tab selected" : "menu__tab"
          }
          onClick={() => setTabContent(Tab.NOTIFICATION)}
        >
          Notifications
        </div>
        <div
          className={
            tabContent === Tab.UNREAD ? "menu__tab selected" : "menu__tab"
          }
          onClick={() => setTabContent(Tab.UNREAD)}
        >
          Unread
        </div>
        <MarkAsReadButton />
      </div>
      {tabContent === Tab.NOTIFICATION && <NotificationTabContent />}
      {tabContent === Tab.UNREAD && <UnreadTabContent />}
    </div>
  );
};

export default NotificationMenu;
