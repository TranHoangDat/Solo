import React from "react";
import ReminderIcon from "../../../Icons/ReminderIcon";

const ReminderTaskItem = () => {
  return (
    <li className="menu__selection_item">
      <ReminderIcon width={24} />
      <p className="selection__title">Reminder</p>
    </li>
  );
};

export default ReminderTaskItem;
