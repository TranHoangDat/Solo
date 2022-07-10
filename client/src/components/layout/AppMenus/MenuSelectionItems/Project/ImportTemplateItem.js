import React from "react";
import ImportTemplateIcon from "../../../Icons/ImportTemplateIcon";

const ImportTemplateItem = () => {
  return (
    <li className="menu__selection_item">
      <ImportTemplateIcon width={24} />
      <p className="selection__title">Import from template</p>
    </li>
  );
};

export default ImportTemplateItem;
