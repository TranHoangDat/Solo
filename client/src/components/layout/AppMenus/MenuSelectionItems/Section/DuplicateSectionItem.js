import React from "react";
import DuplicateIcon from "../../../Icons/DuplicateIcon";

const DuplicateSectionItem = (props) => {
  return (
    <li className="menu__selection_item" onClick={() => props.handleOnClick()}>
      <DuplicateIcon width={24} />
      <p className="selection__title">Duplicate section</p>
    </li>
  );
};

export default DuplicateSectionItem;
