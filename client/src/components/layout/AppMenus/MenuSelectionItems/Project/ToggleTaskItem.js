import React from "react";
import HideIcon from "../../../Icons/HideIcon";
import ShowIcon from "../../../Icons/ShowIcon";

const ToggleTaskItem = (props) => {
  return (
    <li className="menu__selection_item" onClick={() => props.handleOnClick()}>
      {!props.showCompleted && 
      <>
        <ShowIcon width={24} />
        <p className="selection__title">Show completed tasks</p>
      </>}
      {props.showCompleted &&
      <>
        <HideIcon width={24} />
        <p className="selection__title">Hide completed tasks</p>
      </>}
    </li>
  );
};

export default ToggleTaskItem;
