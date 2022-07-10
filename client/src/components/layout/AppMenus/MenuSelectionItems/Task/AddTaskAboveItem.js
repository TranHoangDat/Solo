import React from "react";
import AddAboveIcon from "../../../Icons/AddAboveIcon";

const AddTaskAboveItem = () => {
  return (
    <li className="menu__selection_item">
      <AddAboveIcon width={24} />
      <p className="selection__title">Add task above</p>
    </li>
  );
};

export default AddTaskAboveItem;
