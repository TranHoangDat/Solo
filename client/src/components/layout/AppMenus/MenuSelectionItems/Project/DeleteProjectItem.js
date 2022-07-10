import React from "react";
import DeleteIcon from "../../../Icons/DeleteIcon";

const DeleteProjectItem = (props) => {
  return (
    <li className="menu__selection_item" onClick={()=> props.handleOnClick()}>
      <DeleteIcon />
      <p className="selection__title">Delete project</p>
    </li>
  );
};

export default DeleteProjectItem;
