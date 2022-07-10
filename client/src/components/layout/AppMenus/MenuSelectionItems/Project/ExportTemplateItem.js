import React from "react";
import ExportTemplateIcon from "../../../Icons/ExportTemplateIcon";

const ExportTemplateItem = () => {
  return (
    <li className="menu__selection_item">
      <ExportTemplateIcon width={24} />
      <p className="selection__title">Export as a template</p>
    </li>
  );
};

export default ExportTemplateItem;
