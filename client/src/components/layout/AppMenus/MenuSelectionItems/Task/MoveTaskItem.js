import React from "react";
import MoveIcon from "../../../Icons/MoveIcon";

const MoveTaskItem = () => {
  return (
    <li className="menu__selection_item">
      <MoveIcon width={24} />
      <p className="selection__title">Move to project</p>
    </li>
  );
};

export default MoveTaskItem;
