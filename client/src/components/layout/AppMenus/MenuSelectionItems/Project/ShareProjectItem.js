import React from "react";
import AddMemberIcon from "../../../Icons/AddMemberIcon";

const ShareProjectItem = () => {
  return (
    <li className="menu__selection_item">
      <AddMemberIcon />
      <p className="selection__title">Share project</p>
    </li>
  );
};

export default ShareProjectItem;
