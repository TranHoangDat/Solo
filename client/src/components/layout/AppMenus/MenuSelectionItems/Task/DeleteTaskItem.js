import React from "react";
import DeleteIcon from "../../../Icons/DeleteIcon";

const DeleteTaskItem = (props) => {
  return (
    <li className="menu__selection_item" onClick={()=>props.handleOnClick()}>
      <DeleteIcon width={24} />
      <p className="selection__title">Delete task</p>
    </li>
  );
};

export default DeleteTaskItem;
