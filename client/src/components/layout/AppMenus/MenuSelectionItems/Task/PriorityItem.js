import React from "react";
import SetPriorityButton from "../../../AppButtons/ContentButton/SetPriorityButton";

const PriorityItem = () => {
  return (
    <li className="menu__selection_item multiple__selections">
      <p className="selection__title">Priority</p>
      <div className="item__buttons_wrapper">
        <SetPriorityButton priority={1} />
        <SetPriorityButton priority={2} />
        <SetPriorityButton priority={3} />
        <SetPriorityButton priority={4} />
      </div>
    </li>
  );
};

export default PriorityItem;
