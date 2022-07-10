import React from "react";
import EmailIcon from "../../../Icons/EmailIcon";

const EmailItem = () => {
  return (
    <li className="menu__selection_item">
      <EmailIcon width={24} />
      <p className="selection__title">Email tasks to this project</p>
    </li>
  );
};

export default EmailItem;
