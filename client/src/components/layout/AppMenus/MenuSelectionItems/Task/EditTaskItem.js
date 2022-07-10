import React from "react";
import EditIcon from "../../../Icons/EditIcon";

const EditTaskItem = () => {
  return (
    <li className="menu__selection_item">
      <EditIcon width={24} />
      <p className="selection__title">Edit task</p>
    </li>
  );
};

export default EditTaskItem;
