import React from "react";
import DuplicateIcon from "../../../Icons/DuplicateIcon";

const DuplicateTaskItem = (props) => {
  return (
    <li className="menu__selection_item" onClick={() => props.handleOnClick()}>
      <DuplicateIcon width={24} />
      <p className="selection__title">Duplicate</p>
    </li>
  );
};

export default DuplicateTaskItem;
