import React from "react";
import CalendarFeedIcon from "../../../Icons/CalendarFeedIcon";

const CalendarFeedItem = () => {
  return (
    <li className="menu__selection_item">
      <CalendarFeedIcon />
      <p className="selection__title">Project calendar feed</p>
    </li>
  );
};

export default CalendarFeedItem;
