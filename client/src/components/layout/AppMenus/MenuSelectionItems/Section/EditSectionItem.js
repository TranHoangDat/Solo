import React from "react";
import EditIcon from "../../../Icons/EditIcon";

const EditSectionItem = (props) => {
  return (
    <li className="menu__selection_item" onClick={()=>props.handleOnClick()}>
      <EditIcon width={24} />
      <p className="selection__title">Edit section</p>
    </li>
  );
};

export default EditSectionItem;
