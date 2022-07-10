import React from "react";
import LeaveIcon from "../../../Icons/LeaveIcon";

const LeaveProjectItem = (props) => {
  return (
    <li className="menu__selection_item" onClick={() => props.handleOnClick()}>
      <LeaveIcon width={24} />
      <p className="selection__title">Leave project</p>
    </li>
  );
};

export default LeaveProjectItem;
