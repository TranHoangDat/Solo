import React from "react";
import LinkIcon from "../../../Icons/LinkIcon";

const CopyLinkItem = () => {
  return (
    <li className="menu__selection_item">
      <LinkIcon width={24} />
      <p className="selection__title">Copy link to task</p>
    </li>
  );
};

export default CopyLinkItem;
