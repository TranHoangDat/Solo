import React from "react";
import ArchiveIcon from "../../../Icons/ArchiveIcon";

const ArchiveProjectItem = (props) => {
  return (
    <li className="menu__selection_item" onClick={() => props.handleOnClick()}>
      <ArchiveIcon width={24} />
      <p className="selection__title">
        {props.archive ? 'Unarchive project' : 'Archive project'}
      </p>
    </li>
  );
};

export default ArchiveProjectItem;
