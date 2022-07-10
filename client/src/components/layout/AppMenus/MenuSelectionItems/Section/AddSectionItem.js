import React from "react";
import AddSectionIcon from "../../../Icons/AddSectionIcon";

const AddSectionItem = () => {
  return (
    <li className="menu__selection_item">
      <AddSectionIcon width={24} />
      <p className="selection__title">Add section</p>
    </li>
  );
};

export default AddSectionItem;
