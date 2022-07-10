import React from "react";
import DeleteIcon from "../../../Icons/DeleteIcon";

const DeleteSectionItem = (props) => {
  return (
    <li className="menu__selection_item" onClick = {()=>props.handleOnClick()}>
      <DeleteIcon />
      <p className="selection__title">Delete section</p>
    </li>
  );
};

export default DeleteSectionItem;
