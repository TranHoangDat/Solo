import React from "react";
import MoreScheduleButton from "../../../AppButtons/ContentButton/MoreScheduleButton";
import SetScheduleButton from "../../../AppButtons/ContentButton/SetScheduleButton";

const ScheduleItem = () => {
  return (
    <li className="menu__selection_item multiple__selections">
      <p className="selection__title">Schedule</p>
      <div className="item__buttons_wrapper">
        <SetScheduleButton schedule="TODAY" />
        <SetScheduleButton schedule="TOMORROW" />
        <SetScheduleButton schedule="NEXT_WEEK" />
        <SetScheduleButton schedule="NONE" />
        <MoreScheduleButton />
      </div>
    </li>
  );
};

export default ScheduleItem;
