import React from "react";
import AddBelowIcon from "../../../Icons/AddBelowIcon";

const AddTaskBelowItem = () => {
  return (
    <li className="menu__selection_item">
      <AddBelowIcon />
      <p className="selection__title">Add task below</p>
    </li>
  );
};

export default AddTaskBelowItem;
