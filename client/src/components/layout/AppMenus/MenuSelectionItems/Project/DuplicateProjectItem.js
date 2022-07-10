import React from "react";
import DuplicateIcon from "../../../Icons/DuplicateIcon";

const DuplicateProjectItem = (props) => {
  return (
    <li className="menu__selection_item" onClick={()=> props.handleOnClick()}>
      <DuplicateIcon width={24} />
      <p className="selection__title">Duplicate project</p>
    </li>
  );
};

export default DuplicateProjectItem;
