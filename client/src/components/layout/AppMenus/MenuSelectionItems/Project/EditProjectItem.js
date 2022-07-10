import React from "react";
import EditIcon from "../../../Icons/EditIcon";

const EditProjectItem = (props) => {
  return (
    <li className="menu__selection_item" onClick={()=>props.handleOnClick()}>
      <EditIcon width={24} />
      <p className="selection__title">Edit project</p>
    </li>
  );
};

export default EditProjectItem;
